import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Map, TrendingUp, Cpu } from 'lucide-react';

const Vision = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const roadmapItems = [
        {
            year: '2025',
            title: 'Pilot Deployment',
            description: 'Launch of our first 100kW commercial pilot system in the North Sea.',
            icon: <Cpu className="h-6 w-6 text-white" />,
        },
        {
            year: '2027',
            title: 'Grid Integration',
            description: 'Scaling up to 1MW systems and full integration with national power grids.',
            icon: <TrendingUp className="h-6 w-6 text-white" />,
        },
        {
            year: '2030',
            title: 'Global Expansion',
            description: 'Deploying gigawatt-scale airborne wind farms across 5 continents.',
            icon: <Map className="h-6 w-6 text-white" />,
        },
    ];

    return (
        <div className="bg-white">
            <section className="bg-slate-900 text-white min-h-screen flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-sky-200"
                    >
                        A World Powered by Wind
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-xl text-slate-300 max-w-3xl mx-auto"
                    >
                        Envisioning a future where clean energy is abundant, accessible, and invisible.
                    </motion.p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-gray">Technology Roadmap</h2>
                        <p className="text-slate-500 mt-4">Our path to revolutionizing the energy sector.</p>
                    </div>

                    <div className="relative">
                        {/* Vertical Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-200 hidden md:block"></div>

                        <div className="space-y-12">
                            {roadmapItems.map((item, index) => (
                                <motion.div
                                    key={item.year}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: index * 0.2 }}
                                    className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                        }`}
                                >
                                    <div className="flex-1 w-full md:w-1/2 p-6">
                                        <div className={`bg-white p-8 rounded-2xl shadow-lg border border-slate-100 ${index % 2 === 0 ? 'text-left' : 'md:text-right text-left'
                                            }`}>
                                            <span className="text-energetic-teal font-bold text-xl mb-2 block">{item.year}</span>
                                            <h3 className="text-2xl font-bold text-slate-gray mb-3">{item.title}</h3>
                                            <p className="text-slate-500">{item.description}</p>
                                        </div>
                                    </div>

                                    <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-deep-sky-blue border-4 border-white shadow-lg my-4 md:my-0">
                                        {item.icon}
                                    </div>

                                    <div className="flex-1 w-full md:w-1/2 p-6"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Vision;
