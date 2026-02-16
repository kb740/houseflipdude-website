import "dotenv/config";
import express from "express";
import { createServer } from "http";
import net from "net";
import path from "path";
import fs from "fs";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { registerOAuthRoutes } from "./oauth";
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
  // This ensures all traffic consolidates to https://www.houseflipdude.com
  // preventing duplicate content issues flagged by SEO tools
  if (process.env.NODE_ENV === "production") {
    app.use((req, res, next) => {
      const host = req.headers.host || "";
      const proto = req.headers["x-forwarded-proto"] || req.protocol;

      // Redirect non-www to www
      if (host && !host.startsWith("www.") && host.includes("houseflipdude.com")) {
        return res.redirect(301, `https://www.${host}${req.originalUrl}`);
      }

      // Redirect HTTP to HTTPS
      if (proto === "http" && host.includes("houseflipdude.com")) {
        return res.redirect(301, `https://${host}${req.originalUrl}`);
      }

      next();
    });
  }

  // Configure body parser with larger size limit for file uploads
  app.use(express.json({ limit: "50mb" }));
  app.use(express.urlencoded({ limit: "50mb", extended: true }));
  // OAuth callback under /api/oauth/callback
  registerOAuthRoutes(app);
  // tRPC API
  app.use(
    "/api/trpc",
    createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
  // Serve hand-crafted sitemap.xml and robots.txt before other middleware
  // This ensures the production platform doesn't override with an auto-generated version
  // Serve the renamed sitemap that bypasses the platform's auto-generated /sitemap.xml
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

  // development mode uses Vite, production mode uses static files
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
