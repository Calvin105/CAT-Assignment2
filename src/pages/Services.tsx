import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import webDesignImage from "../assets/cyber-security-expert-working-with-technology-neon-lights.jpg";
import brandingImage from "../assets/3d-rendering-futuristic-technologies.jpg";
import itSupportImage from "../assets/761.jpg";
import trainingImage from "../assets/futurism-perspective-digital-nomads-lifestyle.jpg";

interface ServiceDetail {
  title: string;
  description: string;
}

interface ServiceCategory {
  name: string;
  details: ServiceDetail[];
  image?: string;
  tagline?: string;
}

const servicesData: ServiceCategory[] = [
  {
    name: "WEB SOLUTIONS",
    tagline: "We design and build modern websites",
    image: webDesignImage,
    details: [
      {
        title: "Web Design & Development",
        description: "Creating modern, mobile-friendly websites.",
      },
      {
        title: "UI/UX Design",
        description: "Improving user experience for apps and websites.",
      },
      {
        title: "Website Maintenance",
        description: "Monthly updates, bug fixes, content updates.",
      },
      {
        title: "E-commerce Setup",
        description:
          "Helping businesses set up online stores (Shopee, Shopify, WooCommerce).",
      },
    ],
  },
  {
    name: "BRANDING",
    tagline: "We shape brands for the digital world",
    image: brandingImage,
    details: [
      {
        title: "Logo & Brand Identity Design",
        description: "Designing corporate identity kits.",
      },
      {
        title: "Social Media Management",
        description: "Helping businesses post, design, and manage their pages.",
      },
      {
        title: "Digital Marketing Consultation",
        description: "SEO, keyword analysis, performance tracking.",
      },
    ],
  },
  {
    name: "IT SUPPORT",
    tagline: "We keep your systems running smoothly",
    image: itSupportImage,
    details: [
      {
        title: "IT Helpdesk / Tech Support",
        description:
          "Troubleshooting hardware, software, email, and network issues.",
      },
      {
        title: "Computer Setup & Optimization",
        description:
          "Device configuration, software installation, performance tuning.",
      },
      {
        title: "Network Setup",
        description:
          "Basic office/home network setup (routers, Wi-Fi planning).",
      },
    ],
  },
  {
    name: "TRAINING",
    tagline: "We make technology easy to learn",
    image: trainingImage,
    details: [
      {
        title: "IT Workshops & Bootcamps",
        description:
          "Teaching coding, digital tools, AI basics, Python fundamentals, etc.",
      },
      {
        title: "Tech Literacy Programs",
        description: "For students, seniors, or beginners.",
      },
    ],
  },
];

const Services = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const navigate = useNavigate();

  const getServiceSlug = (serviceName: string) => {
    return serviceName.toLowerCase().replace(/\s+/g, "-");
  };

  const handleServiceClick = (serviceName: string) => {
    navigate(`/services/${getServiceSlug(serviceName)}`);
  };

  return (
    <div
      className="grow pt-16 min-h-screen relative overflow-hidden"
      style={{ backgroundColor: "#EEE3C3" }}
    >
      {/* Header / Title */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center z-10 w-full px-4 pointer-events-none">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-[#865832] mb-2 drop-shadow-sm"
        >
          Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[#A8754D] font-medium text-lg"
        >
          Explore our comprehensive digital solutions
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32">

        {/* Services List */}
        <div className="relative flex flex-col gap-4">
          <motion.div layout className="flex flex-col gap-4">
            {servicesData.map((service) => (
              <motion.div
                layout
                key={service.name}
                className="relative cursor-pointer overflow-hidden rounded-xl border border-black/10 group bg-[#EEE3C3]/50"
                onMouseEnter={() => setHoveredService(service.name)}
                onMouseLeave={() => setHoveredService(null)}
                onClick={() => handleServiceClick(service.name)}
                animate={{
                  backgroundColor:
                    hoveredService === service.name ? "#0E5851" : "rgba(238, 227, 195, 0.5)",
                }}
                transition={{ duration: 0.3 }}
                style={{ willChange: "transform, height, background-color" }}
              >
                <motion.div
                  layout="position"
                  className="py-10 px-8 sm:px-12 relative z-10 w-full"
                >
                  <div className="flex items-center justify-between w-full relative z-20">
                    <motion.h2
                      layout="position"
                      className="text-4xl md:text-6xl font-black tracking-tight"
                      animate={{
                        color: hoveredService === service.name ? "#FFFFFF" : "#1a1a1a",
                      }}
                    >
                      {service.name}
                    </motion.h2>

                    <motion.div
                      layout="position"
                      animate={{
                        opacity: hoveredService === service.name ? 1 : 0,
                      }}
                      className="hidden sm:block"
                    >
                      <div className="flex items-center gap-2 text-white/90 text-sm font-bold uppercase tracking-widest border border-white/30 rounded-full px-4 py-2 hover:bg-white/10 transition-colors">
                        Explore <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence mode="popLayout">
                    {hoveredService === service.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-8 flex flex-col md:flex-row items-center gap-12">
                          {/* Tagline */}
                          {service.tagline && (
                            <div className="flex-1">
                              <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl font-medium text-white/90 leading-tight italic"
                              >
                                "{service.tagline}"
                              </motion.p>
                              <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="mt-6 flex flex-wrap gap-3"
                              >
                                {service.details.slice(0, 3).map((detail, idx) => (
                                  <span key={idx} className="inline-block px-3 py-1 bg-white/10 rounded-md text-white/80 text-sm">
                                    {detail.title}
                                  </span>
                                ))}
                              </motion.div>
                            </div>
                          )}

                          {/* Image Preview */}
                          {service.image && (
                            <motion.div
                              initial={{ scale: 0.9, opacity: 0, rotate: 5 }}
                              animate={{ scale: 1, opacity: 1, rotate: -2 }}
                              transition={{ delay: 0.1 }}
                              className="shrink-0 w-full md:w-80 h-48 relative overflow-hidden rounded-lg shadow-2xl border-4 border-white/10"
                            >
                              <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent z-10" />
                              <img
                                src={service.image}
                                alt={service.name}
                                loading="lazy"
                                className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 will-change-transform"
                              />
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Optimized Background Decoration */}
                {hoveredService === service.name && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-white/5 blur-3xl pointer-events-none"
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
