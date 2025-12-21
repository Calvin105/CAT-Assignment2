import { Code, Cloud, Smartphone, Database } from 'lucide-react';

const Services = () => {
    return (
        <div className="flex-grow pt-16">
            <div className="relative py-20 bg-[#865832]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#EEE3C3] mb-6">
                        Our <span className="text-[#D9C49D]">Services</span>
                    </h1>
                    <p className="max-w-3xl mx-auto text-xl text-[#EEE3C3]/80">
                        Comprehensive technology solutions tailored to your business needs.
                    </p>
                </div>
            </div>

            <div className="py-20 bg-[#fffdf5]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            { title: "Web Development", icon: <Code className="w-8 h-8 text-[#865832]" />, desc: "Custom web applications built with React and Node.js." },
                            { title: "Mobile Apps", icon: <Smartphone className="w-8 h-8 text-[#A8754D]" />, desc: "Native and cross-platform mobile solutions." },
                            { title: "Cloud Solutions", icon: <Cloud className="w-8 h-8 text-[#0E5851]" />, desc: "Scalable infrastructure and cloud migration services." },
                            { title: "Database Architecture", icon: <Database className="w-8 h-8 text-[#73A6A2]" />, desc: "Optimized data storage and retrieval systems." },
                        ].map((service, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl border border-[#D9C49D]/30 hover:border-[#865832]/30 transition-all flex gap-6 hover:shadow-lg">
                                <div className="flex-shrink-0 bg-[#EEE3C3]/30 w-16 h-16 rounded-xl flex items-center justify-center">
                                    {service.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#865832] mb-2">{service.title}</h3>
                                    <p className="text-[#865832]/80">{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
