import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import logo from "../assets/Meowieeee logo transparent bg.png";
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

  const activeService = servicesData.find((s) => s.name === hoveredService);

  const getServiceSlug = (serviceName: string) => {
    return serviceName.toLowerCase().replace(/\s+/g, "-");
  };

  const handleServiceClick = (serviceName: string) => {
    navigate(`/services/${getServiceSlug(serviceName)}`);
  };

  return (
    <div
      className="flex-grow pt-16 min-h-screen relative overflow-hidden"
      style={{ backgroundColor: "#EEE3C3" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div className="border-2 border-black rounded-full px-8 py-3 inline-block mt-8">
            <span className="font-bold text-black text-lg">SERVICES</span>
          </div>
          <div>
            <img
              src={logo}
              alt="Meowieeee Logo"
              className="w-32 h-32 object-contain"
            />
          </div>
        </div>

        {/* Services List */}
        <div className="relative">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.name}
              className="border-t-2 border-black relative cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredService(service.name)}
              onMouseLeave={() => setHoveredService(null)}
              onClick={() => handleServiceClick(service.name)}
              initial={false}
              animate={{
                backgroundColor:
                  hoveredService === service.name ? "#0E5851" : "#EEE3C3",
                height: hoveredService === service.name ? "300px" : "auto",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="py-8 relative z-10">
                <motion.h2
                  className="text-4xl md:text-6xl font-bold transition-colors duration-300"
                  animate={{
                    color:
                      hoveredService === service.name ? "#FFFFFF" : "#000000",
                    x: hoveredService === service.name ? 50 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {service.name}
                </motion.h2>
              </div>

              {/* Expanded Content */}
              <AnimatePresence>
                {hoveredService === service.name && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-12 pt-28"
                  >
                    {/* Image slides from bottom */}
                    {activeService?.image && (
                      <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                        className="flex-shrink-0"
                      >
                        <img
                          src={activeService.image}
                          alt={activeService.name}
                          className="w-72 h-52 object-cover rounded-lg shadow-2xl"
                        />
                      </motion.div>
                    )}

                    {/* Tagline slides from right */}
                    {activeService?.tagline && (
                      <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 100, opacity: 0 }}
                        transition={{ delay: 0.3, duration: 0.4 }}
                        className="flex-1 text-right max-w-md ml-auto"
                      >
                        <p className="text-2xl font-medium text-white leading-relaxed">
                          {activeService.tagline}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          <div className="border-t-2 border-black"></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
