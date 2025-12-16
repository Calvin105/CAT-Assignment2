import { useState } from "react";
import { motion } from "motion/react";
import { Zap, Shield, Sparkles, Cat, Heart, Footprints } from "lucide-react";

const Home = () => {
  const [email, setEmail] = useState("");

  // Paw print component
  const PawPrint = ({
    className = "",
    delay = 0,
  }: {
    className?: string;
    delay?: number;
  }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: -45 }}
      animate={{ opacity: 0.1, scale: 1, rotate: 0 }}
      transition={{ delay, duration: 0.8, repeat: Infinity, repeatDelay: 5 }}
      className={`absolute ${className}`}
    >
      <Footprints className="w-12 h-12 text-purple-400" />
    </motion.div>
  );

  return (
    <div className="flex-grow pt-16">
      {/* Hero Section */}
      <div className="relative pt-20 pb-20 sm:pt-32 sm:pb-24 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
              type: "spring",
              stiffness: 100,
            }}
            className="inline-flex items-center px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-300 text-sm font-medium mb-8 backdrop-blur-sm"
          >
            <Cat className="w-4 h-4 mr-2 animate-pulse" />
            🐱 Be pawsitive, it's pawsible! 🐾
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-8"
            style={{ perspective: 1000 }}
          >
            <span className="block text-white mb-2">🐾 Where Tech Meets</span>
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 text-transparent bg-clip-text">
              Purrfection 😸
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10"
          >
            🌟 Just like a curious cat exploring new paths, we pounce on
            opportunities to help your business thrive! From sleek websites to
            tech workshops that'll make you purr with satisfaction. 😻
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.8,
              duration: 0.5,
              type: "spring",
              stiffness: 150,
            }}
            className="flex justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-white px-8 py-3 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(251,146,60,0.4)] hover:shadow-[0_0_30px_rgba(251,146,60,0.6)] flex items-center gap-2"
            >
              🐾 Let's Pawty!
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="border border-amber-600/50 hover:border-amber-500 text-amber-200 hover:text-amber-100 px-8 py-3 rounded-full font-bold text-lg transition-all bg-slate-800/50 backdrop-blur-sm flex items-center gap-2"
            >
              <Cat className="w-5 h-5" /> Explore More
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Abstract Background Elements with Paw Prints */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-1/4 w-72 h-72 bg-orange-500/30 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -180, -360],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-40 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 90, 180, 270, 360],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-1/3 w-64 h-64 bg-yellow-500/20 rounded-full blur-[90px]"
          />

          {/* Floating Paw Prints */}
          <PawPrint className="top-32 left-[15%]" delay={0} />
          <PawPrint className="top-64 right-[20%]" delay={1} />
          <PawPrint className="bottom-40 left-[25%]" delay={2} />
          <PawPrint className="top-96 right-[35%]" delay={3} />
        </div>
      </div>

      {/* Our Approach - Cat Theme */}
      <div id="features" className="py-24 bg-slate-800/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              🐱 Our Approach: Just Like a Cat
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Fast, alert, flexible, and adaptable – we bring the best feline
              qualities to your business! No hairballs included. 😹
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "⚡ Lightning Fast",
                desc: "Like a cat pouncing on its prey, we respond with lightning reflexes! Quick turnarounds and speedy solutions are our specialty.",
                icon: <Zap className="w-6 h-6 text-orange-400" />,
                emoji: "🐆",
                delay: 0,
              },
              {
                title: "👀 Always Alert",
                desc: "With cat-like vigilance, we spot bugs before they become catastrophes. Nine lives of protection for your projects!",
                icon: <Shield className="w-6 h-6 text-amber-400" />,
                emoji: "🛡️",
                delay: 0.2,
              },
              {
                title: "🎨 Purr-fectly Flexible",
                desc: "Cats always land on their feet, and so do we! Adaptable solutions that fit any situation like a cat in a box.",
                icon: <Sparkles className="w-6 h-6 text-yellow-400" />,
                emoji: "🎪",
                delay: 0.4,
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{
                  opacity: 0,
                  x: idx === 0 ? -100 : idx === 2 ? 100 : 0,
                  y: idx === 1 ? 100 : 0,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: feature.delay,
                  duration: 0.8,
                  type: "spring",
                }}
                whileHover={{
                  y: -15,
                  scale: 1.05,
                  rotateY: 10,
                  transition: { duration: 0.3 },
                }}
                className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all group relative overflow-hidden"
                style={{ perspective: 1000 }}
              >
                {/* Paw print watermark */}
                <div className="absolute top-2 right-2 text-6xl opacity-5 group-hover:opacity-10 transition-opacity">
                  {feature.emoji}
                </div>
                <motion.div
                  whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500/20 to-amber-500/20 flex items-center justify-center mb-6 group-hover:bg-amber-500/30 transition-colors"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="py-24 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto px-4 text-center relative z-10"
        >
          <h2 className="text-3xl font-bold mb-6">
            🐾 Ready to Start Your Journey?
          </h2>
          <p className="text-slate-400 mb-8">
            Join our clowder of innovators! Let's make technology pawsible
            together! No cat-astrophes, only purr-fect solutions. 😸✨
          </p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <motion.input
              whileFocus={{ scale: 1.05, borderColor: "#6366f1" }}
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
            />
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 25px rgba(251, 146, 60, 0.5)",
              }}
              whileTap={{ scale: 0.95, rotate: -5 }}
              className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center gap-2 justify-center"
            >
              <Heart className="w-5 h-5" /> Let's Chat! 🐱
            </motion.button>
          </motion.div>
        </motion.div>
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      </div>
    </div>
  );
};

export default Home;
