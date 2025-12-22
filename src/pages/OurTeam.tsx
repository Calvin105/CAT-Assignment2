<<<<<<< Updated upstream
import { User, Briefcase, Award } from 'lucide-react';
=======
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, PawPrint, Cpu, Palette, BookOpen, Crown, X, Bomb } from 'lucide-react';
>>>>>>> Stashed changes
import CalvinImg from '../assets/CALVIN.jpg';
import KeYingImg from '../assets/KeYing.JPG';
import PeiXuanImg from '../assets/PeiXuan.JPG';

import BaoShengImg from '../assets/BaoSheng.jpg';

interface TeamMember {
    id: number;
    name: string;
    role: string;
    bio: string;
    achievements: string[];
    image: string | null;
}

const members: TeamMember[] = [
    {
        id: 1,
        name: "Calvin Khoo",
        role: "Lead Architect",
        bio: "Full-stack wizard with a passion for scalable systems and cloud infrastructure.",
        achievements: ["AWS Certified Solutions Architect", "Published Author"],
        image: CalvinImg
    },
    {
        id: 2,
        name: "Koay Ke Ying",
        role: "UI/UX Designer",
        bio: "Creative mind behind the beautiful interfaces, ensuring user experience is paramount.",
        achievements: ["Best Design Award 2024", "Ex-Google Designer"],
        image: KeYingImg
    },
    {
        id: 3,
        name: "Lim Pei Xuan",
        role: "Chef Cooking",
        bio: "Database guru and API optimization expert. Loves optimizing queries.",
        achievements: ["MongoDB Master", "Hackathon Winner"],
        image: PeiXuanImg
    },
    {
        id: 4,
        name: "Ch'ng Bao Sheng",
        role: "Frontend Developer",
        bio: "React enthusiast who loves bringing designs to life with smooth animations.",
        achievements: ["React Core Contributor", "Performance Expert"],
        image: BaoShengImg
    }
];

const OurTeam = () => {
    return (
<<<<<<< Updated upstream
        <div className="flex-grow pt-16">
            <div className="relative py-20 bg-slate-900 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        Meet Our <span className="text-indigo-400">Team</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-slate-400">
                        The brilliant minds behind Nebula. We are a small but mighty team of 4 dedicated to your success.
                    </p>
                </div>
=======
        <div className="min-h-screen bg-[#EEE3C3] relative overflow-hidden pt-16 font-sans">
            {isExploding && <CatRain />}

            {/* Header / Title */}
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2 text-center z-10 w-full px-4 pointer-events-none">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-extrabold text-[#865832] mb-2 drop-shadow-sm"
                >
                    Our Team
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-[#A8754D] font-medium text-lg"
                >
                    Click on a bubble to meet the team!
                </motion.p>
>>>>>>> Stashed changes
            </div>

            <div className="py-16 bg-slate-800/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {members.map((member) => (
                            <div key={member.id} className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 group hover:-translate-y-2">
                                <div className="h-64 bg-slate-800 relative group-hover:bg-slate-700 transition-colors flex items-center justify-center overflow-hidden">
                                    {member.image ? (
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <User className="w-24 h-24 text-slate-600" />
                                    )}
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                    <div className="flex items-center text-indigo-400 text-sm font-medium mb-4">
                                        <Briefcase className="w-4 h-4 mr-1.5" />
                                        {member.role}
                                    </div>
                                    <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                                        {member.bio}
                                    </p>

                                    <div className="space-y-2">
                                        <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Achievements</p>
                                        <ul className="space-y-1">
                                            {member.achievements.map((achievement, idx) => (
                                                <li key={idx} className="flex items-start text-xs text-slate-300">
                                                    <Award className="w-3 h-3 mr-1.5 text-yellow-500 flex-shrink-0 mt-0.5" />
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
