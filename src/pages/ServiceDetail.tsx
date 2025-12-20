import { useParams, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

interface ServiceDetail {
  title: string;
  description: string;
}

interface ServiceData {
  name: string;
  tagline: string;
  details: ServiceDetail[];
}

const servicesContent: Record<string, ServiceData> = {
  "web-solutions": {
    name: "WEB SOLUTIONS",
    tagline: "We design and build modern websites",
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
  branding: {
    name: "BRANDING",
    tagline: "We shape brands for the digital world",
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
  "it-support": {
    name: "IT SUPPORT",
    tagline: "We keep your systems running smoothly",
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
  training: {
    name: "TRAINING",
    tagline: "We make technology easy to learn",
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
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const service = serviceId ? servicesContent[serviceId] : null;

  if (!service) {
    return (
      <div className="flex-grow pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Service Not Found
          </h1>
          <button
            onClick={() => navigate("/services")}
            className="text-yellow-400 hover:text-yellow-300"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-grow pt-16 min-h-screen" style={{ backgroundColor: '#EEE3C3' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/services")}
          className="mb-8 flex items-center gap-2 text-black hover:text-gray-700 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-semibold">Back to Services</span>
        </motion.button>

        {/* Service Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-4">
            {service.name}
          </h1>
          <p className="text-2xl text-gray-800">{service.tagline}</p>
        </motion.div>

        {/* Service Details Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {service.details.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-white p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
              style={{ backgroundColor: '#0E5851' }}
            >
              <h3 className="text-2xl font-bold mb-3">{detail.title}</h3>
              <p className="text-gray-300 leading-relaxed">
                {detail.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
