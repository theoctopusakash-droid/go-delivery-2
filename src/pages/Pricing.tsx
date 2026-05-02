import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Link } from "react-router-dom";
import { Check, Phone, Battery, Zap, Star } from "lucide-react";

const singlePlan = {
  name: "Weekly Unlimited",
  price: "1,599",
  duration: "7 Days",
  swaps: "Unlimited Battery Swaps",
  batteryType: "Sun Mobility",
  features: [
    "Unlimited Battery Swaps",
    "24x7 Customer Support",
    "RSA (Road Side Assistance)",
    "Zero Maintenance Cost"
  ]
};

export default function Pricing() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="container px-4 md:px-6">
          {/* Hero */}
          <motion.div
            className="text-center mb-12 md:mb-16"
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

          {/* Single Plan */}
          <div className="max-w-4xl mx-auto mb-16 md:mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-modern overflow-hidden ring-4 ring-primary shadow-2xl rounded-3xl bg-white flex flex-col md:flex-row relative"
            >
              {/* Most Popular Badge */}
              <div className="absolute top-4 right-4 md:left-4 md:right-auto z-10">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20">
                  <Star className="w-4 h-4 fill-white" />
                  Most Popular Plan
                </span>
              </div>

              {/* Image Section */}
              <div className="md:w-1/2 relative bg-secondary min-h-[300px] md:min-h-[400px] overflow-hidden">
                <img 
                  alt="Unlimited Weekly Plan" 
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                  src="/gd-uploads/7b09f69d-7f6a-4409-bb3c-74ab8bde5a14.jpg" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
                  <div className="text-white transform translate-y-0 transition-transform duration-500">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold mb-3 border border-white/30">
                      {singlePlan.batteryType} Battery
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-2">Ride Without<br/>Limits</h3>
                    <p className="text-white/80 text-sm md:text-base font-medium">Perfect for full-time delivery partners</p>
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-foreground mb-2">{singlePlan.name}</h3>
                      <div className="flex items-center gap-2 text-primary font-bold bg-primary/10 w-fit px-3 py-1.5 rounded-lg">
                        <Battery className="w-5 h-5" />
                        {singlePlan.swaps}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {singlePlan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 shadow-sm">
                          <Check className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-foreground font-semibold md:text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-6 border-t border-border/60">
                  <div className="flex items-end justify-between mb-6">
                    <div>
                      <p className="text-sm text-muted-foreground font-bold mb-1 uppercase tracking-wider">Plan Price</p>
                      <p className="flex items-baseline gap-1.5">
                        <span className="text-4xl md:text-5xl font-black text-gradient">₹{singlePlan.price}</span>
                        <span className="text-muted-foreground font-bold text-lg">/ {singlePlan.duration}</span>
                      </p>
                    </div>
                  </div>
                  
                  <Link 
                    to="/contact" 
                    className="w-full py-4 rounded-xl font-bold text-lg text-center block transition-all bg-primary text-white hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1"
                  >
                    Book Your Scooty Now
                  </Link>
                </div>
              </div>
            </motion.div>
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
