import { useState } from "react";
import { motion } from "motion/react";

const Home = () => {
  const [email, setEmail] = useState("");

  const slideInLeft = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const slideInRight = {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" },
  };

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
            className="inline-flex items-center px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8 backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-indigo-400 mr-2 animate-pulse"></span>
            v2.0 is now live
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, rotateX: -90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-8"
            style={{ perspective: 1000 }}
          >
            <span className="block text-white mb-2">Build faster with</span>
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
              Intelligent Tools
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10"
          >
            Experience the next generation of development. Automated workflows,
            AI-powered insights, and seamless integration for modern teams.
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
              className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
            >
              Start Building
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-3 rounded-full font-bold text-lg transition-all bg-slate-800/50 backdrop-blur-sm"
            >
              View Demo
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full blur-[100px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -180, -360],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-40 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 90, 180, 270, 360],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-1/3 w-64 h-64 bg-cyan-500/20 rounded-full blur-[90px]"
          />
        </div>
      </div>

      {/* Features Grid */}
      <div id="features" className="py-24 bg-slate-800/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...scaleIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Nebula?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Everything you need to scale your application, built into one
              powerful platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Lightning Fast",
                desc: "Optimized for speed with edge computing capabilities that deliver content in milliseconds.",
                icon: (
                  <svg
                    className="w-6 h-6 text-indigo-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
                delay: 0,
              },
              {
                title: "Secure by Default",
                desc: "Enterprise-grade security with automated compliance checks and real-time threat monitoring.",
                icon: (
                  <svg
                    className="w-6 h-6 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                ),
                delay: 0.2,
              },
              {
                title: "AI Integration",
                desc: "Built-in AI assistants that help you write, debug, and optimize your code instantly.",
                icon: (
                  <svg
                    className="w-6 h-6 text-cyan-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                ),
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
                className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all group"
                style={{ perspective: 1000 }}
              >
                <motion.div
                  whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors"
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
          {...slideInLeft}
          className="max-w-3xl mx-auto px-4 text-center relative z-10"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-slate-400 mb-8">
            Join thousands of developers building the future. Sign up for early
            access.
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
                boxShadow: "0 0 25px rgba(99, 102, 241, 0.5)",
              }}
              whileTap={{ scale: 0.95, rotate: -5 }}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-lg transition-all"
            >
              Notify Me
            </motion.button>
          </motion.div>
        </motion.div>
        <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      </div>
    </div>
  );
};

export default Home;
