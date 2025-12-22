import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/Meowieeee logo transparent bg.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about-us' },
        { name: 'Our Team', path: '/our-team' },
        { name: 'Services', path: '/services' },
    ];

    const isActive = (path: string) => location.pathname === path;

    const handleGetInTouch = () => {
        setIsOpen(false);
        
        if (location.pathname === '/') {
            // Already on home page, scroll to section with navbar offset
            const element = document.getElementById('investment');
            if (element) {
                const navbarHeight = 64; // h-16 = 64px
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        } else {
            // Navigate to home page first
            navigate('/');
            // Wait for navigation and DOM to be ready, then scroll
            setTimeout(() => {
                const element = document.getElementById('investment');
                if (element) {
                    const navbarHeight = 64; // h-16 = 64px
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - navbarHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }, 300);
        }
    };

    return (
        <nav className="fixed w-full z-50 bg-brand-primary backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="shrink-0 flex items-center">
                        <img src={logo} alt="Meowieeee" className="h-17 w-auto" />
                        <Link to="/" className="text-2xl font-bold text-brand-cream">
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
                                        ? 'text-brand-primary bg-brand-cream'
                                        : 'text-brand-quaternary hover:text-brand-cream hover:bg-brand-cream/10'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button
                                className="bg-brand-cream hover:bg-brand-tertiary text-brand-primary cursor-pointer px-4 py-2 rounded-full text-sm font-bold transition-colors duration-300 shadow-md hover:shadow-lg"
                                onClick={handleGetInTouch}
                            >
                                Get In Touch
                            </button>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-brand-cream hover:text-brand-tertiary p-2 rounded-lg hover:bg-brand-cream/10 transition-colors duration-300"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-brand-primary border-b border-brand-cream/20">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${isActive(link.path)
                                    ? 'text-brand-primary bg-brand-cream'
                                    : 'text-brand-quaternary hover:text-brand-cream hover:bg-brand-cream/10'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button 
                            className="w-full mt-3 bg-brand-cream hover:bg-brand-tertiary text-brand-primary px-4 py-2 rounded-full text-base font-bold transition-colors duration-300 shadow-md"
                            onClick={handleGetInTouch}
                        >
                            Get In Touch
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
