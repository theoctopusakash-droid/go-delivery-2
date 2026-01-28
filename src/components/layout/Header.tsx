import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/Logo";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/fleet", label: "Vehicles" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container flex items-center justify-between h-20 px-4 md:px-6">
        <Link to="/" className="flex items-center">
          <Logo size="lg" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-secondary/80 backdrop-blur-xl rounded-full px-2 py-2 border border-border" role="navigation">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                location.pathname === link.href
                  ? "bg-primary text-white shadow-md"
                  : "text-foreground hover:bg-background"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link to="/contact" className="hidden lg:block btn-primary text-sm">
          Book a Test Ride
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2.5 rounded-xl bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="lg:hidden absolute top-full left-4 right-4 mt-2 bg-background rounded-2xl shadow-xl border border-border p-4 z-50"
            >
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "px-4 py-3.5 rounded-xl text-base font-medium transition-all flex items-center justify-between",
                      location.pathname === link.href
                        ? "bg-primary text-white"
                        : "text-foreground hover:bg-secondary"
                    )}
                  >
                    {link.label}
                    {location.pathname === link.href && (
                      <span className="w-2 h-2 rounded-full bg-white" />
                    )}
                  </Link>
                ))}
                <Link 
                  to="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="btn-primary text-center mt-3"
                >
                  Book a Test Ride
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
