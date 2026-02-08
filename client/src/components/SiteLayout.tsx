import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const BITMOJI_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/93737141/gvaUXmsdfRQeTwkA.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  const [location] = useLocation();
  const isActive = location === href || (href !== "/" && location.startsWith(href));
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-sm font-medium transition-colors hover:text-primary ${isActive ? "text-primary" : "text-foreground/80"}`}
    >
      {label}
    </Link>
  );
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-xs py-1.5">
        <div className="container flex justify-between items-center">
          <span className="hidden sm:inline">Investors Compete to Buy Your Bay Area House for Top Dollar</span>
          <span className="sm:hidden text-[11px]">Bay Area Cash Home Buyers</span>
          <div className="flex items-center gap-4">
            <a href="mailto:kb@houseflipdude.com" className="flex items-center gap-1 hover:underline">
              <Mail className="w-3 h-3" /> <span className="hidden sm:inline">kb@houseflipdude.com</span>
            </a>
            <a href="tel:+15551234567" className="flex items-center gap-1 hover:underline">
              <Phone className="w-3 h-3" /> <span>(555) 123-4567</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <img src={BITMOJI_URL} alt="HouseFlipDude" className="h-10 w-10 rounded-full object-cover object-top border-2 border-primary/20" />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-extrabold tracking-tight text-foreground">
                House<span className="text-primary">Flip</span>Dude
              </span>
              <span className="text-[10px] text-muted-foreground font-medium -mt-0.5">Bay Area Cash Home Buyers</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(l => (
              <NavLink key={l.href} {...l} />
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link href="/#get-offer">
              <Button size="sm" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                Get My Offers
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <nav className="container py-4 flex flex-col gap-3">
              {navLinks.map(l => (
                <NavLink key={l.href} {...l} onClick={() => setMobileOpen(false)} />
              ))}
              <Link href="/#get-offer" onClick={() => setMobileOpen(false)}>
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold mt-2">
                  Get My Offers
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Page content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-foreground text-background/80">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={BITMOJI_URL} alt="HouseFlipDude" className="h-10 w-10 rounded-full object-cover object-top" />
                <span className="text-lg font-extrabold text-background">
                  House<span className="text-primary">Flip</span>Dude
                </span>
              </div>
              <p className="text-sm text-background/60 leading-relaxed">
                Multiple investors compete to buy your Bay Area house for top dollar. Any condition. No fees to you. Close on your timeline.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-background mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
              <div className="flex flex-col gap-2">
                {navLinks.map(l => (
                  <Link key={l.href} href={l.href} className="text-sm text-background/60 hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Service Areas */}
            <div>
              <h4 className="font-semibold text-background mb-4 text-sm uppercase tracking-wider">Service Areas</h4>
              <div className="flex flex-col gap-2 text-sm text-background/60">
                <Link href="/service-areas/san-francisco" className="hover:text-primary transition-colors">San Francisco</Link>
                <Link href="/service-areas/oakland" className="hover:text-primary transition-colors">Oakland / Alameda County</Link>
                <Link href="/service-areas/san-jose" className="hover:text-primary transition-colors">San Jose / Santa Clara</Link>
                <Link href="/service-areas/san-mateo" className="hover:text-primary transition-colors">San Mateo County</Link>
                <Link href="/service-areas/contra-costa" className="hover:text-primary transition-colors">Contra Costa County</Link>
                <Link href="/service-areas/sacramento" className="hover:text-primary transition-colors">Sacramento</Link>
                <Link href="/service-areas" className="text-primary hover:underline mt-1">View All Areas →</Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-background mb-4 text-sm uppercase tracking-wider">Contact Us</h4>
              <div className="flex flex-col gap-3 text-sm text-background/60">
                <a href="tel:+15551234567" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" /> (555) 123-4567
                </a>
                <a href="mailto:kb@houseflipdude.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" /> kb@houseflipdude.com
                </a>
                <p className="text-background/40 mt-2 text-xs">Licensed California Real Estate Broker</p>
                <p className="text-background/40 text-xs">DRE# 01205925</p>
              </div>
            </div>
          </div>

          <div className="border-t border-background/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-background/40">
              © {new Date().getFullYear()} HouseFlipDude. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs text-background/40">
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
