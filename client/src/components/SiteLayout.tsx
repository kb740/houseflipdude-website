import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  { name: "YouTube", href: "https://www.youtube.com/@HouseFlipDude", icon: (props: React.SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
  { name: "Instagram", href: "https://www.instagram.com/houseflipdude/", icon: (props: React.SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg> },
  { name: "Facebook", href: "https://www.facebook.com/profile.php?id=100014916131942", icon: (props: React.SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/houseflipdude/", icon: (props: React.SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
  { name: "X", href: "https://x.com/HouseFlipDude", icon: (props: React.SVGProps<SVGSVGElement>) => <svg {...props} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
];

const BITMOJI_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/93737141/TXSkgaQSgDEqEfqV.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/what-is-a-wholesaler", label: "Wholesaler Alert" },
  { href: "/for-realtors", label: "For Realtors" },
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
            <a href="tel:+19252371335" className="flex items-center gap-1 hover:underline">
              <Phone className="w-3 h-3" /> <span>(925) 237-1335</span>
            </a>
            <div className="hidden sm:flex items-center gap-2 ml-2 border-l border-primary-foreground/30 pl-3">
              {socialLinks.map(s => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`Follow us on ${s.name}`} className="hover:text-secondary transition-colors">
                  <s.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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

            {/* Solutions */}
            <div>
              <h4 className="font-semibold text-background mb-4 text-sm uppercase tracking-wider">Solutions</h4>
              <div className="flex flex-col gap-2 text-sm text-background/60">
                <Link href="/foreclosure" className="hover:text-primary transition-colors">Facing Foreclosure</Link>
                <Link href="/inherited-homes" className="hover:text-primary transition-colors">Inherited a Home</Link>
                <Link href="/sell-as-is" className="hover:text-primary transition-colors">Sell As-Is</Link>
                <Link href="/what-is-a-wholesaler" className="hover:text-primary transition-colors">What is a Wholesaler?</Link>
                <Link href="/for-realtors" className="hover:text-primary transition-colors">For Realtors</Link>
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
                <a href="tel:+19252371335" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" /> (925) 237-1335
                </a>
                <a href="mailto:kb@houseflipdude.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" /> kb@houseflipdude.com
                </a>
                <div className="flex items-center gap-3 mt-3">
                  {socialLinks.map(s => (
                    <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`Follow HouseFlipDude on ${s.name}`} className="text-background/50 hover:text-primary transition-colors">
                      <s.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
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
