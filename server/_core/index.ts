import "dotenv/config";
import express from "express";
import { createServer } from "http";
import net from "net";
import path from "path";
import fs from "fs";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { clerkMiddleware, getAuth } from "@clerk/express";
import { appRouter } from "../routers";
import { createContext } from "./context";
import { serveStatic, setupVite } from "./vite";

function isPortAvailable(port: number): Promise<boolean> {
  return new Promise(resolve => {
    const server = net.createServer();
    server.listen(port, () => {
      server.close(() => resolve(true));
    });
    server.on("error", () => resolve(false));
  });
}

async function findAvailablePort(startPort: number = 3000): Promise<number> {
  for (let port = startPort; port < startPort + 20; port++) {
    if (await isPortAvailable(port)) {
      return port;
    }
  }
  throw new Error(`No available port found starting from ${startPort}`);
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  // 301 Redirect: non-www → www and HTTP → HTTPS (production only)
  if (process.env.NODE_ENV === "production") {
    app.use((req, res, next) => {
      const host = req.headers.host || "";
      const proto = req.headers["x-forwarded-proto"] || req.protocol;

      if (host && !host.startsWith("www.") && host.includes("houseflipdude.com")) {
        return res.redirect(301, `https://www.${host}${req.originalUrl}`);
      }

      if (proto === "http" && host.includes("houseflipdude.com")) {
        return res.redirect(301, `https://${host}${req.originalUrl}`);
      }

      next();
    });
  }

  // Body parsers
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));

  // Public static files — registered before any auth middleware so they
  // are never blocked by Clerk errors (e.g. CLERK_SECRET_KEY not yet set).
  app.get("/sitemap-hfd.xml", (_req, res) => {
    const sitemapPath = process.env.NODE_ENV === "development"
      ? path.resolve(import.meta.dirname, "../../client/public/sitemap-hfd.xml")
      : path.resolve(import.meta.dirname, "public/sitemap-hfd.xml");
    if (fs.existsSync(sitemapPath)) {
      res.set("Content-Type", "application/xml");
      res.send(fs.readFileSync(sitemapPath, "utf-8"));
    } else {
      res.status(404).send("Sitemap not found");
    }
  });

  app.get("/robots.txt", (_req, res) => {
    const robotsPath = process.env.NODE_ENV === "development"
      ? path.resolve(import.meta.dirname, "../../client/public/robots.txt")
      : path.resolve(import.meta.dirname, "public/robots.txt");
    if (fs.existsSync(robotsPath)) {
      res.set("Content-Type", "text/plain");
      res.send(fs.readFileSync(robotsPath, "utf-8"));
    } else {
      res.status(404).send("robots.txt not found");
    }
  });

  // API sub-router — Clerk middleware is scoped here so it NEVER runs for
  // the SPA catch-all or static asset serving below.
  const apiRouter = express.Router();
  apiRouter.use(clerkMiddleware());

  apiRouter.get("/auth/me", (req, res) => {
    const { userId, sessionClaims } = getAuth(req);
    res.json({
      userId: userId ?? null,
      metadata: (sessionClaims as Record<string, unknown>)?.publicMetadata ?? null,
    });
  });

  apiRouter.use(
    "/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );

  app.use("/api", apiRouter);

  // SPA serving — completely outside Clerk scope.
  // In development Vite handles HMR; in production serve the built dist.
  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const preferredPort = parseInt(process.env.PORT || "3000");
  const port = await findAvailablePort(preferredPort);

  if (port !== preferredPort) {
    console.log(`Port ${preferredPort} is busy, using port ${port} instead`);
  }

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
