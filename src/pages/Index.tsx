import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollDrawLine } from "@/components/ScrollDrawLine";
import scootyImage from "@/assets/scooty-godelivery.jpg";
import logoImage from "@/assets/logo-godelivery.png";
import { Link } from "react-router-dom";
import { Zap, Shield, Clock, Leaf, Battery, Gauge, MapPin, Check, Star, Play, ArrowRight, Phone, Quote } from "lucide-react";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

const marqueeItems = ["Zero Emissions", "Lower Costs", "No License Required", "Free Maintenance", "GPS Tracking", "Weekly Rentals", "24/7 Support"];

const testimonials = [
  {
    quote: "Go Delivery ki EV scooty kaafi smooth hai. Daily delivery ke liye best option laga mujhe. Sach me best EV rental scooty hai city use ke liye.",
    author: "Rahul Kumar",
    role: "Delivery Partner",
    company: "Zomato",
    rating: 5,
  },
  {
    quote: "Petrol ka kharcha bach gaya Go Delivery ke saath. Scooty silent hai, maintenance bhi kam. Ekdum affordable aur best EV scooty for delivery.",
    author: "Amit Singh",
    role: "Delivery Partner",
    company: "Swiggy",
    rating: 5,
  },
  {
    quote: "Time pe service, achi scooty condition aur easy rental process. Overall experience kaafi acha raha. Definitely best EV scooty rental service.",
    author: "Vijay Sharma",
    role: "Delivery Partner",
    company: "Blinkit",
    rating: 5,
  },
  {
    quote: "Delivery work ke liye Go Delivery perfect hai. Environment-friendly, budget-friendly aur reliable. Mere liye to best EV scooty for delivery hai.",
    author: "Suresh Yadav",
    role: "Delivery Partner",
    company: "Amazon Flex",
    rating: 5,
  },
];
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
const features = [{
  icon: Leaf,
  title: "Eco-Friendly",
  desc: "100% Electric, Zero Emissions"
}, {
  icon: Shield,
  title: "Full Insurance",
  desc: "Comprehensive coverage included"
}, {
  icon: Clock,
  title: "24/7 Support",
  desc: "Round the clock assistance"
}, {
  icon: Zap,
  title: "No License",
  desc: "No registration required"
}];
const stats = [{
  number: "1000+",
  label: "Active Riders"
}, {
  number: "70 KM",
  label: "Per Battery Range"
}, {
  number: "2 Min",
  label: "Battery Swap Time"
}];
export default function Index() {
  return <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[85vh] flex items-center pt-32 pb-16 md:py-24 bg-geometric overflow-hidden">
          {/* Gradient Orbs */}
          <div className="absolute top-20 right-20 w-72 md:w-96 h-72 md:h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-48 md:w-72 h-48 md:h-72 bg-primary/5 rounded-full blur-3xl" />
          
          <div className="container relative z-10 px-4 md:px-6">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 md:mb-8">
                <Star className="h-4 w-4 fill-primary" />
                Best Rental EV Scooty in Delhi
              </motion.div>
              
              {/* Heading */}
              <motion.h1 initial={{
              opacity: 0,
              y: 30
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.1
            }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
                Best EV Scooty<br />
                <span className="text-gradient">Rental in Delhi</span>
              </motion.h1>
              
              {/* Subtitle */}
              <motion.p initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.2
            }} className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 px-4">
                Go-Delivery offers the best rental EV scooty in Delhi for delivery partners. 
                Weekly plans starting ₹1,599. No license, no registration, no hassle!
              </motion.p>
              
              {/* CTAs */}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6,
              delay: 0.3
            }} className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
                <Link to="/contact" className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2">
                  Book a Test Ride
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="tel:+919625977769" className="btn-outline-dark w-full sm:w-auto inline-flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Marquee Section */}
        <section className="py-6 bg-foreground overflow-hidden">
          <div className="marquee">
            <div className="marquee-content">
              {[...marqueeItems, ...marqueeItems].map((item, i) => <span key={i} className="flex items-center text-background font-semibold text-lg px-8 whitespace-nowrap">
                  {item}
                  <span className="mx-8 text-primary">—</span>
                </span>)}
            </div>
          </div>
        </section>

        <ScrollDrawLine>
        {/* Variants Section */}
        <motion.section 
          data-scooty-title="Zero Emission" 
          className="py-16 md:py-24 bg-background"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="container pl-4 pr-16 md:px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full border border-border text-sm font-medium mb-4">
                Choose
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Variant & Price
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto">
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
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section 
          data-scooty-title="Why Choose Us" 
          className="py-16 md:py-24 bg-secondary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="container pl-16 pr-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div initial={{
              opacity: 0,
              x: -30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }}>
                <span className="inline-block px-4 py-2 rounded-full border border-border text-sm font-medium mb-4">
                  Why Choose Us
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
                  Built for <span className="text-gradient">Delivery</span> Partners
                </h2>
                <p className="text-muted-foreground text-base md:text-lg mb-6 md:mb-8">
                  Our EV scooties are specially designed for food and package delivery. 
                  Maximize your earnings with zero fuel costs and reliable performance.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  {features.map((feature, i) => <motion.div key={feature.title} initial={{
                  opacity: 0,
                  y: 20
                }} whileInView={{
                  opacity: 1,
                  y: 0
                }} viewport={{
                  once: true
                }} transition={{
                  delay: i * 0.1
                }} className="flex items-start gap-4 p-4 rounded-2xl bg-background/50">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{feature.title}</h4>
                        <p className="text-sm text-muted-foreground">{feature.desc}</p>
                      </div>
                    </motion.div>)}
                </div>
              </motion.div>
              
              <motion.div initial={{
              opacity: 0,
              x: 30
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} className="relative order-first lg:order-last">
                <img alt="Go-Delivery EV Scooty Features" className="w-full max-w-sm md:max-w-md mx-auto animate-float rounded-3xl" src="/gd-uploads/f33ead2e-a216-4ebf-8528-ba57bff49fd2.jpg" />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section 
          data-scooty-title="Testimonials" 
          className="py-16 md:py-24 bg-background"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="container pl-4 pr-16 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full border border-border text-sm font-medium mb-4">
                Testimonials
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                What Our <span className="text-gradient">Partners</span> Say
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {testimonials.map((testimonial, i) => (
                <TestimonialCard
                  key={testimonial.author}
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  company={testimonial.company}
                  rating={testimonial.rating}
                  delay={i * 0.1}
                />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section 
          data-scooty-title="Our Impact" 
          className="py-12 md:py-16 bg-secondary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="container pl-4 pr-16 md:px-6 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
              {stats.map((stat, i) => (
                <motion.div 
                  key={stat.label} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 text-center shadow-md"
                >
                  <p className="text-2xl sm:text-3xl md:text-4xl font-black text-primary mb-1">{stat.number}</p>
                  <p className="text-muted-foreground text-sm md:text-base">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Hub Locations Section */}
        <motion.section 
          data-scooty-title="Hub Locations" 
          className="py-16 md:py-24 bg-secondary"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="container pl-16 pr-4 md:px-6 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 md:mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full border border-border text-sm font-medium mb-4">
                Our Locations
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Visit Our <span className="text-gradient">Hub Centers</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto px-4">
                Pick up your EV scooty from any of our 2 convenient hub locations in Delhi
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
              {/* Hub 1 - Sulahkul Vihar */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="card-modern overflow-hidden"
              >
                {/* Map Embed */}
                <div className="w-full h-48 md:h-56">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.749334714058!2d77.03124447601579!3d28.607295785225283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d05154ab47d2b%3A0x31f5fee0a031f733!2sGO%20DELIVERY!5e0!3m2!1sen!2sin!4v1768803985283!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sulahkul Vihar Hub - Go Delivery"
                  />
                </div>
                
                <div className="p-5 md:p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
                        Hub 1 - Old Palam Road
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Sulahkul Vihar Hub</h3>
                      <p className="text-sm md:text-base text-muted-foreground mb-3">
                        Plot No. 9, Sulahkul Vihar, Old Palam Road, New Delhi - 110078
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground mb-3">
                        <strong>Landmark:</strong> Near Sulahkul Mandir
                      </p>
                      <a href="tel:+919625977769" className="inline-flex items-center gap-2 text-primary font-semibold text-sm md:text-base">
                        <Phone className="h-4 w-4" />
                        +91 9625977769
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Hub 2 - Naraina */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="card-modern overflow-hidden"
              >
                {/* Map Embed */}
                <div className="w-full h-48 md:h-56">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.01569102617!2d77.13053138645569!3d28.629291821499987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03e0567dad13%3A0xdc0c1b7fbb1a598a!2sGO%20DELIVERY%20%7C%20Best%20EV%20Rental%20Scooty%20in%20delhi!5e0!3m2!1sen!2sin!4v1768804066150!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Naraina Industrial Hub - Go Delivery"
                  />
                </div>
                
                <div className="p-5 md:p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
                        Hub 2 - Naraina
                      </span>
                      <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Naraina Industrial Hub</h3>
                      <p className="text-sm md:text-base text-muted-foreground mb-3">
                        C 138, Naraina Industrial Area, Phase I, New Delhi - 110028
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground mb-3">
                        <strong>Landmark:</strong> Near Naraina Metro Station
                      </p>
                      <a href="tel:+917011458075" className="inline-flex items-center gap-2 text-primary font-semibold text-sm md:text-base">
                        <Phone className="h-4 w-4" />
                        +91 7011458075
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          data-scooty-title="Start Journey" 
          className="py-16 md:py-24 bg-geometric relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-10 right-10 w-72 md:w-96 h-72 md:h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="container relative z-10 pl-16 pr-4 md:px-6">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">
                Ready to Start Your<br />
                <span className="text-gradient">Delivery Journey?</span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-8 md:mb-10 px-4">
                Join 500+ delivery partners who trust Go-Delivery for reliable, 
                affordable, and eco-friendly transportation.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link to="/contact" className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2">
                  Book Now
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a href="tel:+919625977769" className="btn-outline-dark w-full sm:w-auto inline-flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  +91 9625977769
                </a>
              </div>
            </motion.div>
          </div>
        </motion.section>
        </ScrollDrawLine>
      </main>

      <Footer />
    </div>;
}
