import { Target, Lightbulb, History, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

const AboutUs = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true },
  };

  return (
    <div className="flex-grow pt-16">
      {/* Hero Section */}
      <div className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-indigo-500/10 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] bg-purple-500/10 rounded-full blur-3xl"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text">
              Nebula
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-slate-400 leading-relaxed">
            We are a technology consulting company dedicated to transforming
            businesses through innovation and intelligent solutions.
          </p>
        </motion.div>
      </div>

      {/* Mission & Vision */}
      <div className="py-20 bg-slate-800/30">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6 text-indigo-400"
              >
                <Target className="w-8 h-8" />
              </motion.div>
              <h2 className="text-2xl font-bold text-white mb-4">
                Our Mission
              </h2>
              <p className="text-slate-400 leading-relaxed">
                To empower organizations with cutting-edge technology that
                drives growth, efficiency, and sustainable success in the
                digital age. We strive to be the bridge between complex problems
                and elegant, user-centric solutions.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-purple-400"
              >
                <Lightbulb className="w-8 h-8" />
              </motion.div>
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-slate-400 leading-relaxed">
                To envision a world where technology seamlessly enhances human
                potential, fostering a global ecosystem of innovation,
                collaboration, and simplified digital experiences for everyone.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* History Section */}
      <div className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div {...fadeInUp} className="md:w-1/2">
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-6">
                <History className="w-4 h-4 mr-2" />
                Our Journey
              </div>
              <h2 className="text-3xl font-bold text-white mb-6">
                From a University Project to a Tech Leader
              </h2>
              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  Founded in 2025 by a group of four visionary students, Nebula
                  started as a humble assignment. We saw the gap between
                  academic theory and real-world application and decided to
                  bridge it.
                </p>
                <p>
                  What began as "cat-assignment2" quickly evolved into a
                  fully-fledged consulting firm. Our passion for clean code,
                  intuitive design, and solving hard problems brought us
                  together.
                </p>
                <p>
                  Today, we continue to carry that spirit of learning and
                  innovation in every project we undertake.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 relative"
            >
              <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="bg-slate-800 p-6 rounded-2xl transform translate-y-8"
                  >
                    <h3 className="text-4xl font-bold text-indigo-400 mb-2">
                      4+
                    </h3>
                    <p className="text-sm text-slate-400">
                      Passionate Founders
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    className="bg-slate-800 p-6 rounded-2xl"
                  >
                    <h3 className="text-4xl font-bold text-purple-400 mb-2">
                      100%
                    </h3>
                    <p className="text-sm text-slate-400">
                      Client Satisfaction
                    </p>
                  </motion.div>
                </div>
                <div className="space-y-4">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    className="bg-slate-800 p-6 rounded-2xl"
                  >
                    <h3 className="text-4xl font-bold text-cyan-400 mb-2">
                      24/7
                    </h3>
                    <p className="text-sm text-slate-400">
                      Support & Monitoring
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="bg-slate-800 p-6 rounded-2xl transform translate-y-8"
                  >
                    <h3 className="text-4xl font-bold text-emerald-400 mb-2">
                      ∞
                    </h3>
                    <p className="text-sm text-slate-400">Possibilities</p>
                  </motion.div>
                </div>
              </div>
              {/* Decorative blob behind stats */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-3xl rounded-full -z-10"></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-slate-800/30">
        <motion.div
          {...fadeInUp}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-12">
            Why Choose Nebula?
          </h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              "Expertise in Modern Tech Stack",
              "User-Centric Design Philosophy",
              "Agile Development Methodology",
              "Transparent Communication",
              "Scalable & Secure Solutions",
              "Post-Launch Support",
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center space-x-4 bg-slate-900/50 p-6 rounded-xl border border-slate-700/30 hover:bg-slate-800/80 transition-colors"
              >
                <CheckCircle className="flex-shrink-0 w-6 h-6 text-green-400" />
                <span className="text-slate-200 font-medium">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
