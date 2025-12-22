<<<<<<< Updated upstream
import { Code, Cloud, Smartphone, Database } from 'lucide-react';
=======
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
>>>>>>> Stashed changes

const Services = () => {
    return (
        <div className="flex-grow pt-16">
            <div className="relative py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Our <span className="text-indigo-400">Services</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-xl text-slate-400">
                        Comprehensive technology solutions tailored to your business needs.
                    </p>
                </div>
            </div>

            <div className="py-20 bg-slate-800/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { title: "Web Development", icon: <Code className="w-8 h-8 text-indigo-400" />, desc: "Custom web applications built with React and Node.js." },
                            { title: "Mobile Apps", icon: <Smartphone className="w-8 h-8 text-purple-400" />, desc: "Native and cross-platform mobile solutions." },
                            { title: "Cloud Solutions", icon: <Cloud className="w-8 h-8 text-cyan-400" />, desc: "Scalable infrastructure and cloud migration services." },
                            { title: "Database Architecture", icon: <Database className="w-8 h-8 text-emerald-400" />, desc: "Optimized data storage and retrieval systems." },
                        ].map((service, idx) => (
                            <div key={idx} className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/30 transition-all flex gap-6">
                                <div className="flex-shrink-0 bg-slate-800 w-16 h-16 rounded-xl flex items-center justify-center">
                                    {service.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                    <p className="text-slate-400">{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
