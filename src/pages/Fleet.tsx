import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import scootyImage from "@/assets/scooty-godelivery.jpg";
import { Link } from "react-router-dom";
import { Battery, Gauge, Zap, Shield, Check, ArrowRight, RefreshCw, MapPin } from "lucide-react";

const scootySpecs = [
  { icon: Battery, label: "Battery", value: "Swappable" },
  { icon: Zap, label: "Range", value: "70 KM" },
  { icon: Shield, label: "Insurance", value: "Included" },
];

const features = [
  "No license required",
  "No registration needed",
  "Battery swap stations",
  "GPS tracking enabled",
  "Anti-theft system",
  "Mobile app integration",
  "24/7 roadside assistance",
];

const stats = [
  { value: "1000+", label: "Active Riders" },
  { value: "70 KM", label: "Per Battery Range" },
  { value: "2 Min", label: "Battery Swap Time" },
];

export default function Fleet() {
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
              Our Fleet
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 md:mb-6">
              Best EV Scooty <span className="text-gradient">in Delhi</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Go-Delivery provides the best rental EV scooty in Delhi with swappable battery technology. 1000+ riders trust us across Delhi NCR.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-12 md:mb-20">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-modern p-4 md:p-6 text-center"
              >
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</p>
                <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Main Scooty */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="bg-foreground rounded-2xl md:rounded-3xl overflow-hidden">
                <img src={scootyImage} alt="Go-Delivery EV Scooty - Best Rental EV in Delhi" className="w-full h-auto" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-4">
                Go-Delivery EV Scooty
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
                Built for <span className="text-gradient">Deliveries</span>
              </h2>
              <p className="text-muted-foreground mb-4 text-sm md:text-base">
                Our specially designed EV scooties are perfect for food and package delivery in Delhi. With swappable battery technology, you never have to wait for charging!
              </p>
              
              <div className="flex items-center gap-2 mb-4 md:mb-6 p-3 bg-primary/10 rounded-xl">
                <RefreshCw className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-foreground font-medium text-sm md:text-base">Swappable Battery - No Charging Wait!</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                {scootySpecs.map((spec) => (
                  <div key={spec.label} className="card-modern p-3 md:p-4 flex items-center gap-3">
                    <div className="w-9 md:w-10 h-9 md:h-10 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center">
                      <spec.icon className="h-4 md:h-5 w-4 md:w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">{spec.label}</p>
                      <p className="font-semibold text-foreground text-sm md:text-base">{spec.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Book Now <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          {/* Service Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-foreground rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-center mb-12 md:mb-20"
          >
            <MapPin className="h-10 md:h-12 w-10 md:w-12 text-primary mx-auto mb-3 md:mb-4" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-background mb-3 md:mb-4">
              Service Area: All Over Delhi NCR
            </h3>
            <p className="text-background/60 max-w-2xl mx-auto text-sm md:text-base">
              Go-Delivery serves all major areas in Delhi including South Delhi, North Delhi, East Delhi, West Delhi, Noida, Gurgaon, and surrounding regions.
            </p>
          </motion.div>

          {/* Features */}
          <section>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-8 md:mb-12">
              What's <span className="text-gradient">Included</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
              {features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="card-modern p-3 md:p-4 flex items-center gap-2 md:gap-3"
                >
                  <Check className="h-4 md:h-5 w-4 md:w-5 text-primary flex-shrink-0" />
                  <span className="text-xs md:text-sm text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}