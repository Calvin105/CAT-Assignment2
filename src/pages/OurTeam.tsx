import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, PawPrint, Cpu, Palette, BookOpen, Crown, X, Bomb } from 'lucide-react';
import CalvinImg from '../assets/CALVIN.jpg';
import KeYingImg from '../assets/KeYing.JPG';
import PeiXuanImg from '../assets/PeiXuan.JPG';
import BaoShengImg from '../assets/BaoSheng.jpg';
// Placeholder for missing CatLogo
const CatLogo = "https://placehold.co/400x400/EEE3C3/865832?text=Meowieeee";
// import CatLogo from '../assets/Meowieeee logo transparent bg.png';
// import CatRain from '../components/CatRain';


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
        name: "Calvin Khoo",
        role: "Project Lead & Creative Strategist",
        icon: Crown,
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
        icon: Cpu,
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
        icon: Palette,
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
        icon: BookOpen,
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

// Filler bubbles positions and data
const fillerBubbles = [
    // Top Left Zone
    { id: 'c1', top: '15%', left: '10%', size: 'w-20 h-20', img: CatLogo, color: 'bg-[#C5A978]', quote: "Pawsitive Vibes" },
    { id: 'c2', top: '25%', left: '20%', size: 'w-14 h-14', img: CatLogo, color: 'bg-[#865832]', quote: "Meow!" },
    { id: 'c3', top: '35%', left: '5%', size: 'w-24 h-24', img: CatLogo, color: 'bg-[#A8754D]', quote: "Hello!" },

    // Top Right Zone
    { id: 'c4', top: '15%', left: '80%', size: 'w-22 h-22', img: CatLogo, color: 'bg-[#0E5851]', quote: "Purr..." },
    { id: 'c5', top: '28%', left: '90%', size: 'w-16 h-16', img: CatLogo, color: 'bg-[#73A6A2]', quote: "Hugs?" },
    { id: 'c6', top: '35%', left: '75%', size: 'w-18 h-18', img: CatLogo, color: 'bg-[#EEE3C3] opacity-80', quote: "Nap?" },

    // Bottom Left Zone
    { id: 'c7', top: '75%', left: '10%', size: 'w-28 h-28', img: CatLogo, color: 'bg-[#C5A978]', quote: "Dream Big" },
    { id: 'c8', top: '60%', left: '5%', size: 'w-16 h-16', img: CatLogo, color: 'bg-[#865832]', quote: "Go go!" },
    { id: 'c9', top: '85%', left: '25%', size: 'w-20 h-20', img: CatLogo, color: 'bg-[#A8754D]', quote: "Chase it!" },

    // Bottom Right Zone
    { id: 'c10', top: '70%', left: '85%', size: 'w-24 h-24', img: CatLogo, color: 'bg-[#0E5851]', quote: "Cool Cat" },
    { id: 'c11', top: '85%', left: '75%', size: 'w-18 h-18', img: CatLogo, color: 'bg-[#73A6A2]', quote: "Smile!" },
    { id: 'c12', top: '55%', left: '92%', size: 'w-14 h-14', img: CatLogo, color: 'bg-[#EEE3C3] opacity-80', quote: "^.^" },

    // Gaps between team members (Inner Fillers)
    { id: 'c13', top: '35%', left: '42%', size: 'w-12 h-12', img: CatLogo, color: 'bg-[#C5A978]', quote: "Tiny meow" },
    { id: 'c14', top: '50%', left: '50%', size: 'w-20 h-20', img: CatLogo, color: 'bg-[#865832]', quote: "Center of attention" },
    { id: 'c15', top: '40%', left: '32%', size: 'w-10 h-10', img: CatLogo, color: 'bg-[#A8754D]', quote: "Hi" },
    { id: 'c16', top: '40%', left: '58%', size: 'w-10 h-10', img: CatLogo, color: 'bg-[#0E5851]', quote: "Yo" },
    { id: 'c17', top: '60%', left: '25%', size: 'w-12 h-12', img: CatLogo, color: 'bg-[#73A6A2]', quote: "Run" },
    { id: 'c18', top: '60%', left: '75%', size: 'w-12 h-12', img: CatLogo, color: 'bg-[#EEE3C3] opacity-80', quote: "Jump" },
];

// Fixed positions for team members to ensure they are well spaced
const teamPositions = [
    { top: '15%', left: '15%', size: 'w-48 h-48 md:w-56 md:h-56' }, // Calvin (Top Left)
    { top: '15%', left: '65%', size: 'w-40 h-40 md:w-48 md:h-48' }, // Ke Ying (Top Right)
    { top: '55%', left: '20%', size: 'w-44 h-44 md:w-52 md:h-52' }, // Pei Xuan (Bottom Left)
    { top: '55%', left: '65%', size: 'w-48 h-48 md:w-56 md:h-56' }, // Bao Sheng (Bottom Right)
];

const OurTeam = () => {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
    const [selectedQuote, setSelectedQuote] = useState<string | null>(null);
    const [isExploding, setIsExploding] = useState(false);

    const handleBoom = () => {
        setIsExploding(true);
        setTimeout(() => setIsExploding(false), 6000); // Stop rain after 6 seconds
    };

    return (
        <div className="min-h-screen bg-[#EEE3C3] relative overflow-hidden pt-16 font-sans">
            {/* {isExploding && <CatRain />} */}

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
            </div>

            {/* Bomb Button - Floating Fixed Position */}
            <button
                onClick={handleBoom}
                className="fixed bottom-8 right-8 z-40 group inline-flex items-center justify-center w-16 h-16 bg-red-500 text-white rounded-full font-bold shadow-2xl hover:bg-red-600 transition-all active:scale-95 animate-shake cursor-pointer"
                title="Don't click!"
            >
                <Bomb className="w-8 h-8" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
            </button>


            {/* Bubbles Container */}
            <div className="relative w-full h-[800px] md:h-screen mx-auto max-w-7xl">

                {/* Filler Cat Bubbles */}
                {fillerBubbles.map((bubble, idx) => (
                    <div
                        key={bubble.id}
                        onClick={() => setSelectedQuote(bubble.quote)}
                        className={`absolute rounded-full flex items-center justify-center overflow-hidden shadow-md animate-float cursor-pointer hover:scale-110 transition-transform duration-300 ${bubble.color} ${bubble.size}`}
                        style={{
                            top: bubble.top,
                            left: bubble.left,
                            animationDelay: `${idx * 1.5}s`,
                            animationDuration: `${4 + idx}s`
                        }}
                    >
                        <img src={bubble.img} alt="Cat" className="w-[70%] h-[70%] object-contain opacity-80" />
                    </div>
                ))}

                {/* Team Member Bubbles */}
                {members.map((member, index) => {
                    const pos = teamPositions[index];
                    // Randomize animation slightly for team members too
                    const delay = index * 0.7;
                    const duration = 5 + index;

                    return (
                        <div
                            key={member.id}
                            onClick={() => setSelectedMember(member)}
                            className={`absolute rounded-full border-4 border-white shadow-xl hover:scale-110 hover:shadow-2xl hover:border-[#865032] cursor-pointer transition-all duration-300 z-20 overflow-hidden ${pos.size} group bg-white animate-float`}
                            style={{
                                top: pos.top,
                                left: pos.left,
                                animationDelay: `${delay}s`,
                                animationDuration: `${duration}s`
                            }}
                        >
                            <img
                                src={member.image || CatLogo}
                                alt={member.name}
                                className="w-full h-full object-cover object-top"
                            />
                            {/* Hover Overlay Name */}
                            <div className="absolute inset-0 bg-[#865032]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold text-center px-2">{member.name}</span>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Modal - Team Member Details */}
            {selectedMember && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl relative overflow-hidden animate-slide-up">
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedMember(null)}
                            className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-10"
                        >
                            <X className="w-6 h-6 text-gray-600" />
                        </button>

                        <div className="flex flex-col md:flex-row">
                            {/* Left Side: Image */}
                            <div className="md:w-2/5 h-64 md:h-auto bg-[#C5A978] relative">
                                <img
                                    src={selectedMember.image || CatLogo}
                                    alt={selectedMember.name}
                                    className="w-full h-full object-cover object-top"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/60 to-transparent p-4">
                                    <div className="text-white font-bold flex items-center gap-2">
                                        <selectedMember.icon className="w-5 h-5" />
                                        <span>{selectedMember.role.split('&')[0].trim()}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Content */}
                            <div className="md:w-3/5 p-8">
                                <h2 className="text-2xl md:text-3xl font-extrabold text-[#865032] mb-2">{selectedMember.name}</h2>
                                <h3 className="text-[#0E5851] font-bold mb-4 flex items-center">
                                    <Briefcase className="w-4 h-4 mr-2" />
                                    {selectedMember.role}
                                </h3>

                                <div className="prose prose-sm text-[#A8754D] mb-6">
                                    <p className="leading-relaxed">{selectedMember.bio}</p>
                                </div>

                                <div className="bg-[#EEE3C3]/30 rounded-xl p-4 border border-[#EEE3C3]">
                                    <h4 className="text-[#865032] font-bold text-sm uppercase tracking-wider mb-3 flex items-center">
                                        <PawPrint className="w-4 h-4 mr-2" />
                                        Responsibilities
                                    </h4>
                                    <ul className="space-y-2">
                                        {selectedMember.responsibilities.map((resp, idx) => (
                                            <li key={idx} className="flex items-start text-sm text-[#5d4037]">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[#73A6A2] mr-2 mt-1.5 shrink-0"></span>
                                                {resp}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal - Quote Pop-up */}
            {selectedQuote && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white rounded-3xl max-w-sm w-full shadow-2xl relative overflow-hidden animate-slide-up p-8 text-center border-4 border-[#C5A978]">
                        <button
                            onClick={() => setSelectedQuote(null)}
                            className="absolute top-2 right-2 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="mb-6 flex justify-center">
                            <div className="w-20 h-20 bg-[#EEE3C3] rounded-full flex items-center justify-center">
                                <PawPrint className="w-10 h-10 text-[#865032]" />
                            </div>
                        </div>

                        <h3 className="text-2xl font-black text-[#865032] mb-4">
                            "{selectedQuote}"
                        </h3>

                        <p className="text-[#A8754D] font-medium text-sm">
                            - Wisdom from Meowieeee
                        </p>

                        <button
                            onClick={() => setSelectedQuote(null)}
                            className="mt-6 bg-[#0E5851] text-[#EEE3C3] px-6 py-2 rounded-full font-bold hover:bg-[#73A6A2] transition-colors"
                        >
                            Purr-fect!
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OurTeam;