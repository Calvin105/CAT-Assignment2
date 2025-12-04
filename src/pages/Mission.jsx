import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Recycle, Sun } from 'lucide-react';

const Mission = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white">
            {/* Header */}
            <section className="bg-slate-50 min-h-screen flex items-center justify-center relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 mb-8 tracking-tighter"
                    >
                        Our Mission
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-xl text-slate-500 max-w-3xl mx-auto"
                    >
                        To accelerate the world's transition to sustainable energy by unlocking the untapped power of the sky.
                    </motion.p>
                </div>
            </section>

            {/* Content Sections */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center space-x-4 mb-6">
                                <Globe className="h-10 w-10 text-deep-sky-blue" />
                                <h2 className="text-3xl font-bold text-slate-gray">The Climate Challenge</h2>
                            </div>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                The world needs consistent, renewable energy to combat climate change. Traditional wind and solar are intermittent. Aetheria addresses this gap by harvesting high-altitude winds that blow stronger and more consistently, providing a reliable baseload power source.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop"
                                alt="Wind energy farm"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2070&auto=format&fit=crop"
                                alt="Sustainable materials"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-1 md:order-2"
                        >
                            <div className="flex items-center space-x-4 mb-6">
                                <Recycle className="h-10 w-10 text-energetic-teal" />
                                <h2 className="text-3xl font-bold text-slate-gray">Zero-Carbon Commitment</h2>
                            </div>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                We are committed to a circular economy. Our airborne wind systems are designed with 100% recyclable materials. By using significantly less material than traditional turbines, we minimize our manufacturing carbon footprint from day one.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Mission;
