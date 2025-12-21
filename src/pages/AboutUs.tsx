import { motion, useTransform, useMotionValue } from 'framer-motion';
import { MousePointer2, Code2, Palette, Globe2, Lightbulb, Users, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

const AboutUs = () => {
    // Scroll Progress for Parallax
    // const { scrollYProgress } = useScroll(); // Unused for now

    // const headersY = useTransform(scrollYProgress, [0, 1], [0, -100]); // Unused
    // const { scrollY } = useScroll(); // Unused

    return (
        <div className="bg-slate-950 text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden">
            <HeroSection />
            <VisionOrbitalSection />
            <ServicesBentoSection />
            <TeamSection />
            <UXPhilosophySection />
        </div>
    );
};

// --- Hero Section: Kinetic Typography ---
const HeroSection = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        mouseX.set(clientX / innerWidth);
        mouseY.set(clientY / innerHeight);
    };

    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative h-screen flex flex-col items-center justify-center overflow-hidden"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.1),transparent_50%)]" />

            {/* Floating Elements that react to mouse */}
            <FloatingShape mouseX={mouseX} mouseY={mouseY} speed={2} className="top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
            <FloatingShape mouseX={mouseX} mouseY={mouseY} speed={-2} className="bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6 inline-flex items-center px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium uppercase tracking-wider"
                >
                    <span className="w-2 h-2 rounded-full bg-indigo-400 mr-2 animate-pulse" />
                    Est. 2025
                </motion.div>

                <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-white to-slate-500 mb-8 leading-tight">
                    <KineticText text="MEOW" delay={0} />
                    <KineticText text="IEEE" delay={0.2} />
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-2xl md:text-4xl font-light text-slate-400 max-w-4xl mx-auto"
                >
                    Be <span className="text-indigo-400 font-medium">pawsitive</span>, it’s <span className="text-purple-400 font-medium">pawsible</span>.
                </motion.p>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
            >
                <MousePointer2 className="w-6 h-6" />
            </motion.div>
        </section>
    );
};

const KineticText = ({ text, delay }: { text: string, delay: number }) => {
    return (
        <span className="inline-block hover:scale-110 transition-transform duration-300 cursor-default">
            {text.split('').map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: delay + i * 0.05, type: "spring", stiffness: 100 }}
                    className="inline-block hover:text-indigo-400 transition-colors duration-200"
                    whileHover={{ y: -20, rotate: Math.random() * 10 - 5 }}
                >
                    {char}
                </motion.span>
            ))}
        </span>
    );
};

const FloatingShape = ({ mouseX, mouseY, speed, className }: any) => {
    const x = useTransform(mouseX, [0, 1], [-20 * speed, 20 * speed]);
    const y = useTransform(mouseY, [0, 1], [-20 * speed, 20 * speed]);
    return <motion.div style={{ x, y }} className={`absolute ${className}`} />;
};


// --- Vision Section: Orbital Map ---
const VisionOrbitalSection = () => {
    return (
        <section className="py-32 relative overflow-hidden bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
                <div className="md:w-1/2">
                    <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                        Bridging <span className="text-indigo-400">Digital</span> & <br />
                        <span className="text-purple-400">Human</span> Potential
                    </h2>
                    <p className="text-lg text-slate-400 leading-relaxed mb-6">
                        We don't just write code; we cultivate ecosystems. Like a complex orbital system, every solution we build revolves around a central core: <strong>The User</strong>.
                    </p>
                    <p className="text-lg text-slate-400 leading-relaxed">
                        Our vision is to democratize technology, making high-end digital tools accessible, intuitive, and unexpectedly delightful.
                    </p>
                </div>

                {/* Orbital Animation */}
                <div className="md:w-1/2 h-[500px] relative flex items-center justify-center">
                    {/* Center Core */}
                    <div className="absolute w-24 h-24 bg-linear-to-br from-indigo-500 to-purple-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
                    <div className="relative w-24 h-24 bg-slate-900 rounded-full border border-indigo-500/50 flex items-center justify-center z-10 shadow-[0_0_30px_rgba(99,102,241,0.3)]">
                        <Globe2 className="w-10 h-10 text-indigo-400" />
                    </div>

                    {/* Orbit 1 */}
                    <OrbitalRing size={200} duration={20} delay={0}>
                        <OrbitalItem icon={<Lightbulb size={20} />} color="bg-yellow-400" />
                    </OrbitalRing>

                    {/* Orbit 2 */}
                    <OrbitalRing size={350} duration={25} delay={-5} reverse>
                        <OrbitalItem icon={<Code2 size={20} />} color="bg-cyan-400" />
                        <OrbitalItem icon={<Palette size={20} />} color="bg-pink-400" angle={180} />
                    </OrbitalRing>

                    {/* Orbit 3 */}
                    <OrbitalRing size={450} duration={35} delay={-10}>
                        <OrbitalItem icon={<Users size={20} />} color="bg-emerald-400" angle={90} />
                    </OrbitalRing>
                </div>
            </div>
        </section>
    );
};

const OrbitalRing = ({ size, duration, delay, reverse, children }: any) => {
    return (
        <div
            className="absolute rounded-full border border-slate-700/30"
            style={{ width: size, height: size }}
        >
            <motion.div
                className="w-full h-full relative"
                animate={{ rotate: reverse ? -360 : 360 }}
                transition={{ repeat: Infinity, duration: duration, ease: "linear", delay: delay }}
            >
                {children}
            </motion.div>
        </div>
    );
};

const OrbitalItem = ({ icon, color, angle = 0 }: any) => {
    return (
        <div
            className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 ${color} rounded-full flex items-center justify-center text-slate-900 shadow-lg`}
            style={{ transform: `rotate(${angle}deg) translateY(-50%) rotate(-${angle}deg)` }} // Initial offset if needed, but simple top-0 centering works with parent rotation
        >
            <div className="animate-spin-reverse">{icon}</div>
            {/* Note: To keep icon upright, we'd need a counter-rotation, but spinning icons also look technically active. Let's keep it simple or add a counter-rotate wrapper if needed. */}
            {/* Actually, let's just let them rotate with the orbit for that 'satellite' feel, or maybe strict upright not needed. */}
        </div>
    );
};


// --- Services: Bento Box ---
const ServicesBentoSection = () => {
    const services = [
        {
            title: "Website & Digital Services",
            icon: <Globe2 />,
            desc: "Creating modern, mobile-friendly experiences.",
            details: ["Web Design & Development", "UI/UX Design", "Website Maintenance", "E-commerce Setup"],
            size: "col-span-1 md:col-span-2 row-span-2",
            gradient: "from-blue-500/20 to-cyan-500/20"
        },
        {
            title: "Branding & Presence",
            icon: <Palette />,
            desc: "Visual identities that stick.",
            details: ["Logo & Brand Identity", "Social Media Management", "Digital Marketing Consultation"],
            size: "col-span-1 md:col-span-1 row-span-2",
            gradient: "from-purple-500/20 to-pink-500/20"
        },
        {
            title: "Technical & Support",
            icon: <Code2 />,
            desc: "Robust IT solutions.",
            details: ["IT Helpdesk / Tech Support", "Computer Setup & Optimization", "Network Setup"],
            size: "col-span-1 md:col-span-1 row-span-2",
            gradient: "from-emerald-500/20 to-green-500/20"
        },
        {
            title: "Training & Education",
            icon: <Lightbulb />,
            desc: "Empowering teams through knowledge.",
            details: ["IT Workshops & Bootcamps", "Tech Literacy Programs"],
            size: "col-span-1 md:col-span-2 row-span-1",
            gradient: "from-orange-500/20 to-yellow-500/20"
        },
    ];

    return (
        <section className="py-32 px-6 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <h2 className="text-4xl font-bold mb-4">Our <span className="text-indigo-400">Expertise</span></h2>
                <div className="h-1 w-20 bg-indigo-500 rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
                {services.map((service, i) => (
                    <motion.div
                        key={i}
                        className={`${service.size} group relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all duration-500 p-8 flex flex-col`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ y: -5 }}
                    >
                        <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                        <div className="relative z-10 grow">
                            <div className="w-12 h-12 bg-slate-800 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-slate-400 mb-6 group-hover:text-slate-200 transition-colors">{service.desc}</p>

                            <ul className="space-y-2">
                                {service.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-start text-sm text-slate-500 group-hover:text-slate-300 transition-colors">
                                        <span className="mr-2 text-indigo-400">•</span>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="relative z-10 self-end mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                            <ArrowRight className="text-white" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};


// --- Team Section ---
const TeamSection = () => {
    const team = [
        { name: "Alex Chen", role: "Project Lead", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
        { name: "Sarah Jones", role: "Tech Lead", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
        { name: "Mike Ross", role: "UI/UX Designer", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" },
        { name: "Emily Watson", role: "Training Specialist", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" },
    ];

    return (
        <section className="py-32 px-6 bg-slate-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold mb-4">The <span className="text-purple-400">Architects</span></h2>
                    <p className="text-slate-400">Humans behind the code.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {team.map((member, i) => (
                        <div key={i} className="group relative">
                            <div className="relative overflow-hidden rounded-2xl aspect-3/4 mb-6">
                                {/* Grayscale to Color Image */}
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                            </div>

                            <div className="text-center">
                                <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">{member.name}</h3>
                                <p className="text-sm text-slate-500 uppercase tracking-widest mt-1">{member.role}</p>

                                <div className="flex justify-center space-x-4 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                                    <Github className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" />
                                    <Linkedin className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" />
                                    <Twitter className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- UX Philosophy ---
const UXPhilosophySection = () => {
    return (
        <section className="py-20 text-center bg-slate-950">
            <h2 className="text-2xl font-light text-slate-500 tracking-[0.2em] uppercase">
                "Invisible yet Intuitive"
            </h2>
        </section>
    )
}

export default AboutUs;
