import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import scootyImage from "@/assets/scooty-godelivery.jpg";
import { Link } from "react-router-dom";
import { Target, Users, Leaf, Award, ArrowRight, Battery, MapPin } from "lucide-react";

const whyChoosePoints = [
  "Pollution-free delivery through electric vehicles, contributing to a cleaner and greener environment.",
  "Affordable pricing designed to suit both individuals and businesses.",
  "High standards of safety and security across all delivery operations.",
  "24×7 Roadside Assistance (RSA) to ensure uninterrupted service.",
  "24×7 customer support for quick and reliable assistance anytime.",
  "Better pricing on genuine spare parts compared to the market.",
  "Professional and experienced service team ensuring quality execution.",
  "Reliable, efficient, and timely delivery services you can trust."
];

const values = [
  { icon: Target, title: "Mission", description: "Make last-mile delivery eco-friendly and affordable in Delhi" },
  { icon: Users, title: "1000+ Riders", description: "Trusted by over 1000 delivery partners across Delhi" },
  { icon: Leaf, title: "Sustainability", description: "100% electric fleet for a greener Delhi" },
  { icon: Battery, title: "Swappable Battery", description: "Quick battery swap - no charging wait time" },
];

const stats = [
  { value: "1000+", label: "Active Riders" },
  { value: "Delhi NCR", label: "Service Area" },
  { value: "70 KM", label: "Range per Battery" },
  { value: "2 Min", label: "Battery Swap" },
];

export default function About() {
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
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 md:mb-6">
              Best EV Rental <span className="text-gradient">in Delhi</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Go-Delivery is Delhi's most trusted EV scooty rental service with 1000+ active riders. 
              We provide swappable battery scooties for delivery partners.
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
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient mb-1">{stat.value}</p>
                <p className="text-xs md:text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative order-2 lg:order-1"
            >
              <div className="bg-foreground rounded-2xl md:rounded-3xl overflow-hidden sticky top-28">
                <img src={scootyImage} alt="Go-Delivery EV Scooty - Best EV Rental Delhi" className="w-full h-auto" />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6">
                Why Choose <span className="text-gradient">Go-Delivery?</span>
              </h2>
              <p className="text-muted-foreground mb-6 text-sm md:text-base">
                We make it easy for delivery partners in Delhi to get EVs without the hassle of ownership. 
                Whether you work with Swiggy, Zomato, Blinkit, or any platform, our EVs help you deliver faster and earn more.
              </p>
              
              <ul className="space-y-3 mb-6 md:mb-8">
                {whyChoosePoints.map((item) => (
                  <li key={item} className="flex items-start gap-3 p-3 rounded-xl bg-secondary/50">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-foreground text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          {/* Mission & Vision */}
          <section className="mb-16 md:mb-24">
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card-modern p-6 md:p-8"
              >
                <div className="w-12 md:w-14 h-12 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 md:mb-6">
                  <Target className="h-6 md:h-7 w-6 md:w-7 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  Our mission is to provide reliable, affordable, and pollution-free delivery solutions through electric vehicles, while ensuring high standards of safety, customer satisfaction, and operational excellence. We aim to support businesses and communities with efficient logistics backed by 24×7 support and trusted service experience.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card-modern p-6 md:p-8"
              >
                <div className="w-12 md:w-14 h-12 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 md:mb-6">
                  <MapPin className="h-6 md:h-7 w-6 md:w-7 text-primary" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  Our vision is to become a leading and trusted electric delivery platform, driving a sustainable future with eco-friendly mobility, innovative logistics solutions, and customer-centric services. We strive to set new benchmarks in delivery efficiency, service quality, and environmental responsibility. In the future, we aim to expand our operations across Pan India, serving customers nationwide with reliable and sustainable delivery solutions.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Values */}
          <section>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-8 md:mb-12">Why We Stand Out</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-modern p-4 md:p-6 text-center"
                >
                  <div className="w-12 md:w-14 h-12 md:h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <v.icon className="h-6 md:h-7 w-6 md:w-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground text-base md:text-lg mb-1 md:mb-2">{v.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{v.description}</p>
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