import { useState } from 'react';

const Home = () => {
    const [email, setEmail] = useState('');

    return (
        <div className="grow pt-16">
            {/* Hero Section */}
            <div className="relative pt-20 pb-20 sm:pt-32 sm:pb-24 overflow-hidden">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#865832]/30 bg-[#865832]/10 text-[#865832] text-sm font-medium mb-8 backdrop-blur-sm animate-fade-in-up">
                        <span className="flex h-2 w-2 rounded-full bg-[#865832] mr-2 animate-pulse"></span>
                        v2.0 is now live
                    </div>
                    <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-8">
                        <span className="block text-[#865832] mb-2">Build faster with</span>
                        <span className="bg-linear-to-r from-[#865832] via-[#C5A978] to-[#73A6A2] text-transparent bg-clip-text">
                            Paw-some Tools
                        </span>
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-[#865832]/80 mb-10">
                        Experience the next generation of development. Automated workflows,
                        AI-powered insights, and seamless integration for modern teams.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-[#865832] text-[#EEE3C3] hover:bg-[#A8754D] px-8 py-3 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(134,88,50,0.3)] hover:shadow-[0_0_30px_rgba(134,88,50,0.5)]">
                            Start Building
                        </button>
                        <button className="border border-[#865832] hover:border-[#A8754D] text-[#865832] hover:text-[#A8754D] px-8 py-3 rounded-full font-bold text-lg transition-all bg-[#EEE3C3]/50 backdrop-blur-sm">
                            View Demo
                        </button>
                    </div>
                </div>

                {/* Abstract Background Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
                    <div className="absolute top-20 left-1/4 w-72 h-72 bg-[#C5A978]/20 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute top-40 right-1/4 w-96 h-96 bg-[#865832]/10 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-[#73A6A2]/20 rounded-full blur-[90px]"></div>
                </div>
            </div>

            {/* Features Grid */}
            <div id="features" className="py-24 bg-[#D9C49D]/10 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#865832] mb-4">Why Choose Meowieeee?</h2>
                        <p className="text-[#865832]/70 max-w-2xl mx-auto">
                            Everything you need to scale your application, built into one powerful platform.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Lightning Fast",
                                desc: "Optimized for speed with edge computing capabilities that deliver content in milliseconds.",
                                icon: (
                                    <svg className="w-6 h-6 text-[#865832]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Secure by Default",
                                desc: "Enterprise-grade security with automated compliance checks and real-time threat monitoring.",
                                icon: (
                                    <svg className="w-6 h-6 text-[#A8754D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                )
                            },
                            {
                                title: "AI Integration",
                                desc: "Built-in AI assistants that help you write, debug, and optimize your code instantly.",
                                icon: (
                                    <svg className="w-6 h-6 text-[#73A6A2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                )
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className="p-8 rounded-2xl bg-white border border-[#D9C49D]/20 hover:border-[#865832]/50 transition-all hover:transform hover:-translate-y-1 group shadow-sm">
                                <div className="w-12 h-12 rounded-lg bg-[#EEE3C3] flex items-center justify-center mb-6 group-hover:bg-[#865832]/20 transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-[#865832] mb-3">{feature.title}</h3>
                                <p className="text-[#865832]/70 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Newsletter Section */}
            <div className="py-24 relative overflow-hidden">
                <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl font-bold mb-6 text-[#865832]">Ready to get started?</h2>
                    <p className="text-[#865832]/70 mb-8">
                        Join thousands of developers building the future. Sign up for early access.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 bg-white border border-[#D9C49D] rounded-lg px-4 py-3 text-[#865832] focus:outline-none focus:border-[#865832] focus:ring-1 focus:ring-[#865832] transition-all"
                        />
                        <button className="bg-linear-to-r from-[#865832] to-[#A8754D] hover:from-[#A8754D] hover:to-[#865832] text-[#EEE3C3] font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105">
                            Notify Me
                        </button>
                    </div>
                </div>
                <div className="absolute bottom-0 w-full h-px bg-linear-to-r from-transparent via-[#865832]/20 to-transparent"></div>
            </div>
        </div>
    );
};

export default Home;
