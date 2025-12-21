import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#865832] border-t border-[#EEE3C3]/20 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-2xl font-bold text-[#EEE3C3] mb-4 block">
                            Meowieeee
                        </span>
                        <p className="text-[#EEE3C3]/80 text-sm leading-relaxed">
                            Empowering businesses with pawsitive technology solutions. We turn complex problems into purrfect software.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-[#EEE3C3] font-bold mb-4">Services</h3>
                        <ul className="space-y-2 text-[#EEE3C3]/80 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Mobile Apps</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Cloud Solutions</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">AI Integration</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[#EEE3C3] font-bold mb-4">Company</h3>
                        <ul className="space-y-2 text-[#EEE3C3]/80 text-sm">
                            <li><a href="/about-us" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="/our-team" className="hover:text-white transition-colors">Our Team</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-[#EEE3C3] font-bold mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-[#EEE3C3]/60 hover:text-[#EEE3C3] transition-colors">
                                <Github className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-[#EEE3C3]/60 hover:text-[#EEE3C3] transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-[#EEE3C3]/60 hover:text-[#EEE3C3] transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-[#EEE3C3]/60 hover:text-[#EEE3C3] transition-colors">
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#EEE3C3]/20 pt-8 flex flex-col md:flex-row justify-between items-center opacity-80 text-sm">
                    <p className="text-[#EEE3C3]">© 2025 Meowieeee. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="text-[#EEE3C3]/60 hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="text-[#EEE3C3]/60 hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
