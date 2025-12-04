import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Leaf, Eye } from 'lucide-react';
import HeroBackground from '../components/HeroBackground';

const Landing = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                <HeroBackground />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-5xl md:text-7xl font-bold text-slate-gray mb-6 tracking-tight"
                    >
                        Energy from the <br />
                        <span className="text-deep-sky-blue">Stratosphere</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-xl md:text-2xl text-slate-500 mb-10 max-w-3xl mx-auto"
                    >
                        Unlocking the limitless potential of high-altitude winds to power a cleaner, sustainable future.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <a
                            href="/mission"
                            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-energetic-teal hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Discover Our Mission
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-12"
                    >
                        <motion.div variants={itemVariants} className="text-center p-8 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors">
                            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-deep-sky-blue/10 text-deep-sky-blue mb-6">
                                <Zap className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-gray mb-4">Higher Consistency</h3>
                            <p className="text-slate-500">
                                High-altitude winds are stronger and more consistent than ground winds, ensuring reliable 24/7 energy generation.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="text-center p-8 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors">
                            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-energetic-teal/10 text-energetic-teal mb-6">
                                <Leaf className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-gray mb-4">Lower Material Cost</h3>
                            <p className="text-slate-500">
                                Our airborne systems use up to 90% less material than traditional wind turbines, significantly reducing carbon footprint.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="text-center p-8 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors">
                            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-slate-200 text-slate-600 mb-6">
                                <Eye className="h-8 w-8" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-gray mb-4">Minimal Visual Impact</h3>
                            <p className="text-slate-500">
                                Operating at high altitudes, our systems are barely visible from the ground, preserving natural landscapes.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Landing;
