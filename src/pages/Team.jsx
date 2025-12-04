import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';

const Team = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const teamMembers = [
        {
            name: 'Dr. Elena Rostova',
            role: 'CEO & Founder',
            bio: 'Former aerospace engineer at NASA with 15 years of experience in aerodynamics.',
            image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=723&auto=format&fit=crop',
        },
        {
            name: 'James Chen',
            role: 'Chief Technology Officer',
            bio: 'Expert in autonomous systems and control theory. PhD from MIT.',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
        },
        {
            name: 'Sarah Jenkins',
            role: 'Head of Sustainability',
            bio: 'Environmental scientist dedicated to minimizing industrial carbon footprints.',
            image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
        },
    ];

    return (
        <div className="bg-white">
            <section className="bg-slate-50 min-h-screen flex items-center justify-center relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 mb-8 tracking-tighter"
                    >
                        Meet the Minds
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-xl text-slate-500 max-w-2xl mx-auto"
                    >
                        A diverse team of engineers, scientists, and visionaries united by a single goal.
                    </motion.p>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-slate-100"
                            >
                                <div className="h-64 overflow-hidden">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-slate-gray mb-1">{member.name}</h3>
                                    <p className="text-energetic-teal font-medium mb-4">{member.role}</p>
                                    <p className="text-slate-500 mb-6">{member.bio}</p>
                                    <div className="flex space-x-4">
                                        <a href="#" className="text-slate-400 hover:text-deep-sky-blue">
                                            <Linkedin className="h-5 w-5" />
                                        </a>
                                        <a href="#" className="text-slate-400 hover:text-deep-sky-blue">
                                            <Mail className="h-5 w-5" />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-deep-sky-blue/10 py-20">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-slate-gray mb-6">Join Our Team</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        We are always looking for talented individuals to help us shape the future of energy.
                    </p>
                    <button className="px-8 py-3 bg-energetic-teal text-white rounded-full font-medium hover:bg-teal-700 transition-colors">
                        View Open Positions
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Team;
