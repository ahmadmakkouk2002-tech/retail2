import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HardHat,
  Wrench,
  AlertTriangle,
  Thermometer,
  Droplets,
  PaintRoller,
  Signpost,
  Square,
} from "lucide-react";
import { Link } from "react-router-dom";
import buildingMap from "@/assets/building-map.png";

interface Hotspot {
  id: string;
  icon: React.ElementType;
  label: string;
  description: string;
  href: string;
  x: string;
  y: string;
  color: "accent" | "blue";
}

const hotspots: Hotspot[] = [
  {
    id: "general-construction",
    icon: HardHat,
    label: "General Construction",
    description: "Comprehensive construction services.",
    href: "/services#construction",
    x: "50%",
    y: "82%",
    color: "accent",
  },
  {
    id: "signage",
    icon: Signpost,
    label: "Signage",
    description: "Custom signage design and installation.",
    href: "/services",
    x: "89%",
    y: "39%",
    color: "blue",
  },
  {
    id: "plumbing",
    icon: Droplets,
    label: "Plumbing",
    description: "Reliable plumbing services.",
    href: "/services",
    x: "28%",
    y: "80%",
    color: "accent",
  },
  {
    id: "hvac",
    icon: Thermometer,
    label: "HVAC",
    description: "Heating, ventilation, and air conditioning.",
    href: "/services",
    x: "28%",
    y: "30%",
    color: "blue",
  },
  {
    id: "glass-repair",
    icon: Square,
    label: "Glass Repair",
    description: "Window and glass repair services.",
    href: "/services",
    x: "70%",
    y: "75%",
    color: "accent",
  },
  {
    id: "painting-drywall",
    icon: PaintRoller,
    label: "Painting & Drywall",
    description: "Interior and exterior painting and drywall.",
    href: "/services",
    x: "75%",
    y: "40%",
    color: "blue",
  },
  {
    id: "parking-lot-repairs",
    icon: Wrench,
    label: "Parking Lot Repairs",
    description: "Asphalt and concrete repairs.",
    href: "/services",
    x: "15%",
    y: "95%",
    color: "accent",
  },
];

const HotspotMarker = ({
  spot,
  isActive,
  onHover,
  onLeave,
}: {
  spot: Hotspot;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}) => {
  const colorClasses =
    spot.color === "accent"
      ? "bg-accent text-accent-foreground"
      : "bg-gray-700 text-white";

  return (
    <div
      className="absolute z-10"
      style={{ left: spot.x, top: spot.y, transform: "translate(-50%, -50%)" }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <Link to={spot.href} className="block relative group">
        {/* Pulse ring */}
        <span
          className={`absolute inset-0 rounded-full ${
            spot.color === "accent" ? "bg-accent/30" : "bg-gray-500/30"
          } animate-ping`}
          style={{ width: 32, height: 32 }}
        />
        {/* Marker */}
        <div
          className={`relative w-8 h-8 rounded-full ${colorClasses} border-2 border-white shadow-lg flex items-center justify-center cursor-pointer hover:scale-125 transition-transform`}
        >
          <spot.icon className="w-4 h-4" />
        </div>

        {/* Tooltip */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-52 bg-primary text-gold rounded-lg shadow-xl p-3 border border-gold/20 pointer-events-none"
            >
              <p className="font-display font-semibold text-sm mb-1">{spot.label}</p>
              <p className="font-body text-xs text-gold-light/60">{spot.description}</p>
              <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] a-transparent border-r-transparent border-t-primary" />
            </motion.div>
          )}
        </AnimatePresence>
      </Link>
    </div>
  );
};

const ServicesSection = () => {
  const [activeSpot, setActiveSpot] = useState<string | null>(null);

  return (
    <section id="services" className="py-24 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-display text-foreground mb-4">
              Learn About Our Services
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-6 max-w-lg">
              Click the map to explore our construction and facility maintenance services. Our expert team can complete any job, big or small.
            </p>
            <Link
              to="/services"
              className="inline-block font-body font-bold text-foreground hover:text-accent transition-colors"
            >
              Click to learn more!
            </Link>

            {/* Legend */}
            <div className="mt-8 flex flex-col gap-3">
              <Link
                to="/services#construction"
                className="flex items-center gap-3 group"
                onMouseEnter={() => setActiveSpot("construction")}
                onMouseLeave={() => setActiveSpot(null)}
              >
                <span className="w-5 h-5 rounded-full bg-accent border-2 border-white shadow flex items-center justify-center">
                  <HardHat className="w-3 h-3 text-accent-foreground" />
                </span>
                <span className="font-body font-semibold text-sm text-foreground group-hover:text-accent transition-colors uppercase tracking-wider">
                  Construction Services
                </span>
              </Link>
              <Link
                to="/services#facility-maintenance"
                className="flex items-center gap-3 group"
                onMouseEnter={() => setActiveSpot("facility-maintenance")}
                onMouseLeave={() => setActiveSpot(null)}
              >
                <span className="w-5 h-5 rounded-full bg-gray-700 border-2 border-white shadow flex items-center justify-center">
                  <Wrench className="w-3 h-3 text-white" />
                </span>
                <span className="font-body font-semibold text-sm text-foreground group-hover:text-accent transition-colors uppercase tracking-wider">
                  Facility Maintenance
                </span>
              </Link>
              <Link
                to="/services#emergency"
                className="flex items-center gap-3 group"
                onMouseEnter={() => setActiveSpot("emergency")}
                onMouseLeave={() => setActiveSpot(null)}
              >
                <span className="w-5 h-5 rounded-full bg-accent border-2 border-white shadow flex items-center justify-center">
                  <AlertTriangle className="w-3 h-3 text-accent-foreground" />
                </span>
                <span className="font-body font-semibold text-sm text-foreground group-hover:text-accent transition-colors uppercase tracking-wider">
                  Emergency Services
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Right interactive map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src={buildingMap}
              alt="Interactive building service map"
              className="w-full h-auto block"
            />
            {/* Hotspots */}
            {hotspots.map((spot) => (
              <HotspotMarker
                key={spot.id}
                spot={spot}
                isActive={activeSpot === spot.id}
                onHover={() => setActiveSpot(spot.id)}
                onLeave={() => setActiveSpot(null)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
