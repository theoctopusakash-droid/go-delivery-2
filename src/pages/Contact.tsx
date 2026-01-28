import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { InputField } from "@/components/ui/InputField";
import { TextAreaField } from "@/components/ui/TextAreaField";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "919625977769";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    
    const whatsappMessage = `🚀 *New Inquiry - Go-Delivery*

👤 *Name:* ${name}
📞 *Phone:* ${phone}
📧 *Email:* ${email}

💬 *Message:*
${message}`;

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
    
    setIsLoading(false);
    window.open(whatsappUrl, "_blank");
    toast.success("Redirecting to WhatsApp!", { description: "Please send the message to complete your inquiry." });
  };

  const contactInfo = [
    { 
      icon: Phone, 
      title: "Phone - Dwarka Hub", 
      text: "+91 9625977769",
      subtext: "Sulahkul Vihar, Old Palam Road"
    },
    { 
      icon: Phone, 
      title: "Phone - Naraina Hub", 
      text: "+91 7011458075",
      subtext: "Naraina Industrial Area, Phase I"
    },
    { 
      icon: Mail, 
      title: "Email", 
      text: "Support@godeliverygroup.com",
      subtext: "Management@godeliverygroup.com"
    },
    { 
      icon: Clock, 
      title: "Office Hours", 
      text: "10 AM - 7 PM",
      subtext: "Open 7 Days a Week"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          {/* Hero */}
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-2 rounded-full border border-border text-sm font-medium mb-4">
              Contact Us
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Looking for the best rental EV scooty in Delhi? Contact us today to book your electric scooter!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="card-modern p-5 md:p-8"
            >
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField label="Name" name="name" placeholder="Your name" required />
                  <InputField label="Phone" name="phone" type="tel" placeholder="+91 98765 43210" required />
                </div>
                <InputField label="Email" name="email" type="email" placeholder="your@email.com" required />
                <TextAreaField label="Message" name="message" placeholder="I want to rent an EV scooty in Delhi..." required />
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="btn-primary w-full inline-flex items-center justify-center gap-2"
                >
                  {isLoading ? "Sending..." : <>Send Message <Send className="h-4 w-4" /></>}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="card-modern p-4 md:p-5 flex items-start gap-4"
                >
                  <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm md:text-base">{item.title}</h3>
                    <p className="text-muted-foreground text-sm md:text-base">{item.text}</p>
                    {item.subtext && <p className="text-muted-foreground text-xs md:text-sm">{item.subtext}</p>}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Hub Locations Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12"
          >
            <span className="inline-block px-4 py-2 rounded-full border border-border text-sm font-medium mb-4">
              Our Locations
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Visit Our <span className="text-gradient">Hub Centers</span>
            </h2>
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
                  <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <span className="inline-block px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
                      Hub 1 - Old Palam Road
                    </span>
                    <h3 className="text-base md:text-lg font-bold text-foreground mb-2">Sulahkul Vihar Hub</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Plot No. 9, Sulahkul Vihar, Old Palam Road, New Delhi - 110078
                    </p>
                    <p className="text-xs text-muted-foreground mb-3">
                      <strong>Landmark:</strong> Near Sulahkul Mandir
                    </p>
                    <a href="tel:+919625977769" className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
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
                  <div className="w-10 md:w-12 h-10 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <span className="inline-block px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
                      Hub 2 - Naraina
                    </span>
                    <h3 className="text-base md:text-lg font-bold text-foreground mb-2">Naraina Industrial Hub</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      C 138, Naraina Industrial Area, Phase I, New Delhi - 110028
                    </p>
                    <p className="text-xs text-muted-foreground mb-3">
                      <strong>Landmark:</strong> Near Naraina Metro Station
                    </p>
                    <a href="tel:+917011458075" className="inline-flex items-center gap-2 text-primary font-semibold text-sm">
                      <Phone className="h-4 w-4" />
                      +91 7011458075
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}