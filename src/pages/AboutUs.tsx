import { motion } from 'framer-motion';
import { Code2, Palette, Globe2, Lightbulb, Users, Zap, Target, Heart } from 'lucide-react';

const AboutUs = () => {
    return (
        <div className="bg-brand-cream text-brand-primary selection:bg-accent-dark/30 selection:text-accent-dark overflow-x-hidden font-sans">
            <OurApproachSection />
            <AboutMeowieeeeSection />
            <VisionOrbitalSection />
            <MissionSection />
        </div>
    );
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
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-brand-primary">Our <span className="text-accent-dark">Approach:</span></h2>
                <p className="text-xl text-brand-primary mb-8 font-medium">Just like a cat:</p>
                <div className="space-y-4">
                    {approaches.map((item, idx) => (
                        <div key={idx} className="flex items-center text-lg md:text-xl text-brand-primary/80">
                            <span className="w-2 h-2 rounded-full bg-accent-dark mr-4"></span>
                            <span className="font-bold text-brand-primary mr-2">{item.title}</span>
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
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-brand-primary">About <span className="text-accent-dark">Meowieeee</span></h2>
                <p className="text-lg md:text-xl text-brand-primary/80 leading-relaxed font-light">
                    Meowieeee is a creative studio driven by technology that integrates innovation, design, and a sense of fun into its operations. Similar to a curious cat, the company aims to facilitate business growth through modern digital solutions, ranging from impactful website construction to practical IT workshops and reliable tech support. They believe technology should be approachable, empowering, and accessible to all.
                </p>
            </motion.div>
        </section>
    );
};


// --- Vision Section: Orbital Map ---
const VisionOrbitalSection = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-brand-quaternary/20">
            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
                <div className="md:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-brand-primary">
                            Our <span className="text-accent-dark">Vision</span>
                        </h2>
                        <div className="text-lg text-brand-primary/80 leading-relaxed mb-6 space-y-6">
                            <p>
                                To become a trusted, community-centered IT partner that fosters creativity, enhances digital skills, and supports the thriving of individuals and businesses in a rapidly changing digital landscape, with <span className="text-brand-secondary font-bold">positivity</span> and <span className="text-brand-tertiary font-bold">playfulness</span> as core values.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Orbital Animation (Kept as visual metaphor) */}
                <div className="md:w-1/2 h-[300px] sm:h-[400px] md:h-[500px] relative flex items-center justify-center scale-75 sm:scale-90 md:scale-100 overflow-visible">
                    {/* Center Core */}
                    <div className="absolute w-24 h-24 bg-linear-to-br from-accent-dark to-accent-light rounded-full blur-xl opacity-50 animate-pulse"></div>
                    <div className="relative w-24 h-24 bg-brand-cream rounded-full border border-accent-dark/50 flex items-center justify-center z-10 shadow-[0_0_30px_rgba(14,88,81,0.3)]">
                        <Globe2 className="w-10 h-10 text-accent-dark" />
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
            className="absolute rounded-full border border-brand-primary/20"
            style={{ width: size, height: size }}
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
            className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 ${color} rounded-full flex items-center justify-center text-brand-cream shadow-lg`}
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
        { title: "Empower businesses", desc: "Provide user-friendly websites, modern branding, and an effective digital presence.", icon: <Zap className="w-6 h-6 text-brand-tertiary" /> },
        { title: "Create meaningful learning experiences", desc: "Offer practical IT workshops and tech literacy programs.", icon: <Lightbulb className="w-6 h-6 text-brand-secondary" /> },
        { title: "Provide reliable support", desc: "Solve problems with friendly, customer-first tech support.", icon: <Heart className="w-6 h-6 text-brand-primary" /> },
        { title: "Promote creativity and innovation", desc: "Deliver simple, efficient, and enjoyable solutions.", icon: <Palette className="w-6 h-6 text-accent-light" /> },
        { title: "Make technology accessible", desc: "Break down complexity into easy, 'pawsible' steps for everyone.", icon: <Target className="w-6 h-6 text-accent-dark" /> }
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
                    <h2 className="text-4xl font-bold mb-4 text-brand-primary">Our <span className="text-brand-secondary">Mission</span></h2>
                    <div className="h-1 w-20 bg-brand-secondary rounded-full mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {missions.map((mission, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/40 border border-brand-primary/10 p-8 rounded-2xl hover:bg-white/80 transition-all duration-300 hover:-translate-y-2 group shadow-sm hover:shadow-xl"
                        >
                            <div className="w-12 h-12 bg-brand-cream rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md border border-brand-primary/20">
                                {mission.icon}
                            </div>
                            <h3 className="text-xl font-bold text-brand-primary mb-3 group-hover:text-accent-dark transition-colors">{mission.title}</h3>
                            <p className="text-brand-primary/70 leading-relaxed">{mission.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
