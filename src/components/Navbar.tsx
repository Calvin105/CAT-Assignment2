import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/Meowieeee logo transparent bg.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about-us' },
        { name: 'Our Team', path: '/our-team' },
        { name: 'Services', path: '/services' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="fixed w-full z-50 bg-[#865832]/90 backdrop-blur-md border-b border-[#EEE3C3]/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <img src={logo} alt="Meowieeee" className="h-10 w-auto" />
                        <Link to="/" className="text-2xl font-bold text-[#EEE3C3]">
                            Meowieeee
                        </Link>
                    </div>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${isActive(link.path)
                                        ? 'text-[#EEE3C3] bg-[#0E5851]/40'
                                        : 'text-[#D9C49D] hover:text-[#EEE3C3] hover:bg-[#EEE3C3]/10'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button className="bg-[#0E5851] hover:bg-[#73A6A2] text-[#EEE3C3] px-4 py-2 rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-[#0E5851]/25 transform hover:scale-105">
                                Get Started
                            </button>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-300 hover:text-white p-2"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-[#865832] border-b border-[#EEE3C3]/20">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path)
                                    ? 'text-[#EEE3C3] bg-[#0E5851]/40'
                                    : 'text-[#D9C49D] hover:text-[#EEE3C3] hover:bg-[#EEE3C3]/10'
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

export default Navbar;
