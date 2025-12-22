import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useMotionValue, useTransform, useInView, animate } from "framer-motion";
import {
  ArrowDown,
  Globe2,
  Palette,
  BookOpen,
  Cpu,
  Crown
} from 'lucide-react';
import CalvinImg from '../assets/CALVIN.jpg';
import KeYingImg from '../assets/KeYing.JPG';
import PeiXuanImg from '../assets/PeiXuan.JPG';
import BaoShengImg from '../assets/BaoSheng.jpeg';
import Squares from '../components/Squares';

const Home = () => {
  const navigate = useNavigate();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth);
    mouseY.set(clientY / innerHeight);
  };
  // Kinetic text component
  const KineticText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    return (
      <span className="inline-block">
        {text.split('').map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay + i * 0.05, type: 'spring', stiffness: 100 }}
            className="inline-block hover:text-[#0E5851] transition-colors duration-200"
            whileHover={{ y: -10, rotate: Math.random() * 10 - 5 }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </span>
    );
  };

  const servicesData = [
    { name: 'Web Solutions', icon: Globe2, desc: 'Modern websites and digital experiences', color: 'bg-[#0E5851]' },
    { name: 'Branding', icon: Palette, desc: 'Visual identities that stick', color: 'bg-[#865832]' },
    { name: 'IT Support', icon: Cpu, desc: 'Robust technical solutions', color: 'bg-[#73A6A2]' },
    { name: 'Training', icon: BookOpen, desc: 'Empowering through knowledge', color: 'bg-[#C5A978]' },
  ];

  const teamMembers = [
    { name: 'Calvin Khoo', role: 'Project Lead', image: CalvinImg, icon: Crown },
    { name: 'Koay Ke Ying', role: 'Tech Lead', image: KeYingImg, icon: Cpu },
    { name: 'Lim Pei Xuan', role: 'UI/UX Designer', image: PeiXuanImg, icon: Palette },
    { name: 'Ch\'ng Bao Sheng', role: 'Training Specialist', image: BaoShengImg, icon: BookOpen },
  ];

  return (
    <div className="grow pt-16 bg-[#EEE3C3]">
      {/* Section 1: Hero Section */}
      <section
        onMouseMove={handleMouseMove}
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Animated Squares Background */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <Squares
            speed={0.5}
            squareSize={30}
            direction="diagonal"
            borderColor="#865832"
            hoverFillColor="#0E5851"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="relative z-30 text-center px-4 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center px-4 py-2 rounded-full border border-[#865832]/30 bg-brand-quaternary text-accent-dark text-sm font-medium backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-accent-dark mr-2 animate-pulse" />
            Open For Business
          </motion.div>

          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-tight">
            <div className="text-[#865832]">
              <KineticText text="MEOW" delay={0} />
              <KineticText text="IEEE" delay={0.2} />
            </div>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-3xl font-light text-[#865832]/80 max-w-4xl mx-auto mb-4"
          >
            Democratizing technology, <span className="text-[#0E5851] font-medium">one paw at a time</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="text-lg md:text-xl text-[#865832]/70 max-w-3xl mx-auto mb-10"
          >
            Serving the $500+ billion digital services market
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-4 relative z-40"
          >
            <button
              onClick={() => document.getElementById('investment')?.scrollIntoView({ behavior: 'smooth' })}
              className="relative z-40 cursor-pointer bg-accent-dark text-brand-cream hover:bg-accent-dark/80 px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl"
            >
              Explore Investment Opportunity
            </button>

            <button
              onClick={() => navigate('/services')}
              className="relative z-40 cursor-pointer border-2 border-brand-primary text-brand-primary hover:text-brand-cream px-8 py-4 rounded-full font-bold text-lg transition-all bg-brand-cream hover:bg-brand-primary backdrop-blur-sm"
            >
              View Our Services
            </button>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#865832]/60"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </section>

    </div>
  );
};

export default Home;
