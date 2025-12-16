import { Code, Cloud, Smartphone, Database } from "lucide-react";

const Services = () => {
  return (
    <div className="flex-grow pt-16">
      <div className="relative py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Our <span className="text-indigo-400">Services</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-slate-400">
            Comprehensive technology solutions tailored to your business needs.
          </p>
        </div>
      </div>

      <div className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Web Development",
                icon: <Code className="w-8 h-8 text-indigo-400" />,
                desc: "Custom web applications built with React and Node.js.",
              },
              {
                title: "Mobile Apps",
                icon: <Smartphone className="w-8 h-8 text-purple-400" />,
                desc: "Native and cross-platform mobile solutions.",
              },
              {
                title: "Cloud Solutions",
                icon: <Cloud className="w-8 h-8 text-cyan-400" />,
                desc: "Scalable infrastructure and cloud migration services.",
              },
              {
                title: "Database Architecture",
                icon: <Database className="w-8 h-8 text-emerald-400" />,
                desc: "Optimized data storage and retrieval systems.",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-slate-900 p-8 rounded-2xl border border-slate-800 hover:border-indigo-500/30 transition-all flex gap-6"
              >
                <div className="flex-shrink-0 bg-slate-800 w-16 h-16 rounded-xl flex items-center justify-center">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-400">{service.desc}</p>
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
