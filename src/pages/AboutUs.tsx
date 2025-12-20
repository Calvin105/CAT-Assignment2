import { Target, Lightbulb, History, CheckCircle } from 'lucide-react';

const AboutUs = () => {
    return (
        <div className="flex-grow pt-16">
            {/* Hero Section */}
            <div className="relative py-20 bg-[#865832] overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-[#C5A978]/10 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] bg-[#73A6A2]/10 rounded-full blur-3xl"></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#EEE3C3] mb-6">
                        About <span className="text-[#D9C49D]">Meowieeee</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-xl text-[#EEE3C3]/80 leading-relaxed">
                        We are a technology consulting company dedicated to transforming businesses through innovation and intelligent solutions.
                    </p>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="py-20 bg-[#FFF]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Mission */}
                        {/* Mission */}
                        <div className="bg-[#EEE3C3]/30 p-8 rounded-2xl border border-[#D9C49D]/30 hover:border-[#865832]/50 transition-all duration-300">
                            <div className="w-16 h-16 bg-[#865832]/10 rounded-xl flex items-center justify-center mb-6 text-[#865832]">
                                <Target className="w-8 h-8" />
                            </div>
                            <h2 className="text-2xl font-bold text-[#865832] mb-4">Our Mission</h2>
                            <p className="text-[#865832]/80 leading-relaxed">
                                To empower organizations with cutting-edge paw-sibilities that drives growth, efficiency, and sustainable success in the digital age. We strive to be the bridge between complex problems and elegant, user-centric solutions.
                            </p>
                        </div>

                        {/* Vision */}
                        <div className="bg-[#EEE3C3]/30 p-8 rounded-2xl border border-[#D9C49D]/30 hover:border-[#A8754D]/50 transition-all duration-300">
                            <div className="w-16 h-16 bg-[#A8754D]/10 rounded-xl flex items-center justify-center mb-6 text-[#A8754D]">
                                <Lightbulb className="w-8 h-8" />
                            </div>
                            <h2 className="text-2xl font-bold text-[#865832] mb-4">Our Vision</h2>
                            <p className="text-[#865832]/80 leading-relaxed">
                                To envision a world where technology seamlessly enhances human potential, fostering a global ecosystem of innovation, collaboration, and simplified digital experiences for everyone.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* History Section */}
            <div className="py-20 bg-[#D9C49D]/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2">
                            <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#865832]/30 bg-[#865832]/10 text-[#865832] text-sm font-medium mb-6">
                                <History className="w-4 h-4 mr-2" />
                                Our Journey
                            </div>
                            <h2 className="text-3xl font-bold text-[#865832] mb-6">From a University Project to a Tech Leader</h2>
                            <div className="space-y-4 text-[#865832]/80 leading-relaxed">
                                <p>
                                    Founded in 2025 by a group of four visionary students, Meowieeee started as a humble assignment. We saw the gap between academic theory and real-world application and decided to bridge it.
                                </p>
                                <p>
                                    What began as "cat-assignment2" quickly evolved into a fully-fledged consulting firm. Our passion for clean code, intuitive design, and solving hard problems brought us together.
                                </p>
                                <p>
                                    Today, we continue to carry that spirit of learning and innovation in every project we undertake.
                                </p>
                            </div>
                        </div>
                        <div className="md:w-1/2 relative">
                            <div className="relative z-10 grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="bg-white p-6 rounded-2xl transform translate-y-8 shadow-sm">
                                        <h3 className="text-4xl font-bold text-[#865832] mb-2">4+</h3>
                                        <p className="text-sm text-[#865832]/70">Passionate Founders</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                                        <h3 className="text-4xl font-bold text-[#A8754D] mb-2">100%</h3>
                                        <p className="text-sm text-[#865832]/70">Client Satisfaction</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                                        <h3 className="text-4xl font-bold text-[#0E5851] mb-2">24/7</h3>
                                        <p className="text-sm text-[#865832]/70">Support & Monitoring</p>
                                    </div>
                                    <div className="bg-white p-6 rounded-2xl transform translate-y-8 shadow-sm">
                                        <h3 className="text-4xl font-bold text-[#73A6A2] mb-2">∞</h3>
                                        <p className="text-sm text-[#865832]/70">Possibilities</p>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative blob behind stats */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-[#865832]/10 to-[#C5A978]/10 blur-3xl rounded-full -z-10"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="py-20 bg-[#FFF]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-[#865832] mb-12">Why Choose Meowieeee?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            "Expertise in Modern Tech Stack",
                            "User-Centric Design Philosophy",
                            "Agile Development Methodology",
                            "Transparent Communication",
                            "Scalable & Secure Solutions",
                            "Post-Launch Support"
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center space-x-4 bg-[#EEE3C3]/30 p-6 rounded-xl border border-[#D9C49D]/30 hover:bg-[#EEE3C3]/50 transition-colors">
                                <CheckCircle className="flex-shrink-0 w-6 h-6 text-[#0E5851]" />
                                <span className="text-[#865832] font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
