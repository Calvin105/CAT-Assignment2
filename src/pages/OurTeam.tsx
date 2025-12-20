import React from 'react';
import { User, Briefcase, PawPrint, Cpu, Palette, BookOpen, Crown } from 'lucide-react';
// Keep your existing image imports
import CalvinImg from '../assets/CALVIN.jpg';
import KeYingImg from '../assets/KeYing.JPG';
import PeiXuanImg from '../assets/PeiXuan.JPG';
import BaoShengImg from '../assets/BaoSheng.jpeg';
import { useState } from 'react';
import { Bomb } from 'lucide-react';
import CatRain from '../components/CatRain';

interface TeamMember {
    id: number;
    name: string;
    role: string;
    icon: React.ElementType;
    bio: string;
    responsibilities: string[];
    image: string | null;
}

const members: TeamMember[] = [
    {
        id: 1,
        name: "Calvin Khoo Zhen Chen",
        role: "Project Lead & Creative Strategist",
        icon: Crown, // Head Cat
        bio: "The “Head Cat” who oversees the entire project direction. They ensure that every idea aligns with Meowieeee’s vision and mission, guiding the creative direction to stay fresh, playful, and meaningful.",
        responsibilities: [
            "Project planning & coordination",
            "Creative direction & concept development",
            "Quality control",
            "Team communication and final approvals"
        ],
        image: CalvinImg
    },
    {
        id: 2,
        name: "Koay Ke Ying",
        role: "Technical Developer & IT Specialist",
        icon: Cpu, // Tech Savvy
        bio: "Our tech-savvy cat who builds, fixes, and optimizes everything behind the scenes. They lead the technical development of websites and digital tools, ensuring all systems run smoothly.",
        responsibilities: [
            "Web development (frontend/back-end)",
            "System setup, troubleshooting & tech support",
            "Tool development for workshops",
            "Ensuring digital assets are functional"
        ],
        image: KeYingImg
    },
    {
        id: 3,
        name: "Lim Pei Xuan",
        role: "UI/UX & Branding Designer",
        icon: Palette, // Creative
        bio: "The creative cat with sharp eyes and sharper instincts. They craft visuals that reflect Meowieeee’s playful yet professional identity, from user-friendly layouts to lasting brand designs.",
        responsibilities: [
            "UI/UX design for websites and apps",
            "Branding assets (logo, colour palette, CI)",
            "Social media visuals",
            "Enhancing user experience"
        ],
        image: PeiXuanImg
    },
    {
        id: 4,
        name: "Ch’ng Bao Sheng",
        role: "Training & Content Specialist",
        icon: BookOpen, // Teacher
        bio: "The “teacher cat” who transforms complex tech concepts into easy, bite-sized, pawsible lessons. They develop workshop materials and educational content to empower users.",
        responsibilities: [
            "Designing workshop modules & content",
            "Creating step-by-step guides",
            "Delivering training sessions",
            "Ensuring content is accessible to all"
        ],
        image: BaoShengImg
    }
];

const OurTeam = () => {
    const [isExploding, setIsExploding] = useState(false);

    const handleBoom = () => {
        setIsExploding(true);
        setTimeout(() => setIsExploding(false), 6000); // Stop rain after 6 seconds
    };

    return (
        <div className="flex-grow pt-16 bg-[#EEE3C3]">
            {isExploding && <CatRain />}
            {/* Header Section - Uses the Cream background and Dark Brown text */}
            <div className="relative py-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#865032] mb-6">
                        Meet Our Team <br />
                        <span className="text-[#0E5851]">The Cats Behind Meowieeee</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-lg md:text-xl text-[#A8754D] font-medium leading-relaxed mb-8">
                        At Meowieeee, our strength comes from a small but mighty team of four passionate individuals.
                        Each of us brings unique skills—just like a well-coordinated cat squad—to ensure every project
                        is delivered creatively, efficiently, and with a touch of fun. 🐾
                    </p>

                    <button
                        onClick={handleBoom}
                        className="group relative inline-flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-full font-bold shadow-lg hover:bg-red-600 transition-all active:scale-95 animate-shake cursor-pointer"
                    >
                        <Bomb className="w-5 h-5" />
                        <span>Don't click</span>
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                        </span>
                    </button>
                </div>
            </div>

            {/* Grid Section */}
            <div className="py-16 bg-[#fffdf5]"> {/* Slightly lighter cream for contrast */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {members.map((member) => (
                            <div
                                key={member.id}
                                className="bg-white rounded-3xl overflow-hidden border-2 border-[#D9C49D] hover:border-[#0E5851] hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 flex flex-col"
                            >
                                {/* Image Container */}
                                <div className="h-64 bg-[#C5A978] relative overflow-hidden">
                                    {member.image ? (
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-[#EEE3C3]">
                                            <User className="w-24 h-24 text-[#C5A978]" />
                                        </div>
                                    )}
                                    {/* Role Badge Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-[#0E5851]/90 backdrop-blur-sm p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="flex items-center justify-center text-[#EEE3C3] text-xs font-bold uppercase tracking-widest">
                                            <member.icon className="w-3 h-3 mr-2" />
                                            {member.role.split('&')[0]} {/* Shows first part of role on hover */}
                                        </div>
                                    </div>
                                </div>

                                {/* Content Container */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-[#865032] mb-1">{member.name}</h3>

                                    <div className="flex items-start text-[#0E5851] text-sm font-bold mb-4 min-h-[40px]">
                                        <Briefcase className="w-4 h-4 mr-1.5 flex-shrink-0 mt-0.5" />
                                        {member.role}
                                    </div>

                                    <p className="text-[#A8754D] text-sm mb-6 leading-relaxed flex-grow">
                                        {member.bio}
                                    </p>

                                    {/* Responsibilities List */}
                                    <div className="space-y-3 pt-4 border-t border-[#EEE3C3]">
                                        <p className="text-xs uppercase tracking-wider text-[#C5A978] font-bold flex items-center">
                                            <PawPrint className="w-3 h-3 mr-1" />
                                            Key Responsibilities
                                        </p>
                                        <ul className="space-y-2">
                                            {member.responsibilities.map((item, idx) => (
                                                <li key={idx} className="flex items-start text-xs text-[#865032] font-medium">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-[#73A6A2] mr-2 mt-1 flex-shrink-0"></span>
                                                    {item}
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