import React from 'react';
import { Wind, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-2 mb-4">
                            <Wind className="h-6 w-6 text-deep-sky-blue" />
                            <span className="text-lg font-bold text-slate-gray">AETHERIA</span>
                        </div>
                        <p className="text-slate-500 text-sm max-w-xs">
                            Harvesting the limitless energy of the stratosphere to power a sustainable future.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="/mission" className="text-slate-500 hover:text-energetic-teal text-sm">Mission</a></li>
                            <li><a href="/vision" className="text-slate-500 hover:text-energetic-teal text-sm">Vision</a></li>
                            <li><a href="/team" className="text-slate-500 hover:text-energetic-teal text-sm">Team</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 tracking-wider uppercase mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-slate-400 hover:text-deep-sky-blue">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-deep-sky-blue">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-slate-400 hover:text-deep-sky-blue">
                                <Mail className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-slate-200 pt-8 flex justify-between items-center">
                    <p className="text-slate-400 text-xs">
                        &copy; {new Date().getFullYear()} Aetheria Systems. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
