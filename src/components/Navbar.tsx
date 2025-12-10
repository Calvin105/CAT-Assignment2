import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Code2,
  Home as HomeIcon,
  Users,
  Briefcase,
  Settings,
} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const mouseX = useMotionValue(Infinity);

  const navLinks = [
    { name: "Home", path: "/", icon: HomeIcon },
    { name: "About Us", path: "/about-us", icon: Users },
    { name: "Our Team", path: "/our-team", icon: Briefcase },
    { name: "Services", path: "/services", icon: Settings },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Code2 className="h-8 w-8 text-indigo-400" />
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text"
            >
              Nebula
            </Link>
          </div>

          <div className="hidden md:block">
            <motion.div
              className="ml-10 flex items-center space-x-4"
              onMouseMove={(e) => mouseX.set(e.pageX)}
              onMouseLeave={() => mouseX.set(Infinity)}
            >
              {navLinks.map((link) => (
                <DockNavItem
                  key={link.name}
                  link={link}
                  isActive={isActive(link.path)}
                  mouseX={mouseX}
                />
              ))}
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-indigo-500/25 transform hover:scale-105 ml-4">
                Get Started
              </button>
            </motion.div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? "text-indigo-400 bg-indigo-500/10"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

function DockNavItem({ link, isActive, mouseX }: any) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-80, 0, 80], [0, 1, 0]);
  const scaleX = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 250,
    damping: 20,
  });

  const ySync = useTransform(distance, [-80, 0, 80], [0, -8, 0]);
  const y = useSpring(ySync, {
    mass: 0.1,
    stiffness: 200,
    damping: 15,
  });

  return (
    <Link to={link.path} className="relative">
      <motion.div
        ref={ref}
        style={{ y }}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
          isActive
            ? "text-indigo-400 bg-indigo-500/10"
            : "text-slate-300 hover:text-indigo-400 hover:bg-white/5"
        }`}
      >
        {link.name}
        <motion.div
          style={{ scaleX }}
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-full h-0.5 bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 rounded-full origin-center"
        />
      </motion.div>
    </Link>
  );
}

export default Navbar;
