import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import {
  HardHat,
  Wrench,
  AlertTriangle,
  CheckCircle2,
  Phone,
  Droplets,
  Thermometer,
  PaintRoller,
  Signpost,
  Square,
  Bolt,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

import scissorLift from "@/assets/work/scissor-lift.jpg";
import signsTruck from "@/assets/work/signs-truck.jpg";
import hvac from "@/assets/work/hvac.jpg";
import hoodCleaning from "@/assets/work/hood-cleaning.jpg";
import snaking from "@/assets/work/snaking.jpg";
import hydroTruck from "@/assets/work/hydro-truck.png";
import electrical from "@/assets/work/electrical.jpg";
import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.jpg";
import image3 from "@/assets/image3.jpg";
import image4 from "@/assets/image4.jpg";
import image5 from "@/assets/image5.jpg";
import facility1 from "@/assets/facility1.jpg";
import facility2 from "@/assets/facility2.jpg";
import facility3 from "@/assets/facility3.jpg";
import facility4 from "@/assets/facility4.jpg";

interface Feature {
  text: string;
  image: string;
}

const mainServices = [
  {
    id: "construction",
    icon: HardHat,
    number: "01",
    title: "Construction Services",
    tagline: "Building with precision. Delivering on time.",
    description:
      "From ground-up builds to large-scale renovations, Jibran Construction brings over 25 years of expertise serving the San Diego community. We handle commercial, residential, and mixed-use projects with a focus on quality craftsmanship and clear communication at every phase.",
    features: [
      { text: "Custom home construction and additions", image: image1 },
      { text: "Tenant improvements and build-outs", image: image2 },
      { text: "Kitchen and bathroom renovations", image: image3 },
      { text: "Project management and general contracting", image: image4 },
      { text: "Permitting and code compliance coordination", image: image5 },
      { text: "Site preparation and demolition", image: image1 },
    ] as Feature[],
  },
  {
    id: "facility-maintenance",
    icon: Wrench,
    number: "02",
    title: "Facility Maintenance",
    tagline: "Proactive care. Fewer surprises.",
    description:
      "Our facility maintenance programs are designed to keep your buildings running smoothly year-round. We take a proactive approach — identifying issues before they become costly problems, and responding fast when the unexpected happens.",
    features: [
      { text: "Preventative maintenance programs", image: facility1 },
      { text: "HVAC, plumbing, and electrical repairs", image: facility2 },
      { text: "Interior and exterior upkeep", image: facility3 },
      { text: "Smart scheduling and walkthroughs", image: facility4 },
    ] as Feature[],
  },
  {
    id: "emergency",
    icon: AlertTriangle,
    number: "03",
    title: "Emergency Services",
    tagline: "When it can't wait, we don't.",
    description:
      "Midnight call? Flooded floor? Failed system? Jibran's emergency response team is available around the clock. We dispatch fast, act with urgency, and stay until it's solved — protecting your property, your people, and your bottom line.",
    features: [
      { text: "24/7 emergency dispatch", image: snaking },
      { text: "Flood, fire, and storm damage response", image: hydroTruck },
      { text: "Electrical and plumbing emergencies", image: electrical },
      { text: "Board-up and temporary securing", image: snaking },
      { text: "Insurance documentation support", image: hydroTruck },
      { text: "Rapid assessment and mitigation", image: electrical },
    ] as Feature[],
  },
];

const otherServices = [
  {
    icon: Droplets,
    title: "Plumbing & Hydro-Jetting",
    description:
      "Comprehensive drain cleaning, leak repair, and fixture installation.",
  },
  {
    icon: Thermometer,
    title: "HVAC Services",
    description:
      "Installation, repair, and maintenance for heating and cooling systems.",
  },
  {
    icon: Bolt,
    title: "Electrical Services",
    description:
      "Full-range electrical services including repairs, wiring, and panel upgrades.",
  },
  {
    icon: PaintRoller,
    title: "Painting & Drywall",
    description:
      "Professional interior/exterior painting and drywall installation/repair.",
  },
  {
    icon: Signpost,
    title: "Signage & Lighting",
    description: "Custom sign fabrication, installation, and lighting maintenance.",
  },
  {
    icon: Square,
    title: "Glass & Window Repair",
    description:
      "Fast and reliable repair and replacement for windows, doors, and storefronts.",
  },
  {
    icon: Wrench,
    title: "Parking Lot Repairs",
    description: "Asphalt patching, crack sealing, and striping for parking facilities.",
  },
];

const Services = () => {
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
              What We Do
            </span>
            <h1 className="text-4xl md:text-6xl font-display text-gold mb-6 leading-tight">
              Expert Services,
              <br />
              End to End.
            </h1>
            <p className="text-lg md:text-xl font-body text-gold-light/60 max-w-2xl">
              From construction to maintenance to emergencies — we handle it all
              with precision, urgency, and care. Proudly serving San Diego for
              over 25 years.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-gold to-accent" />
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-8">
            {mainServices.map((svc, i) => (
              <motion.div
                key={svc.id}
                id={svc.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="scroll-mt-24 bg-primary rounded-3xl border border-gold/10 overflow-hidden hover:border-gold/25 transition-colors"
              >
                <div className="grid lg:grid-cols-[1fr_1.2fr] gap-0">
                  <div className="p-10 lg:p-14 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-8">
                        <span className="text-5xl md:text-6xl font-display font-bold text-accent/20">
                          {svc.number}
                        </span>
                        <svc.icon className="w-10 h-10 text-accent" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-display text-gold mb-3">
                        {svc.title}
                      </h2>
                      <p className="text-lg font-display italic text-gold-light/50 mb-6">
                        {svc.tagline}
                      </p>
                      <p className="font-body text-gold-light/60 leading-relaxed text-base">
                        {svc.description}
                      </p>
                    </div>
                    <div className="mt-8 flex flex-col sm:flex-row gap-3">
                      <a
                        href="tel:7608056351"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-body font-semibold rounded-full hover:bg-gold-dark transition-colors text-sm"
                      >
                        <Phone className="w-4 h-4" />
                        (760) 805-6351
                      </a>
                      <a
                        href="/#contact"
                        className="px-6 py-3 border border-gold/30 text-gold font-body font-semibold rounded-full hover:bg-gold/10 transition-colors text-sm text-center"
                      >
                        Get a Quote
                      </a>
                    </div>
                  </div>

                  <div className="bg-secondary/50 border-t lg:border-t-0 lg:border-l border-gold/10 px-10 lg:px-14 py-10 lg:py-14">
                    <h3 className="text-sm font-body font-semibold text-accent uppercase tracking-[0.2em] mb-8">
                      What's Included
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {svc.features.map((feat, idx) => (
                        <motion.div
                          key={feat.text}
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: idx * 0.08,
                          }}
                          className="rounded-xl overflow-hidden border border-gold/10"
                        >
                          <div className="h-28 md:h-32 overflow-hidden">
                            <img
                              src={feat.image}
                              alt={feat.text}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex items-start gap-2.5 p-3 bg-primary/80">
                            <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            <span className="font-body text-gold-light/70 text-xs leading-relaxed">
                              {feat.text}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services Carousel */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display text-foreground mb-4">
              Our Other Services
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed text-lg">
              We offer a complete range of construction and maintenance
              services to handle any job, big or small.
            </p>
          </div>
          <Carousel
            plugins={[Autoplay({ delay: 2000 })]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {otherServices.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4 h-full">
                    <div className="bg-primary border border-gold/10 rounded-xl p-8 flex flex-col items-center text-center hover:border-gold/25 transition-all h-full">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6 flex-shrink-0">
                        <service.icon className="w-8 h-8 text-accent-foreground" />
                      </div>
                      <h3 className="font-display text-2xl text-gold mb-3">
                        {service.title}
                      </h3>
                      <p className="font-body text-gold-light/60 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Services;
