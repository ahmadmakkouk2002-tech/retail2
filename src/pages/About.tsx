const hotspots = [
  {
    label: "HVAC",
    description: "Keep your climate control systems running at peak performance.",
    icon: Wind,
    href: "/services",
    color: "accent",
    x: "38%",
    y: "40%",
  },
  {
    label: "Plumbing",
    description: "Fast, effective solutions for all your plumbing needs.",
    icon: Droplets,
    href: "/services",
    color: "blue",
    x: "59%",
    y: "45%",
  },
  {
    label: "Electrical",
    description: "Safe and reliable electrical services for your facility.",
    icon: Zap,
    href: "/services",
    color: "blue",
    x: "40%",
    y: "68%",
  },
  {
    label: "General Contracting",
    description: "Comprehensive solutions for all your building needs.",
    icon: HardHat,
    href: "/services",
    color: "accent",
    x: "68%",
    y: "60%",
  },
];
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Award, Clock, Users, CheckCircle2, Hammer, Droplets, Wind, Paintbrush, Lock, Flame, Zap, Wrench, HardHat, RefreshCw } from "lucide-react";
import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const pillars = [
  {
    title: "Value & Reliability",
    icon: Shield,
    items: [
      "Competitive Pricing",
      "Proven Track Record",
      "Local Expertise",
      "Warranty and Guarantees",
      "Commitment to Sustainability",
    ],
  },
  {
    title: "Expertise & Quality",
    icon: Award,
    items: [
      "Licensed and Insured",
      "Quality Materials",
      "Master Craftsmanship",
      "Industry-Leading Standards",
    ],
  },
  {
    title: "Service & Communication",
    icon: Users,
    items: [
      "Client-Focused Approach",
      "Personalized Service",
      "On-Time Delivery",
      "Quick Response Time",
    ],
  },
];

const capabilities = [
  {
    title: "Carpentry",
    icon: Hammer,
    description:
      "Our carpenters possess exceptional skill and precision, transforming raw materials into beautiful and functional pieces — from intricate trim work to sturdy framing.",
  },
  {
    title: "Plumbing",
    icon: Droplets,
    description:
      "Our licensed plumbers handle everything from leaks to complex installations, ensuring reliable service and peace of mind.",
  },
  {
    title: "HVAC",
    icon: Wind,
    description:
      "Expert HVAC services for optimal comfort and energy efficiency. We provide efficient heating and cooling solutions year-round.",
  },
  {
    title: "Painting",
    icon: Paintbrush,
    description:
      "Professional painting services using premium paints and expert techniques for a smooth, even, and durable finish.",
  },
  {
    title: "Locksmithing",
    icon: Lock,
    description:
      "Comprehensive security solutions for homes and businesses, protecting what matters most.",
  },
  {
    title: "Fire Safety",
    icon: Flame,
    description:
      "Comprehensive fire safety solutions to protect your property and loved ones.",
  },
  {
    title: "Roofing",
    icon: HardHat,
    description:
      "Premium materials and expert craftsmanship for durable, weather-resistant roofs.",
  },
  {
    title: "Electrical",
    icon: Zap,
    description:
      "Certified electricians providing expert installations, repairs, and maintenance for your electrical systems.",
  },
  {
    title: "Construction",
    icon: Wrench,
    description:
      "Building excellence from the ground up, delivering quality construction projects of all types.",
  },
  {
    title: "Renovation",
    icon: RefreshCw,
    description:
      "We build with integrity, craftsmanship, and a commitment to exceeding expectations on every renovation.",
  },
];

const About = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary opacity-90" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-accent font-body font-semibold text-sm uppercase tracking-[0.25em] mb-4">
              Why Choose Us
            </span>
            <h1 className="text-4xl md:text-6xl font-display text-gold mb-6 leading-tight">
              Building Trust,<br />Not Just Structures.
            </h1>
            <p className="text-lg md:text-xl font-body text-gold-light/60 max-w-2xl">
              At Jibran Construction, we believe in building more than just structures — we build lasting relationships with our clients. Over 25 years of experience serving the San Diego community.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-gold to-accent" />
      </section>

      {/* Pillars */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
              What we can help you achieve
            </h2>
            <p className="text-lg font-body text-muted-foreground max-w-xl mx-auto">
              With our range of services and experience, there is little we can't make reality.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-primary rounded-3xl p-10 border border-gold/10 hover:border-gold/25 transition-colors"
              >
                <pillar.icon className="w-10 h-10 text-accent mb-6" />
                <h3 className="text-2xl font-display text-gold mb-6">{pillar.title}</h3>
                <ul className="space-y-3">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="font-body text-gold-light/70 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 bg-warm-gray">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
              Our Capabilities
            </h2>
            <p className="text-lg font-body text-muted-foreground max-w-xl mx-auto">
              A full range of construction and maintenance expertise under one roof.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="bg-background rounded-2xl p-6 border border-border hover:border-accent/30 hover:shadow-lg transition-all group"
              >
                <cap.icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-display text-foreground mb-2">{cap.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default About;
