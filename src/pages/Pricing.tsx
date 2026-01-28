import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import scootyImage from "@/assets/scooty-godelivery.jpg";
import { Link } from "react-router-dom";
import { Check, Phone, Battery, Zap } from "lucide-react";

const batteryPlans = [
  {
    name: "7 Battery Swaps",
    price: "1,299",
    duration: "7 Days",
    swaps: 7,
    features: ["70 KM Range", "GPS Tracking", "No License Required", "Free Maintenance", "Priority Support"],
  },
  {
    name: "14 Battery Swaps",
    price: "1,599",
    duration: "7 Days",
    swaps: 14,
    featured: true,
    badge: "Most Popular",
    features: ["70 KM Range", "GPS Tracking", "No License Required", "Free Maintenance", "Priority Support"],
  },
  {
    name: "18 Battery Swaps",
    price: "1,799",
    duration: "7 Days",
    swaps: 18,
    features: ["70 KM Range", "GPS Tracking", "No License Required", "Free Maintenance", "Priority Support"],
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="container px-4 md:px-6">
          {/* Hero */}
          <motion.div
            className="text-center mb-12 md:mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-2 rounded-full border border-border text-sm font-medium mb-4">
              Pricing
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 md:mb-6">
              Battery Swap <span className="text-gradient">Plans</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Best EV scooty rental plans in Delhi. Choose your battery swap package. No hidden charges.
            </p>
          </motion.div>

          {/* Plans */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto mb-12 md:mb-20">
            {batteryPlans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`card-modern p-6 md:p-8 relative ${plan.featured ? "ring-2 ring-primary sm:scale-105" : ""}`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-white text-xs font-semibold whitespace-nowrap">
                    {plan.badge}
                  </span>
                )}
                
                <div className="aspect-[4/3] bg-foreground rounded-xl md:rounded-2xl mb-5 md:mb-6 flex items-center justify-center overflow-hidden">
                  <img src={scootyImage} alt={plan.name} className="w-full h-full object-cover" />
                </div>
                
                {/* Battery Swaps Indicator */}
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <Battery className="h-4 md:h-5 w-4 md:w-5 text-primary" />
                  <span className="font-semibold text-foreground text-sm md:text-base">{plan.swaps} Battery Swaps</span>
                </div>
                
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="mb-4 md:mb-6">
                  <span className="text-sm text-muted-foreground">₹</span>
                  <span className="text-4xl md:text-5xl font-black text-gradient">{plan.price}</span>
                  <p className="text-xs md:text-sm text-muted-foreground">for {plan.duration}</p>
                </div>
                
                <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 md:gap-3 text-xs md:text-sm">
                      <Check className="h-3.5 md:h-4 w-3.5 md:w-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact" 
                  className={`w-full py-3 rounded-full font-semibold text-center block transition-all text-sm md:text-base ${
                    plan.featured 
                      ? "bg-primary text-white hover:bg-primary-dark" 
                      : "bg-secondary text-foreground hover:bg-foreground hover:text-background"
                  }`}
                >
                  Book Now
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-secondary rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 max-w-4xl mx-auto mb-12 md:mb-20"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl md:rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Zap className="h-5 md:h-6 w-5 md:w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">How Battery Swap Works?</h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  Visit any of our battery swap stations across Delhi. Exchange your depleted battery for a fully charged one in under 2 minutes. No waiting, no charging hassle!
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="bg-background rounded-xl md:rounded-2xl p-3 md:p-4 text-center">
                <p className="text-2xl md:text-3xl font-bold text-gradient">70 KM</p>
                <p className="text-xs md:text-sm text-muted-foreground">Range per Battery</p>
              </div>
              <div className="bg-background rounded-xl md:rounded-2xl p-3 md:p-4 text-center">
                <p className="text-2xl md:text-3xl font-bold text-gradient">2 Min</p>
                <p className="text-xs md:text-sm text-muted-foreground">Swap Time</p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-modern p-6 md:p-8 lg:p-12 text-center max-w-3xl mx-auto"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
              Need a custom plan?
            </h3>
            <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base">
              For fleet requirements or enterprise plans, contact our sales team.
            </p>
            <a href="tel:+919625977769" className="btn-primary inline-flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Call: +91 9625977769
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}