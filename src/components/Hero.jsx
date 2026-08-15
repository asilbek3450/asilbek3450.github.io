import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background Elements could go here */}

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative inline-block mb-8"
                >
                    <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-blue-900 to-indigo-900 flex items-center justify-center text-8xl md:text-9xl relative z-10 border-4 border-white/10 shadow-2xl mx-auto">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/011/153/364/small/3d-website-developer-working-on-laptop-illustration-png.png" alt="" />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border-2 border-primary/50 animate-[spin_10s_linear_infinite]" style={{ width: '120%', height: '120%' }}>
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_#667eea]" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-block py-2 px-6 rounded-full bg-primary/10 border border-primary/30 text-primary-light font-semibold mb-6 backdrop-blur-sm">
                        Software Engineer
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent pb-2">
                        Asilbek Mirolimov
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Software & ML Engineer | Dasturchi Muhandis
                        <br />
                        <span className="text-lg opacity-80 mt-2 block">📍 O'zbekiston 🇺🇿</span>
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="#contact"
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-primary-light text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 transform hover:-translate-y-1 transition-all duration-300"
                        >
                            Bog'lanish
                        </a>
                        <a
                            href="#projects"
                            className="px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-semibold backdrop-blur-sm hover:bg-white/20 transform hover:-translate-y-1 transition-all duration-300"
                        >
                            Loyihalarimni ko'rish
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-2xl opacity-60"
            >
                ⬇️
            </motion.div>
        </section>
    );
};

export default Hero;
