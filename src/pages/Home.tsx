import { useState } from 'react';

const Home = () => {
    const [email, setEmail] = useState('');

    return (
        <div className="flex-grow pt-16">
            {/* Hero Section */}
            <div className="relative pt-20 pb-20 sm:pt-32 sm:pb-24 overflow-hidden">
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                    <div className="inline-flex items-center px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-sm font-medium mb-8 backdrop-blur-sm animate-fade-in-up">
                        <span className="flex h-2 w-2 rounded-full bg-indigo-400 mr-2 animate-pulse"></span>
                        v2.0 is now live
                    </div>
                    <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-8">
                        <span className="block text-white mb-2">Build faster with</span>
                        <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
                            Intelligent Tools
                        </span>
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10">
                        Experience the next generation of development. Automated workflows,
                        AI-powered insights, and seamless integration for modern teams.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded-full font-bold text-lg transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                            Start Building
                        </button>
                        <button className="border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white px-8 py-3 rounded-full font-bold text-lg transition-all bg-slate-800/50 backdrop-blur-sm">
                            View Demo
                        </button>
                    </div>
                </div>

                {/* Abstract Background Elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
                    <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute top-40 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-cyan-500/20 rounded-full blur-[90px]"></div>
                </div>
            </div>

            {/* Features Grid */}
            <div id="features" className="py-24 bg-slate-800/30 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-white mb-4">Why Choose Nebula?</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Everything you need to scale your application, built into one powerful platform.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Lightning Fast",
                                desc: "Optimized for speed with edge computing capabilities that deliver content in milliseconds.",
                                icon: (
                                    <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                )
                            },
                            {
                                title: "Secure by Default",
                                desc: "Enterprise-grade security with automated compliance checks and real-time threat monitoring.",
                                icon: (
                                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                )
                            },
                            {
                                title: "AI Integration",
                                desc: "Built-in AI assistants that help you write, debug, and optimize your code instantly.",
                                icon: (
                                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                )
                            }
                        ].map((feature, idx) => (
                            <div key={idx} className="p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all hover:transform hover:-translate-y-1 group">
                                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-slate-400 leading-relaxed">
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
                    <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
                    <p className="text-slate-400 mb-8">
                        Join thousands of developers building the future. Sign up for early access.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                        />
                        <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105">
                            Notify Me
                        </button>
                    </div>
                </div>
                <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
            </div>
        </div>
    );
};

export default Home;
