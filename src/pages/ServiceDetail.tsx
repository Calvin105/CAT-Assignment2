import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle, Sparkles, Zap, Shield, Search, ArrowRight } from "lucide-react";

interface ServiceDetail {
  title: string;
  description: string;
}

interface ServiceData {
  name: string;
  tagline: string;
  details: ServiceDetail[];
  icon?: React.ReactNode;
}

const servicesContent: Record<string, ServiceData> = {
  "web-solutions": {
    name: "WEB SOLUTIONS",
    tagline: "We design and build modern websites",
    icon: <Sparkles className="w-12 h-12 text-teal-300" />,
    details: [
      {
        title: "Web Design & Development",
        description: "Creating modern, mobile-friendly websites that capture your brand's essence.",
      },
      {
        title: "UI/UX Design",
        description: "Improving user experience for apps and websites to ensure seamless navigation.",
      },
      {
        title: "Website Maintenance",
        description: "Monthly updates, bug fixes, content updates to keep your site secure and fresh.",
      },
      {
        title: "E-commerce Setup",
        description:
          "Helping businesses set up online stores (Shopee, Shopify, WooCommerce) for maximum sales.",
      },
    ],
  },
  branding: {
    name: "BRANDING",
    tagline: "We shape brands for the digital world",
    icon: <Zap className="w-12 h-12 text-teal-300" />,
    details: [
      {
        title: "Logo & Brand Identity Design",
        description: "Designing corporate identity kits that leave a lasting impression.",
      },
      {
        title: "Social Media Management",
        description: "Helping businesses post, design, and manage their pages to grow their audience.",
      },
      {
        title: "Digital Marketing Consultation",
        description: "SEO, keyword analysis, performance tracking to boost your online visibility.",
      },
    ],
  },
  "it-support": {
    name: "IT SUPPORT",
    tagline: "We keep your systems running smoothly",
    icon: <Shield className="w-12 h-12 text-teal-300" />,
    details: [
      {
        title: "IT Helpdesk / Tech Support",
        description:
          "Troubleshooting hardware, software, email, and network issues efficiently.",
      },
      {
        title: "Computer Setup & Optimization",
        description:
          "Device configuration, software installation, performance tuning for peak speed.",
      },
      {
        title: "Network Setup",
        description:
          "Basic office/home network setup (routers, Wi-Fi planning) for reliable connectivity.",
      },
    ],
  },
  training: {
    name: "TRAINING",
    tagline: "We make technology easy to learn",
    icon: <Search className="w-12 h-12 text-teal-300" />,
    details: [
      {
        title: "IT Workshops & Bootcamps",
        description:
          "Teaching coding, digital tools, AI basics, Python fundamentals, etc.",
      },
      {
        title: "Tech Literacy Programs",
        description: "For students, seniors, or beginners to bridge the digital divide.",
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
      <div className="grow pt-16 flex items-center justify-center bg-brand-cream">
        <div className="text-center">
          <h1 className="text-4xl font-black text-[#1a1a1a] mb-4">
            Service Not Found
          </h1>
          <button
            onClick={() => navigate("/services")}
            className="text-accent-dark hover:underline font-bold"
          >
            Return to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="grow pt-24 min-h-screen relative overflow-hidden bg-mesh-gradient"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/20 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate("/services")}
          className="cursor-pointer group mb-12 flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/40 hover:bg-white/60 backdrop-blur-sm transition-all border border-black/5"
        >
          <ArrowLeft className="w-5 h-5 text-black group-hover:-translate-x-1 transition-transform" />
          <span className="font-bold text-black tracking-wide text-sm uppercase">Back</span>
        </motion.button>

        {/* Service Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 relative"
        >
          <div className="absolute -left-4 -top-6 opacity-10 rotate-12">{service.icon}</div>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-[#1a1a1a] mb-4 tracking-tighter leading-none">
            {service.name}
          </h1>
          <div className="h-2 w-32 bg-accent-dark rounded-full mb-6" />
          <p className="text-2xl md:text-3xl text-[#1a1a1a]/80 font-serif italic max-w-3xl">
            {service.tagline}
          </p>
        </motion.div>

        {/* Service Details Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {service.details.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.5, ease: "easeOut" }}
              className="group p-8 rounded-3xl bg-accent-dark text-white hover:shadow-2xl hover:shadow-accent-dark/30 transition-all duration-300 hover:-translate-y-2 border border-accent-dark relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500" />

              <div className="relative z-10">
                <div className="mb-6 inline-flex p-3 rounded-2xl bg-white/10 text-teal-300 group-hover:bg-white/20 transition-colors">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-wide">{detail.title}</h3>
                <p className="text-white/80 leading-relaxed text-lg border-l-2 border-white/20 pl-4">
                  {detail.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action - Get Quotation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="relative"
        >
          <div className="bg-linear-to-br from-accent-dark to-[#1a7a72] rounded-3xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl -ml-24 -mb-24" />

            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 tracking-tight">
                Ready to Get Started?
              </h2>
              <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed">
                Get a personalized quotation for {service.name.toLowerCase()} and discover how we can transform your digital presence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    navigate("/");
                    setTimeout(() => {
                      document.getElementById("investment")?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                  className="cursor-pointer group flex items-center justify-center gap-3 px-8 py-4 bg-white text-accent-dark rounded-full font-bold text-lg transition-all shadow-lg"
                >
                  <span>Get Quotation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/services")}
                  className="cursor-pointer flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg border-2 border-white/40 text-white hover:bg-white hover:text-accent-dark transition-all backdrop-blur-sm"
                >
                  <span>Explore Other Services</span>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetail;
