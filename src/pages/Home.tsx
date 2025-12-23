import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useMotionValue, useInView, AnimatePresence } from 'motion/react';
import { 
  ArrowDown, 
  Globe2,
  Palette, 
  Users, 
  Zap, 
  Shield, 
  Sparkles,
  CheckCircle,
  ArrowRight,
  Download,
  BookOpen,
  Cpu,
  Crown
} from 'lucide-react';
import CalvinImg from '../assets/CALVIN.jpg';
import KeYingImg from '../assets/KeYing.JPG';
import PeiXuanImg from '../assets/PeiXuan.JPG';
import BaoShengImg from '../assets/BaoSheng.jpeg';
import sleekCatImage from '../assets/Sleek Cat.png';
import tabletLoginVideo from '../assets/videos/Tablet login.mp4';
import reactTechImg from '../assets/tech/react.png';
import cloudflareImg from '../assets/tech/cloudflare.png';
import typescriptTechImg from '../assets/tech/typescript.jpg';
import nodejsTechImg from '../assets/tech/nodejs.png';
import cloudTechImg from '../assets/tech/aws-cloud.png';
import mlTechImg from '../assets/tech/machine-learning-logo.png';
import Squares from '../components/Squares';
import HackathonLoops from '../components/HackathonLoops';
import uiuxSvg from '../assets/videos/uiux.svg';
import marketingSvg from '../assets/videos/marketing.svg';
import supportSvg from '../assets/videos/support.svg';
import onboardingSvg from '../assets/videos/onboarding.svg';
import vibrantAbstractDesign from '../assets/Vibrant Abstract Design.png';

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

  const servicesData = [
    { 
      name: 'Web Solutions', 
      icon: Globe2, 
      desc: 'Modern websites and digital experiences', 
      color: 'bg-accent-dark',
      media: uiuxSvg,
      quote: "\"Our website looks outdated and doesn't convert visitors. We're losing potential customers to competitors with better online presence.\""
    },
    { 
      name: 'Branding', 
      icon: Palette, 
      desc: 'Visual identities that stick', 
      color: 'bg-brand-primary',
      media: marketingSvg,
      quote: "\"We don't have a consistent brand identity. Our marketing materials look unprofessional and don't reflect our company values.\""
    },
    { 
      name: 'IT Support', 
      icon: Cpu, 
      desc: 'Robust technical solutions', 
      color: 'bg-accent-light',
      media: supportSvg,
      quote: "\"Our IT systems keep breaking down, causing downtime and lost productivity. We need reliable technical support.\""
    },
    { 
      name: 'Training', 
      icon: BookOpen, 
      desc: 'Empowering through knowledge', 
      color: 'bg-brand-tertiary',
      media: onboardingSvg,
      quote: "\"Our team struggles with new technologies. We need training to stay competitive and improve our digital skills.\""
    },
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
        className="relative bg-brand-cream h-[calc(100dvh-4rem)] flex flex-col items-center justify-center overflow-hidden z-20"
      >
        {/* Animated Squares Background */}
        <div className="absolute inset-0 opacity-30 pointer-events-none z-30">
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
              <KineticText text="IEEEE" delay={0.2} />
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

      {/* Section 2: The digital divide */}
      <section className="bg-[#ECE0BF] relative -mt-40 pt-48 shadow-[inset_0_10px_10px_-10px_rgba(0,0,0,0.5)] z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold text-brand-primary mb-6 mt-10 text-center">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-12">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold text-brand-primary text-center">
              Digital Solutions That <span className="text-accent-dark">Works For You</span>
            </h2>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 3: Our Solution - Services Overview - Two Column Layout */}
      <section className="relative">
        {/* Fixed Background Image - Stays in place while services scroll */}
        <div className="fixed top-16 right-0 w-1/2 h-[calc(100dvh-4rem)] z-0 pointer-events-none hidden md:flex items-center justify-center">
          <div className="h-full w-full flex items-center justify-center p-4 lg:p-4">
            <img 
              src={vibrantAbstractDesign}
              alt="Vibrant Abstract Design"
              className='rounded-4xl max-h-full mx-auto'
            />
          </div>
        </div>

        {servicesData.map((service, idx) => (
          <div className='min-h-screen flex flex-col md:flex-row relative overflow-hidden'>
            {/* Left Column - Quote & Service Name */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-4 sm:px-6 lg:px-12 py-16 md:py-24 relative z-10">
              <ScrollReveal delay={0.2}>
                <div className="relative mb-8 md:mb-12">
                  <blockquote className="text-xl md:text-2xl lg:text-3xl text-brand-primary/90 italic leading-relaxed font-serif relative">
                    {service.quote}
                  </blockquote>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={0.3}>
                <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-brand-primary mb-8 md:mb-12 leading-20">
                  <span className="text-accent-dark">{service.name}</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate(`/services/${getServiceSlug(service.name)}`)}
                  className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 bg-accent-dark text-white rounded-full font-bold text-base md:text-lg hover:shadow-xl transition-all cursor-pointer"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </ScrollReveal>
            </div>

            {/* Right Column - Media (Larger Size) */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8 lg:p-12 relative">
              <ScrollReveal delay={0.3}>
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src={service.media} 
                    alt={service.name}
                    className="w-full h-full max-w-none object-contain scale-125 md:scale-150"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        ))}
      </section>

      {/* Section 4: Why Us? - Competitive Advantages - Bento Box */}
      <section className="py-24 bg-[#ECE0BF] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
          <ScrollReveal>
            <div className="text-center md:space-y-2">
              {[
                "Meowieeee helps your business run faster, safer, and smarter.",
                "With built-in AI and a design that puts people first,",
                "we make technology work for you, not the other way around."
              ].map((line, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.3, duration: 0.8, ease: "easeOut" }}
                  className="text-[1rem] md:text-xl lg:text-2xl xl:text-3xl text-brand-primary/90 leading-tight font-medium"
                >
                  {line}
                </motion.p>
              ))}
            </div>
          </ScrollReveal>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Row Layout - Each row has title and description together */}
          <div className="space-y-8 md:space-y-12">
            {[
              { title: 'Human-Centered', desc: 'UX philosophy that puts users first', icon: Users },
              { title: 'AI Integration', desc: 'Built-in AI assistants for instant optimization', icon: Sparkles },
              { title: 'Secure by Default', desc: 'Enterprise-grade security with automated compliance', icon: Shield },
              { title: 'Lightning Fast', desc: 'Optimized for speed with edge computing capabilities', icon: Zap },
            ].map((feature, idx) => {
              // Decreasing opacity: 100%, 85%, 70%, 55%
              const opacity = 100 - (idx * 15);
              return (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="relative">
                    <div className="grid grid-cols-3 md:items-center gap-4 md:gap-8 lg:gap-12">
                      {/* Left Side - Number & Title */}
                      <div className="flex flex-col items-startmd:gap-2">
                        <div className="text-sm md:text-lg lg:text-xl text-brand-primary/50 tabular-nums">
                          {String(idx + 1).padStart(2, '0')}
                        </div>
                        <h3 className="mt-[-12px] text-2xl md:text-3xl lg:text-4xl font-bold text-brand-primary">
                          {feature.title}
                        </h3>
                      </div>
                      {/* Right Side - Description */}
                      <div className="relative col-span-2">
                        <p 
                          className="text-lg md:text-xl lg:text-2xl text-brand-primary leading-relaxed"
                          style={{ opacity: `${opacity}%` }}
                        >
                          {feature.desc}
                        </p>
                        {/* Divider on the right side - more visible */}
                        {idx > 0 && (
                          <div className="absolute -top-4 md:-top-6 left-0 w-full md:w-1/2 h-px bg-brand-quaternary" />
                        )}
                      </div>
                    </div>
                  </div>
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
      <section id="investment" className="py-24 bg-[#ECE0BF] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-bold text-brand-primary mb-4 text-center">
              Join Us in Shaping the <span className="text-accent-dark">Future</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-white rounded-3xl p-8 pb-4 md:p-12 md:pb-8 border border-brand-quaternary/20 shadow-xl mb-8">
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
                  <span className="text-brand-primary/80"><strong className="text-brand-primary">Proven Team:</strong> 10 hackathon awards</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent-dark mr-3 mt-1 shrink-0" />
                  <span className="text-brand-primary/80"><strong className="text-brand-primary">Strong Traction:</strong> 50+ Agile projects delievered</span>
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
