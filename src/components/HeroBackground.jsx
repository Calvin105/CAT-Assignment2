import React from 'react';
import { motion } from 'framer-motion';

const HeroBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden -z-10 bg-gradient-to-b from-sky-100 to-white">
            {/* Animated Clouds/Shapes */}
            <motion.div
                className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-deep-sky-blue/10 rounded-full blur-3xl"
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-energetic-teal/10 rounded-full blur-3xl"
                animate={{
                    x: [0, -50, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500491460312-c32fc2dbc751?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        </div>
    );
};

export default HeroBackground;
