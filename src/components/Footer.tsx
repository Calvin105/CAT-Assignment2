import { Github, Twitter, Linkedin } from 'lucide-react';
import logo from '../assets/Meowieeee logo transparent bg.png';

const Footer = () => {
    return (
        <footer className="bg-brand-primary text-brand-cream pt-16 pb-4 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <img src={logo} alt="Meowieeee" className="h-20" />
              <p className="text-brand-cream/80 text-sm">
                Empowering businesses with pawsitive technology solutions.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-brand-cream/80">
                <li><a href="/about-us" className="hover:text-[#EEE3C3] transition-colors">About Us</a></li>
                <li><a href="/our-team" className="hover:text-brand-cream transition-colors">Our Team</a></li>
                <li><a href="/services" className="hover:text-brand-cream transition-colors">Services</a></li>
              </ul>
            </div>
            <div>
                <h3 className="text-brand-cream font-bold mb-4">Services</h3>
                <ul className="space-y-2 text-brand-cream/80 text-sm">
                    <li><a href="/services/web-solutions" className="hover:text-white transition-colors">Web Solutions</a></li>
                    <li><a href="/services/branding" className="hover:text-white transition-colors">Branding</a></li>
                    <li><a href="/services/it-support" className="hover:text-white transition-colors">IT Support</a></li>
                    <li><a href="/services/training" className="hover:text-white transition-colors">Training</a></li>
                </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-brand-cream/60 hover:text-brand-cream transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-brand-cream/60 hover:text-brand-cream transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-brand-cream/60 hover:text-brand-cream transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-brand-cream/20 pt-2 text-center text-sm text-brand-cream/60">
            <p>© 2025 Meowieeee. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
