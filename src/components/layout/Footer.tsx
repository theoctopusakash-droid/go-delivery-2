import { Link } from "react-router-dom";
import { Logo } from "@/components/brand/Logo";
import { MapPin, Phone, Mail, ArrowUpRight, Zap, Battery, Clock, Shield } from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Fleet", href: "/fleet" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
  support: [
    { label: "FAQ", href: "/faq" },
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
  ],
};

const features = [
  { icon: Zap, text: "No License Required" },
  { icon: Battery, text: "Swappable Battery" },
  { icon: Clock, text: "24/7 Support" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden" role="contentinfo">
      {/* Top CTA Section */}
      <div className="bg-primary py-8 md:py-12 px-4">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-center md:text-left">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">
                Ready to Start Delivering?
              </h3>
              <p className="text-white/80 text-sm md:text-base">
                Join 1000+ riders in Delhi. Book your EV scooty today!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
              <a 
                href="tel:+919625977769" 
                className="px-5 py-2.5 md:px-6 md:py-3 rounded-full bg-white text-primary font-semibold hover:bg-white/90 transition-all text-sm md:text-base text-center"
              >
                Call Now
              </a>
              <Link 
                to="/contact" 
                className="px-5 py-2.5 md:px-6 md:py-3 rounded-full bg-white/20 text-white font-semibold border border-white/30 hover:bg-white/30 transition-all text-sm md:text-base text-center"
              >
                Book Online
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-foreground text-background pt-10 md:pt-16 pb-6 md:pb-8 px-4">
        <div className="container">
          {/* Features Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-8 md:mb-12 pb-8 md:pb-12 border-b border-background/10">
            {features.map((feature) => (
              <div key={feature.text} className="flex items-center gap-3 justify-center sm:justify-start">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="h-4 w-4 md:h-5 md:w-5 text-primary" />
                </div>
                <span className="text-xs md:text-sm text-background/80">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mb-8 md:mb-12">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1 lg:col-span-1">
              <div className="bg-white rounded-xl md:rounded-2xl p-2 md:p-3 inline-block mb-4 md:mb-5">
                <Logo size="lg" />
              </div>
              <p className="text-background/60 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
                Best rental EV scooty service in Delhi NCR. Swappable battery technology for delivery partners.
              </p>
              <div className="flex gap-2 md:gap-3">
                <a 
                  href="https://wa.me/919625977769" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-green-500 flex items-center justify-center hover:bg-green-600 transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
                <a 
                  href="tel:+919625977769" 
                  className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
                  aria-label="Call"
                >
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </a>
                <a 
                  href="mailto:Support@godeliverygroup.com" 
                  className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-background" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-base md:text-lg mb-3 md:mb-5 text-background">Quick Links</h4>
              <ul className="space-y-2 md:space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-background/60 hover:text-primary transition-colors inline-flex items-center gap-1 group text-xs md:text-sm"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-base md:text-lg mb-3 md:mb-5 text-background">Contact Us</h4>
              <ul className="space-y-3 md:space-y-4">
                <li>
                  <a href="tel:+919625977769" className="flex items-start gap-2 md:gap-3 text-background/60 hover:text-primary transition-colors">
                    <Phone className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-background text-xs md:text-sm">+91 9625977769</p>
                      <p className="text-xs md:text-sm">+91 9625977768</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="mailto:Support@godeliverygroup.com" className="flex items-start gap-2 md:gap-3 text-background/60 hover:text-primary transition-colors">
                    <Mail className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs md:text-sm break-all">Support@godeliverygroup.com</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Address */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-bold text-base md:text-lg mb-3 md:mb-5 text-background">Our Hubs</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2 md:gap-3 text-background/60">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs md:text-sm leading-relaxed">
                      Plot No. 9, Sulahkul Vihar, Old Palam Road, New Delhi - 110078
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2 md:gap-3 text-background/60">
                  <MapPin className="h-4 w-4 md:h-5 md:w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs md:text-sm leading-relaxed">
                      C 138, Naraina Industrial Area, Phase I, New Delhi - 110028
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-3 md:mt-4 p-2 md:p-3 rounded-lg md:rounded-xl bg-background/5 border border-background/10">
                <p className="text-xs text-background/60">
                  <span className="text-primary font-medium">Office Hours:</span> 10 AM - 7 PM, 7 Days Open
                </p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-6 md:pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
            <p className="text-xs md:text-sm text-background/40 text-center md:text-left">
              © {new Date().getFullYear()} Go-Delivery. Best Rental EV Scooty in Delhi.
            </p>
            <div className="flex items-center gap-4 md:gap-6">
              {footerLinks.support.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-xs md:text-sm text-background/40 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;