import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useMotionValue, useInView, AnimatePresence } from 'motion/react';
import { 
  ArrowDown, 
  Globe2, 
  Lightbulb, 
  Code2, 
  Palette, 
  Users, 
  Zap, 
  Shield, 
  Sparkles,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Download,
  Briefcase,
  BookOpen,
  Cpu,
  Crown
} from 'lucide-react';
import CalvinImg from '../assets/CALVIN.jpg';
import KeYingImg from '../assets/KeYing.JPG';
import PeiXuanImg from '../assets/PeiXuan.JPG';
import BaoShengImg from '../assets/BaoSheng.jpeg';
import webDesignImage from '../assets/cyber-security-expert-working-with-technology-neon-lights.jpg';
import brandingImage from '../assets/3d-rendering-futuristic-technologies.jpg';
import itSupportImage from '../assets/761.jpg';
import trainingImage from '../assets/futurism-perspective-digital-nomads-lifestyle.jpg';
import sleekCatImage from '../assets/Sleek Cat.png';
import tabletLoginVideo from '../assets/Tablet login.mp4';
import reactTechImg from '../assets/tech/react.png';
import cloudflareImg from '../assets/tech/cloudflare.png';
import typescriptTechImg from '../assets/tech/typescript.jpg';
import nodejsTechImg from '../assets/tech/nodejs.png';
import cloudTechImg from '../assets/tech/aws-cloud.png';
import mlTechImg from '../assets/tech/machine-learning-logo.png';
import Squares from '../components/Squares';
import HackathonLoops from '../components/HackathonLoops';

// Reusable scroll animation component
const ScrollReveal = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Animated counter component
const AnimatedCounter = ({ value, suffix = '', duration = 2 }: { value: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * value));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };
    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Home = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const getServiceSlug = (name: string) =>
    name
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-');

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth);
    mouseY.set(clientY / innerHeight);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
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
            className="inline-block hover:text-accent-dark transition-colors duration-200"
            whileHover={{ y: -10, rotate: Math.random() * 10 - 5 }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </span>
    );
  };

  // Orbital ring component
  const OrbitalRing = ({ size, duration, delay, reverse, children }: { size: number; duration: number; delay: number; reverse?: boolean; children: React.ReactNode }) => {
    return (
      <div className="absolute rounded-full border border-brand-primary/20" style={{ width: size, height: size }}>
        <motion.div
          className="w-full h-full relative"
          animate={{ rotate: reverse ? -360 : 360 }}
          transition={{ repeat: Infinity, duration, ease: 'linear', delay }}
        >
          {children}
        </motion.div>
      </div>
    );
  };

  const OrbitalItem = ({ icon, color, angle = 0 }: { icon: React.ReactNode; color: string; angle?: number }) => {
    return (
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 ${color} rounded-full flex items-center justify-center text-brand-primary shadow-lg`}
        style={{ transform: `rotate(${angle}deg) translateY(-50%) rotate(-${angle}deg)` }}
      >
        {icon}
      </div>
    );
  };

  const servicesData = [
    { name: 'Web Solutions', icon: Globe2, desc: 'Modern websites and digital experiences', color: 'bg-accent-dark' },
    { name: 'Branding', icon: Palette, desc: 'Visual identities that stick', color: 'bg-brand-primary' },
    { name: 'IT Support', icon: Cpu, desc: 'Robust technical solutions', color: 'bg-accent-light' },
    { name: 'Training', icon: BookOpen, desc: 'Empowering through knowledge', color: 'bg-brand-tertiary' },
  ];

  const teamMembers = [
    { name: 'Calvin Khoo', role: 'Project Lead', image: CalvinImg, icon: Crown },
    { name: 'Koay Ke Ying', role: 'Tech Lead', image: KeYingImg, icon: Cpu },
    { name: 'Lim Pei Xuan', role: 'UI/UX Designer', image: PeiXuanImg, icon: Palette },
    { name: 'Ch\'ng Bao Sheng', role: 'Training Specialist', image: BaoShengImg, icon: BookOpen },
  ];

  const techStack = [
    { name: 'React', image: reactTechImg },
    { name: 'TypeScript', image: typescriptTechImg },
    { name: 'Node.js', image: nodejsTechImg },
    { name: 'AI/ML', image: mlTechImg },
    { name: 'Cloud', image: cloudTechImg },
    { name: 'CloudFlare', image: cloudflareImg },
  ];

  return (
    <div className="grow pt-16 bg-brand-cream">
      {/* Section 1: Hero Section */}
      <section
        onMouseMove={handleMouseMove}
        className="relative h-[calc(100dvh-4rem)] flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Animated Squares Background */}
        <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
          <Squares
            speed={0.5}
            squareSize={30}
            direction="diagonal"
            borderColor="var(--color-brand-primary)"
            hoverFillColor="var(--color-accent-dark)"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="relative z-30 text-center px-4 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center px-4 py-2 rounded-full border border-brand-primary/30 bg-brand-quaternary text-accent-dark text-sm font-medium backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-accent-dark mr-2 animate-pulse" />
            Open For Business
          </motion.div>

          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-tight">
            <div className="text-brand-primary">
              <KineticText text="MEOW" delay={0} />
              <KineticText text="IEEE" delay={0.2} />
            </div>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-xl md:text-3xl text-brand-primary/80 max-w-4xl mx-auto mb-4 font-medium"
          >
            Democratizing technology, <span className="text-accent-dark font-bold">with the agility of a cat</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 1.5 }}
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
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-primary/60"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </section>

      {/* Sleek Cat Image - Intermediary Overlapping Both Sections */}
      <section className="relative -mt-40 mb-0 pointer-events-none" style={{ zIndex: 20 }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative"
            >
              <img
                src={sleekCatImage}
                alt="Sleek Cat"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2: Market Opportunity - Bento Box */}
      <section className="py-24 bg-brand-quaternary/10 relative -mt-40 pt-48 shadow-[inset_0_10px_10px_-10px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold text-brand-primary mb-6 text-center">
              The Digital Divide is <span className="text-accent-dark">Real</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="text-xl text-brand-primary/80 max-w-3xl mx-auto text-center mb-16">
              Businesses are losing out larger market without digital presence
            </p>
          </ScrollReveal>

          {/* 2-Column Statistics Grid - Side by side on all screens */}
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-5 gap-3 md:gap-4 lg:gap-6 mb-12 w-full">
              {/* Larger card */}
              <div className="flex flex-col gap-2 sm:grid sm:grid-cols-5 sm:gap-3 md:gap-4 lg:gap-6 col-span-3 bg-white p-4 md:p-8 lg:p-10 xl:p-12 rounded-2xl md:rounded-3xl relative z-10 h-full items-center justify-center min-h-[200px] md:min-h-[250px]">
                <div className="sm:col-span-3 text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black text-accent-dark leading-none flex items-center justify-center">
                  <AnimatedCounter value={65} suffix="%" duration={1} />
                </div>
                <p className="sm:col-span-2 text-brand-primary/70 text-center sm:text-left font-normal md:text-lg lg:text-2xl leading-relaxed flex items-center">
                  of SMEs lack digital presence
                </p>
              </div>

              {/* Smaller card */}
              <div className="col-span-2 bg-white p-4 md:p-6 lg:p-10 xl:p-12 rounded-2xl md:rounded-3xl relative z-10 flex flex-col h-full items-center justify-center text-center min-h-[200px] md:min-h-[250px]">
                <div className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-accent-dark mb-2 md:mb-3 leading-none">
                  <AnimatedCounter value={500} suffix="B+" duration={1} />
                </div>
                <p className="text-brand-primary/70 text-xs md:text-sm lg:text-base leading-relaxed px-1">
                  market opportunity
                </p>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-5 gap-3 md:gap-4 lg:gap-6 mb-12 w-full">
              {/* Smaller card */}
              <div className="col-span-2 bg-white p-4 md:p-6 lg:p-10 xl:p-12 rounded-2xl md:rounded-3xl relative z-10 flex flex-col h-full items-center justify-center text-center min-h-[200px] md:min-h-[250px]">
                <div className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-accent-dark mb-2 md:mb-3 leading-none">
                  <AnimatedCounter value={80} suffix="%" duration={1} />
                </div>
                <p className="text-brand-primary/70 text-xs md:text-sm lg:text-base leading-relaxed px-1">
                  of businesses need IT support
                </p>
              </div>

              {/* Larger card */}
              <div className="flex flex-col gap-2 sm:grid sm:grid-cols-5 sm:gap-3 md:gap-4 lg:gap-6 col-span-3 bg-white p-4 md:p-8 lg:p-10 xl:p-12 rounded-2xl md:rounded-3xl relative z-10 h-full items-center justify-center min-h-[200px] md:min-h-[250px]">
                <div className="sm:col-span-3 text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black text-accent-dark leading-none flex items-center justify-center">
                  <AnimatedCounter value={25} suffix="%" duration={1} />
                </div>
                <p className="sm:col-span-2 text-brand-primary/70 text-center sm:text-left font-normal md:text-lg lg:text-2xl leading-relaxed flex items-center">
                  annual growth in digital services
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      

      {/* Section 3: Our Solution - Services Overview - Bento Box */}
      <section className="py-24 bg-brand-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold text-brand-primary mb-4 text-center">
              Four Pillars of <span className="text-accent-dark">Growth</span>
            </h2>
            <p className="text-xl text-brand-primary/70 max-w-2xl mx-auto text-center mb-16">
              Our diversified revenue streams reduce risk and maximize growth potential
            </p>
          </ScrollReveal>

          {/* Bento Grid - Varied sizes for organic feel */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-fr">
            {servicesData.map((service, idx) => {
              // Create varied spans for bento effect
              const spans = [
                'md:col-span-2 lg:col-span-2', // Web Solutions - large
                'md:col-span-1 lg:col-span-1', // Branding - small
                'md:col-span-1 lg:col-span-1', // IT Support - small
                'md:col-span-2 lg:col-span-1', // Training - medium
              ];
              const isLarge = idx === 0 || idx === 3;
              
              return (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`${spans[idx]} group relative overflow-hidden rounded-3xl bg-white border border-brand-quaternary/20 hover:border-brand-primary/50 transition-all duration-500 ${isLarge ? 'p-8 md:p-10 lg:p-12' : 'p-6 md:p-8'} flex flex-col cursor-pointer`}
                    onClick={() => navigate(`/services/${getServiceSlug(service.name)}`)}
                  >
                    <div className={`absolute inset-0 ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    <div className="relative z-10 flex flex-col h-full">
                      <div className={`${isLarge ? 'w-20 h-20' : 'w-16 h-16'} ${service.color} rounded-2xl flex items-center justify-center text-white mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                        <service.icon className={`${isLarge ? 'w-10 h-10' : 'w-8 h-8'}`} />
                      </div>
                      <h3 className={`${isLarge ? 'text-3xl md:text-4xl' : 'text-2xl md:text-2xl'} font-bold text-brand-primary mb-3 md:mb-4`}>{service.name}</h3>
                      <p className={`text-brand-primary/70 ${isLarge ? 'text-base md:text-lg' : 'text-sm md:text-base'} mb-4 md:mb-6 group-hover:text-brand-primary transition-colors grow`}>{service.desc}</p>
                      <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 flex items-center text-accent-dark font-bold">
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Why Us? - Competitive Advantages - Bento Box */}
      <section className="py-24 bg-brand-quaternary/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold text-brand-primary mb-4 text-center">
              Why <span className="text-accent-dark">Meowieeee</span> Wins
            </h2>
            <p className="text-xl text-brand-primary/70 max-w-2xl mx-auto text-center mb-16">
              Trusted by businesses seeking innovative, reliable digital solutions
            </p>
          </ScrollReveal>

          {/* Bento Grid - Asymmetric layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-fr">
            {[
              { title: 'Lightning Fast', desc: 'Optimized for speed with edge computing capabilities', icon: Zap, color: 'text-brand-primary', span: 'md:col-span-1 lg:col-span-2', size: 'large' },
              { title: 'Secure by Default', desc: 'Enterprise-grade security with automated compliance', icon: Shield, color: 'text-brand-secondary', span: 'md:col-span-1', size: 'medium' },
              { title: 'AI Integration', desc: 'Built-in AI assistants for instant optimization', icon: Sparkles, color: 'text-accent-light', span: 'md:col-span-1', size: 'medium' },
              { title: 'Human-Centered', desc: 'UX philosophy that puts users first', icon: Users, color: 'text-brand-tertiary', span: 'md:col-span-2 lg:col-span-1', size: 'large' },
            ].map((feature, idx) => {
              const isLarge = feature.size === 'large';
              return (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    className={`${feature.span} p-6 md:p-8 lg:p-10 rounded-3xl bg-white border border-brand-quaternary/20 hover:border-brand-primary/50 transition-all group shadow-sm relative overflow-hidden`}
                  >
                    <div className={`absolute inset-0 ${isLarge ? 'bg-accent-dark' : 'bg-brand-primary'} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    <div className="relative z-10 flex flex-col h-full">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                        className={`${isLarge ? 'w-20 h-20' : 'w-16 h-16'} rounded-lg bg-brand-cream flex items-center justify-center mb-4 md:mb-6 group-hover:bg-brand-primary/20 transition-colors`}
                      >
                        <feature.icon className={`${isLarge ? 'w-10 h-10' : 'w-8 h-8'} ${feature.color}`} />
                      </motion.div>
                      <h3 className={`${isLarge ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'} font-bold text-brand-primary mb-3 md:mb-4`}>{feature.title}</h3>
                      <p className={`text-brand-primary/70 ${isLarge ? 'text-base md:text-lg' : 'text-sm md:text-base'} leading-relaxed`}>{feature.desc}</p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5: The Team */}
      <section className="py-24 bg-brand-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold text-brand-primary mb-4 text-center">
              The Architects Behind <span className="text-accent-dark">Meowieeee</span>
            </h2>
            <p className="text-xl text-brand-primary/70 max-w-2xl mx-auto text-center mb-4">
              10 hackathon awards • 50+ Agile methodology projects delivered
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
            {teamMembers.map((member, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group relative cursor-pointer"
                  onClick={() => navigate('/our-team')}
                >
                  <div className="relative overflow-hidden rounded-2xl aspect-3/4 mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-brand-primary via-transparent to-transparent opacity-60" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-brand-primary group-hover:text-accent-dark transition-colors mb-1">{member.name}</h3>
                    <p className="text-sm text-brand-primary/70 uppercase tracking-widest">{member.role}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-16">
            <ScrollReveal>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-primary/60 text-center mb-4">
                Awarded Hackathons & Competitions
              </p>
              <HackathonLoops />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section 6: Vision & Mission */}
      <section className="py-32 relative overflow-hidden bg-brand-quaternary/10">
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <ScrollReveal>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-brand-primary">
                Bridging <span className="text-accent-dark">Digital</span> & <br />
                <span className="text-accent-light">Human</span> Potential
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg text-brand-primary/80 leading-relaxed mb-6">
                We don't just write code; we cultivate ecosystems. Like a complex orbital system, every solution we build revolves around a central core: <strong className="text-accent-dark">The User</strong>.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-lg text-brand-primary/80 leading-relaxed">
                Our vision is to democratize technology, making high-end digital tools accessible, intuitive, and unexpectedly delightful.
              </p>
            </ScrollReveal>
          </div>

          <div className="md:w-1/2 h-[500px] relative flex items-center justify-center">
            <div className="absolute w-24 h-24 bg-linear-to-br from-accent-dark to-accent-light rounded-full blur-xl opacity-50 animate-pulse" />
            <div className="relative w-24 h-24 bg-brand-cream rounded-full border border-accent-dark/50 flex items-center justify-center z-10 shadow-[0_0_30px_rgba(14,88,81,0.3)]">
              <Users className="w-10 h-10 text-accent-dark" />
            </div>

            <OrbitalRing size={200} duration={20} delay={0}>
              <OrbitalItem icon={<Lightbulb size={20} />} color="bg-brand-tertiary" />
            </OrbitalRing>

            <OrbitalRing size={350} duration={25} delay={-5} reverse>
              <OrbitalItem icon={<Code2 size={20} />} color="bg-accent-light" />
              <OrbitalItem icon={<Palette size={20} />} color="bg-brand-primary" angle={180} />
            </OrbitalRing>

            <OrbitalRing size={450} duration={35} delay={-10}>
              <OrbitalItem icon={<BookOpen size={20} />} color="bg-accent-dark" angle={90} />
            </OrbitalRing>
          </div>
        </div>
      </section>

      {/* Section 7: Growth Metrics / Traction */}
      <section className="py-24 bg-brand-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold text-brand-primary mb-4 text-center">
              Our <span className="text-accent-dark">Growth Story</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {[
              { value: 50, suffix: '+', label: 'Clients Served', color: 'bg-accent-dark' },
              { value: 100, suffix: '+', label: 'Projects Completed', color: 'bg-brand-primary' },
              { value: 25, suffix: '+', label: 'Workshops Conducted', color: 'bg-accent-light' },
              { value: 95, suffix: '%', label: 'Customer Satisfaction', color: 'bg-brand-tertiary' },
            ].map((metric, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="text-center">
                  <div className={`w-20 h-20 ${metric.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-5xl font-black text-brand-primary mb-2">
                    <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                  </div>
                  <p className="text-brand-primary/70 font-medium">{metric.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Services Deep Dive */}
      <section className="py-24 bg-brand-quaternary/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold text-brand-primary mb-4 text-center">
              How We Generate <span className="text-accent-dark">Value</span>
            </h2>
            <p className="text-xl text-brand-primary/70 max-w-2xl mx-auto text-center mb-16">
              Custom packages starting from competitive rates
            </p>
          </ScrollReveal>

          <div className="space-y-4">
              {[
              { name: 'WEB SOLUTIONS', tagline: 'We design and build modern websites', image: webDesignImage, color: 'var(--color-accent-dark)' },
              { name: 'BRANDING', tagline: 'We shape brands for the digital world', image: brandingImage, color: 'var(--color-brand-primary)' },
              { name: 'IT SUPPORT', tagline: 'We keep your systems running smoothly', image: itSupportImage, color: 'var(--color-accent-light)' },
              { name: 'TRAINING', tagline: 'We make technology easy to learn', image: trainingImage, color: 'var(--color-brand-tertiary)' },
            ].map((service, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative cursor-pointer overflow-hidden rounded-xl border border-brand-quaternary/20 group bg-white"
                  onClick={() => navigate(`/services/${getServiceSlug(service.name)}`)}
                >
                  <div className="py-10 px-8 sm:px-12 relative z-10 flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-5xl font-black tracking-tight text-brand-primary mb-2">{service.name}</h3>
                      <p className="text-xl text-brand-primary/70 italic">"{service.tagline}"</p>
                    </div>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="hidden sm:block"
                    >
                      <ArrowRight className="w-8 h-8 text-brand-primary" />
                    </motion.div>
                  </div>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    style={{ backgroundColor: service.color }}
                  />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Technology Stack */}
      <section className="py-24 bg-brand-cream relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold text-brand-primary mb-4 text-center">
              Built on Modern <span className="text-accent-dark">Web Technologies</span>
            </h2>
            <p className="text-xl text-brand-primary/70 max-w-2xl mx-auto text-center mb-16">
              Scalable infrastructure powered by cutting-edge tools
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              {/* Technology demo video */}
              <div className="flex justify-center h-full">
                <div className="w-full max-w-md aspect-4/5 scale-120">
                  <video
                    src={tabletLoginVideo}
                    className="w-full h-full"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
              </div>

              {/* Tech stack cards */}
              <div className="grid grid-cols-2 gap-6">
                {techStack.map((tech) => (
                  <motion.div
                    key={tech.name}
                    className="p-6 rounded-2xl text-center group"
                  >
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="w-full h-16 md:h-28 object-contain filter sepia"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 10: Investment Opportunity */}
      <section id="investment" className="py-24 bg-brand-quaternary/10 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold text-brand-primary mb-4 text-center">
              Join Us in Shaping the <span className="text-accent-dark">Future</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-brand-quaternary/20 shadow-xl mb-8">
              <h3 className="text-2xl font-bold text-brand-primary mb-6">Investment Highlights</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent-dark mr-3 mt-1 shrink-0" />
                  <span className="text-brand-primary/80"><strong className="text-brand-primary">$500B+ Market:</strong> Massive digital services opportunity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent-dark mr-3 mt-1 shrink-0" />
                  <span className="text-brand-primary/80"><strong className="text-brand-primary">Diversified Revenue:</strong> Four scalable service pillars</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent-dark mr-3 mt-1 shrink-0" />
                  <span className="text-brand-primary/80"><strong className="text-brand-primary">Proven Team:</strong> 15+ years combined experience</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent-dark mr-3 mt-1 shrink-0" />
                  <span className="text-brand-primary/80"><strong className="text-brand-primary">Strong Traction:</strong> 50+ clients, 100+ projects</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <form onSubmit={handleFormSubmit} className="bg-white rounded-3xl p-8 md:p-12 border border-brand-quaternary/20 shadow-xl">
              <h3 className="text-2xl font-bold text-brand-primary mb-6">Schedule a Meeting</h3>
              <div className="space-y-4 mb-6">
                <input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-brand-cream/50 border border-brand-quaternary rounded-lg px-4 py-3 text-brand-primary focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-brand-cream/50 border border-brand-quaternary rounded-lg px-4 py-3 text-brand-primary focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all"
                  required
                />
                <input
                  type="text"
                  placeholder="Company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-brand-cream/50 border border-brand-quaternary rounded-lg px-4 py-3 text-brand-primary focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all"
                />
                <textarea
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full bg-brand-cream/50 border border-brand-quaternary rounded-lg px-4 py-3 text-brand-primary focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/20 transition-all resize-none"
                />
              </div>
              <AnimatePresence>
                {formSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-4 p-4 bg-accent-dark/10 border border-accent-dark/30 rounded-lg text-accent-dark text-center"
                  >
                    Thank you! We'll be in touch soon.
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-accent-dark text-brand-cream hover:bg-accent-light px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                >
                  Schedule Meeting
                </button>
                <button
                  type="button"
                  className="border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-brand-cream px-8 py-4 rounded-full font-bold text-lg transition-all"
                >
                  <Download className="w-5 h-5 inline mr-2" />
                  Download Deck
                </button>
              </div>
              <p className="text-sm text-brand-primary/60 mt-4 text-center">
                <Shield className="w-4 h-4 inline mr-1 mb-1" />
                Confidential
              </p>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
