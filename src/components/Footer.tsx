import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text mb-4 block">
                            Nebula
                        </span>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Empowering businesses with next-generation technology solutions. We turn complex problems into elegant software.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Services</h3>
                        <ul className="space-y-2 text-slate-400 text-sm">
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Web Development</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Mobile Apps</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Cloud Solutions</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">AI Integration</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Company</h3>
                        <ul className="space-y-2 text-slate-400 text-sm">
                            <li><a href="/about-us" className="hover:text-indigo-400 transition-colors">About Us</a></li>
                            <li><a href="/our-team" className="hover:text-indigo-400 transition-colors">Our Team</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-indigo-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors">
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center opacity-60 text-sm">
                    <p className="text-slate-400">© 2025 Nebula Inc. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
