import { motion, useTransform, useMotionValue } from 'framer-motion';
import { MousePointer2, Code2, Palette, Globe2, Lightbulb, Users, Zap, Target, Heart } from 'lucide-react';
import meowieeeeVideo from '../assets/Meowieeee.mp4';

const AboutUs = () => {
    return (
        <div className="bg-mesh-gradient text-[#865832] selection:bg-[#0E5851]/30 selection:text-[#0E5851] overflow-x-hidden font-sans">
            <HeroSection />
            <OurApproachSection />
            <AboutMeowieeeeSection />
            <VideoShowcaseSection />
            <VisionOrbitalSection />
            <MissionSection />
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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(134,88,50,0.05),transparent_50%)]" />

            {/* Floating Elements that react to mouse */}
            <FloatingShape mouseX={mouseX} mouseY={mouseY} speed={2} className="top-1/4 left-1/4 w-64 h-64 bg-[#C5A978]/20 rounded-full blur-3xl" />
            <FloatingShape mouseX={mouseX} mouseY={mouseY} speed={-2} className="bottom-1/4 right-1/4 w-96 h-96 bg-[#0E5851]/10 rounded-full blur-3xl" />

            <div className="relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6 inline-flex items-center px-3 py-1 rounded-full border border-[#865832]/30 bg-[#865832]/10 text-[#865832] text-xs font-medium uppercase tracking-wider"
                >
                    <span className="w-2 h-2 rounded-full bg-[#865832] mr-2 animate-pulse" />
                    Est. 2025
                </motion.div>

                <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-[#865832] to-[#A8754D] mb-8 leading-tight">
                    <KineticText text="MEOW" delay={0} />
                    <KineticText text="IEEEE" delay={0.2} />
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-2xl md:text-4xl font-light text-[#865832]/80 max-w-4xl mx-auto"
                >
                    Be <span className="text-[#0E5851] font-medium">pawsitive</span>, it’s <span className="text-[#A8754D] font-medium">pawsible</span>.
                </motion.p>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#865832]/50"
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
                    className="inline-block hover:text-[#0E5851] transition-colors duration-200"
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

// --- Our Approach Section ---
const OurApproachSection = () => {
    const approaches = [
        { title: "Fast", desc: "when responding" },
        { title: "Alert", desc: "to risks" },
        { title: "Flexible", desc: "in solutions" },
        { title: "Adaptable", desc: "to all environments" }
    ];

    return (
        <section className="py-24 px-6 max-w-4xl mx-auto relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[#865832]">Our <span className="text-[#0E5851]">Approach:</span></h2>
                <p className="text-xl text-[#865832] mb-8 font-medium">Just like a cat:</p>
                <div className="space-y-4">
                    {approaches.map((item, idx) => (
                        <div key={idx} className="flex items-center text-lg md:text-xl text-[#865832]/80">
                            <span className="w-2 h-2 rounded-full bg-[#0E5851] mr-4"></span>
                            <span className="font-bold text-[#865832] mr-2">{item.title}</span>
                            {item.desc}
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

// --- About Meowieeee Section ---
const AboutMeowieeeeSection = () => {
    return (
        <section className="py-24 px-6 max-w-4xl mx-auto text-center relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[#865832]">About <span className="text-[#0E5851]">Meowieeee</span></h2>
                <p className="text-lg md:text-xl text-[#865832]/80 leading-relaxed font-light">
                    Meowieeee is a creative studio driven by technology that integrates innovation, design, and a sense of fun into its operations. Similar to a curious cat, the company aims to facilitate business growth through modern digital solutions, ranging from impactful website construction to practical IT workshops and reliable tech support. They believe technology should be approachable, empowering, and accessible to all.
                </p>
            </motion.div>
        </section>
    );
};


// --- Vision Section: Orbital Map ---
const VisionOrbitalSection = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-[#D9C49D]/20">
            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
                <div className="md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-[#865832]">
                            Our <span className="text-[#0E5851]">Vision</span>
                        </h2>
                        <div className="text-lg text-[#865832]/80 leading-relaxed mb-6 space-y-6">
                            <p>
                                To become a trusted, community-centered IT partner that fosters creativity, enhances digital skills, and supports the thriving of individuals and businesses in a rapidly changing digital landscape, with <span className="text-[#A8754D] font-bold">positivity</span> and <span className="text-[#C5A978] font-bold">playfulness</span> as core values.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Orbital Animation (Kept as visual metaphor) */}
                <div className="md:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] relative flex items-center justify-center scale-75 sm:scale-90 md:scale-100 overflow-visible">
                    {/* Center Core */}
                    <div className="absolute w-16 h-16 md:w-24 md:h-24 bg-linear-to-br from-[#0E5851] to-[#73A6A2] rounded-full blur-xl opacity-50 animate-pulse"></div>
                    <div className="relative w-16 h-16 md:w-24 md:h-24 bg-[#EEE3C3] rounded-full border border-[#0E5851]/50 flex items-center justify-center z-10 shadow-[0_0_30px_rgba(14,88,81,0.3)]">
                        <Globe2 className="w-8 h-8 md:w-10 md:h-10 text-[#0E5851]" />
                    </div>

                    {/* Orbit 1 */}
                    <OrbitalRing size={140} mdSize={200} duration={20} delay={0}>
                        <OrbitalItem icon={<Lightbulb size={16} />} mdIcon={<Lightbulb size={20} />} color="bg-[#C5A978]" />
                    </OrbitalRing>

                    {/* Orbit 2 */}
                    <OrbitalRing size={240} mdSize={350} duration={25} delay={-5} reverse>
                        <OrbitalItem icon={<Code2 size={16} />} mdIcon={<Code2 size={20} />} color="bg-[#73A6A2]" />
                        <OrbitalItem icon={<Palette size={16} />} mdIcon={<Palette size={20} />} color="bg-[#A8754D]" angle={180} />
                    </OrbitalRing>

                    {/* Orbit 3 */}
                    <OrbitalRing size={320} mdSize={450} duration={35} delay={-10}>
                        <OrbitalItem icon={<Users size={16} />} mdIcon={<Users size={20} />} color="bg-[#0E5851]" angle={90} />
                    </OrbitalRing>
                </div>
            </div>
        </section>
    );
};

const OrbitalRing = ({ size, mdSize, duration, delay, reverse, children }: any) => {
    return (
        <div
            className="absolute rounded-full border border-[#865832]/20"
            style={{
                width: 'var(--ring-size)',
                height: 'var(--ring-size)',
                '--ring-size': `${size}px`
            } as any}
        >
            <style dangerouslySetInnerHTML={{
                __html: `
                @media (min-width: 768px) {
                    div[style*="--ring-size: ${size}px"] {
                        --ring-size: ${mdSize}px !important;
                    }
                }
            `}} />
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

const OrbitalItem = ({ icon, mdIcon, color, angle = 0 }: any) => {
    return (
        <div
            className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 ${color} rounded-full flex items-center justify-center text-[#EEE3C3] shadow-lg`}
            style={{ transform: `rotate(${angle}deg) translateY(-50%) rotate(-${angle}deg)` }}
        >
            <div className="md:hidden flex items-center justify-center animate-spin-reverse">{icon}</div>
            <div className="hidden md:flex items-center justify-center animate-spin-reverse">{mdIcon}</div>
        </div>
    );
};

// --- Mission Section ---
const MissionSection = () => {
    const missions = [
        { title: "Empower businesses", desc: "Provide user-friendly websites, modern branding, and an effective digital presence.", icon: <Zap className="w-6 h-6 text-[#C5A978]" /> },
        { title: "Create meaningful learning experiences", desc: "Offer practical IT workshops and tech literacy programs.", icon: <Lightbulb className="w-6 h-6 text-[#A8754D]" /> },
        { title: "Provide reliable support", desc: "Solve problems with friendly, customer-first tech support.", icon: <Heart className="w-6 h-6 text-[#865832]" /> },
        { title: "Promote creativity and innovation", desc: "Deliver simple, efficient, and enjoyable solutions.", icon: <Palette className="w-6 h-6 text-[#73A6A2]" /> },
        { title: "Make technology accessible", desc: "Break down complexity into easy, 'pawsible' steps for everyone.", icon: <Target className="w-6 h-6 text-[#0E5851]" /> }
    ];

    return (
        <section className="py-24 px-6 relative">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl font-bold mb-4 text-[#865832]">Our <span className="text-[#A8754D]">Mission</span></h2>
                    <div className="h-1 w-20 bg-[#A8754D] rounded-full mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {missions.map((mission, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/40 border border-[#865832]/10 p-8 rounded-2xl hover:bg-white/80 transition-all duration-300 hover:-translate-y-2 group shadow-sm hover:shadow-xl"
                        >
                            <div className="w-12 h-12 bg-[#EEE3C3] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md border border-[#865832]/20">
                                {mission.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#865832] mb-3 group-hover:text-[#0E5851] transition-colors">{mission.title}</h3>
                            <p className="text-[#865832]/70 leading-relaxed">{mission.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Video Showcase Section ---
const VideoShowcaseSection = () => {
    return (
        <section className="py-16 px-6 max-w-5xl mx-auto relative z-10 w-full flex justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border-4 border-[#865832]/20 bg-black/5"
            >
                <video
                    controls
                    className="w-full h-full object-cover"
                    poster="" // Optional: Add a poster image if available
                >
                    <source src={meowieeeeVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </motion.div>
        </section>
    );
};

export default AboutUs;
