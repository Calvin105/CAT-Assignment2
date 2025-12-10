import { Code, Cloud, Smartphone, Database, Cpu, Shield, Zap, LineChart, Wrench, Users } from 'lucide-react';
import { motion } from 'motion/react';

const Services = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        initial: {},
        whileInView: { transition: { staggerChildren: 0.1 } },
        viewport: { once: true }
    };

    const services = [
        {
            title: "Web Development",
            icon: <Code className="w-8 h-8" />,
            color: "indigo",
            shortDesc: "Custom web applications built with modern technologies.",
            features: [
                "React, Vue, Angular development",
                "Full-stack solutions (MERN, MEAN)",
                "Progressive Web Apps (PWA)",
                "E-commerce platforms",
                "CMS integration (WordPress, Strapi)"
            ],
            techStack: ["React", "Node.js", "TypeScript", "Next.js", "Tailwind CSS"],
            pricing: "Starting from $5,000"
        },
        {
            title: "Mobile App Development",
            icon: <Smartphone className="w-8 h-8" />,
            color: "purple",
            shortDesc: "Native and cross-platform mobile solutions.",
            features: [
                "iOS & Android native apps",
                "React Native development",
                "Flutter cross-platform",
                "App Store optimization",
                "Push notifications & analytics"
            ],
            techStack: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
            pricing: "Starting from $8,000"
        },
        {
            title: "Cloud Solutions",
            icon: <Cloud className="w-8 h-8" />,
            color: "cyan",
            shortDesc: "Scalable cloud infrastructure and migration services.",
            features: [
                "AWS, Azure, Google Cloud setup",
                "Cloud migration & optimization",
                "Serverless architecture",
                "Auto-scaling infrastructure",
                "DevOps & CI/CD pipelines"
            ],
            techStack: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform"],
            pricing: "Starting from $3,000/month"
        },
        {
            title: "AI & Machine Learning",
            icon: <Cpu className="w-8 h-8" />,
            color: "emerald",
            shortDesc: "Intelligent solutions powered by AI and ML.",
            features: [
                "Custom AI model development",
                "Natural Language Processing",
                "Computer Vision solutions",
                "Predictive analytics",
                "ChatGPT integration"
            ],
            techStack: ["Python", "TensorFlow", "PyTorch", "OpenAI", "Hugging Face"],
            pricing: "Starting from $10,000"
        },
        {
            title: "Cybersecurity",
            icon: <Shield className="w-8 h-8" />,
            color: "red",
            shortDesc: "Enterprise-grade security and compliance.",
            features: [
                "Security audits & penetration testing",
                "GDPR & compliance consulting",
                "Network security setup",
                "Encryption & data protection",
                "24/7 security monitoring"
            ],
            techStack: ["SSL/TLS", "OAuth", "JWT", "Firewall", "VPN"],
            pricing: "Starting from $4,000"
        },
        {
            title: "Database Architecture",
            icon: <Database className="w-8 h-8" />,
            color: "orange",
            shortDesc: "Optimized data storage and retrieval systems.",
            features: [
                "Database design & optimization",
                "SQL & NoSQL solutions",
                "Data migration services",
                "Real-time databases",
                "Backup & disaster recovery"
            ],
            techStack: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch"],
            pricing: "Starting from $2,500"
        }
    ];

    const colorClasses: { [key: string]: { bg: string, border: string, text: string, iconBg: string } } = {
        indigo: { bg: "bg-indigo-500/10", border: "border-indigo-500/30", text: "text-indigo-400", iconBg: "bg-indigo-500/20" },
        purple: { bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-400", iconBg: "bg-purple-500/20" },
        cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-400", iconBg: "bg-cyan-500/20" },
        emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-400", iconBg: "bg-emerald-500/20" },
        red: { bg: "bg-red-500/10", border: "border-red-500/30", text: "text-red-400", iconBg: "bg-red-500/20" },
        orange: { bg: "bg-orange-500/10", border: "border-orange-500/30", text: "text-orange-400", iconBg: "bg-orange-500/20" }
    };

    return (
        <div className="flex-grow pt-16">
            {/* Hero Section */}
            <div className="relative py-20 bg-slate-900 overflow-hidden">
                <div className="absolute inset-0">
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute top-10 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
                    />
                    <motion.div 
                        animate={{ rotate: -360 }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-10 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                    />
                </div>
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Our <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text">Services</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-xl text-slate-400">
                        Comprehensive technology solutions tailored to your business needs. From ideation to deployment and beyond.
                    </p>
                </motion.div>
            </div>

            {/* Services Grid */}
            <div className="py-20 bg-slate-800/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="whileInView"
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className={`bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:${colorClasses[service.color].border} transition-all group`}
                            >
                                {/* Icon */}
                                <motion.div 
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                    className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${colorClasses[service.color].iconBg} ${colorClasses[service.color].text}`}
                                >
                                    {service.icon}
                                </motion.div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-slate-400 mb-6">{service.shortDesc}</p>

                                {/* Features */}
                                <div className="space-y-2 mb-6">
                                    {service.features.map((feature, fIdx) => (
                                        <div key={fIdx} className="flex items-start gap-2 text-sm text-slate-300">
                                            <Zap className={`w-4 h-4 mt-0.5 flex-shrink-0 ${colorClasses[service.color].text}`} />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Tech Stack */}
                                <div className="mb-6">
                                    <p className="text-xs font-semibold text-slate-500 uppercase mb-2">Tech Stack</p>
                                    <div className="flex flex-wrap gap-2">
                                        {service.techStack.map((tech, tIdx) => (
                                            <span 
                                                key={tIdx} 
                                                className={`text-xs px-3 py-1 rounded-full ${colorClasses[service.color].bg} ${colorClasses[service.color].text} border ${colorClasses[service.color].border}`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Pricing */}
                                <div className="pt-4 border-t border-slate-800">
                                    <p className="text-sm text-slate-500 mb-1">Pricing</p>
                                    <p className={`text-lg font-bold ${colorClasses[service.color].text}`}>{service.pricing}</p>
                                </div>

                                {/* CTA Button */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`w-full mt-6 py-3 rounded-lg font-semibold transition-all ${colorClasses[service.color].bg} ${colorClasses[service.color].text} border ${colorClasses[service.color].border} hover:bg-opacity-20`}
                                >
                                    Get Started
                                </motion.button>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Process Section */}
            <div className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div 
                        {...fadeInUp}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">Our Development Process</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            A proven methodology that ensures quality, transparency, and timely delivery.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { icon: <Users className="w-6 h-6" />, title: "Discovery", desc: "Understanding your requirements and goals" },
                            { icon: <Wrench className="w-6 h-6" />, title: "Development", desc: "Agile development with regular updates" },
                            { icon: <LineChart className="w-6 h-6" />, title: "Testing", desc: "Rigorous QA and performance testing" },
                            { icon: <Zap className="w-6 h-6" />, title: "Launch", desc: "Deployment and post-launch support" }
                        ].map((step, idx) => (
                            <motion.div
                                key={idx}
                                {...fadeInUp}
                                transition={{ delay: idx * 0.15 }}
                                className="text-center"
                            >
                                <motion.div 
                                    whileHover={{ scale: 1.1, rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-16 h-16 mx-auto mb-4 bg-indigo-500/20 rounded-full flex items-center justify-center text-indigo-400"
                                >
                                    {step.icon}
                                </motion.div>
                                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-slate-400 text-sm">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-20 bg-slate-800/30">
                <motion.div 
                    {...fadeInUp}
                    className="max-w-4xl mx-auto px-4 text-center"
                >
                    <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
                    <p className="text-slate-400 mb-8 text-lg">
                        Let's discuss how we can help transform your ideas into reality.
                    </p>
                    <div className="flex justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-indigo-500/50 transition-all"
                        >
                            Schedule Consultation
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border border-slate-700 hover:border-indigo-500 text-slate-300 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all"
                        >
                            View Portfolio
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Services;

