import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Xabaringiz qabul qilindi! Tez orada javob beramiz. 🚀');
        e.target.reset();
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Bog'lanish</h2>
                    <p className="text-gray-400 text-lg">Loyihangiz bormi? Keling, birga ishlaymiz!</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-dark-800/50 backdrop-blur-md p-6 rounded-2xl border border-white/5 flex items-center gap-6 hover:translate-x-2 transition-transform duration-300">
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white text-2xl shadow-lg shadow-primary/30">
                                <Mail />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-200">Email</h4>
                                <p className="text-primary-light">asilbekmirolimov@example.com</p>
                            </div>
                        </div>

                        <div className="bg-dark-800/50 backdrop-blur-md p-6 rounded-2xl border border-white/5 flex items-center gap-6 hover:translate-x-2 transition-transform duration-300">
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white text-2xl shadow-lg shadow-primary/30">
                                <Phone />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-200">Telefon</h4>
                                <p className="text-primary-light">+998909793450</p>
                            </div>
                        </div>

                        <div className="bg-dark-800/50 backdrop-blur-md p-6 rounded-2xl border border-white/5 flex items-center gap-6 hover:translate-x-2 transition-transform duration-300">
                            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white text-2xl shadow-lg shadow-primary/30">
                                <MapPin />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-200">Joylashuv</h4>
                                <p className="text-primary-light">O'zbekiston 🇺🇿</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-4 gap-4 mt-8">
                            {[
                                { icon: '📱', link: 'https://t.me/mirolimov_a' },
                                { icon: '💻', link: 'https://github.com/asilbek3450' },
                                { icon: '💼', link: 'https://www.linkedin.com/in/asilbek-mirolimov-874a8921a/' },
                                { icon: '📷', link: 'https://instagram.com/mirolimov.1' }
                            ].map((item, idx) => (
                                <a
                                    key={idx}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-20 bg-dark-800/50 rounded-2xl flex flex-col items-center justify-center text-2xl hover:bg-primary hover:text-white transition-all duration-300 hover:-translate-y-2 border border-white/5"
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="bg-dark-800/30 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-gray-300 mb-2 font-medium">Ismingiz</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Ismingizni kiriting"
                                    className="w-full bg-dark-900/50 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-inner"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 mb-2 font-medium">Email</label>
                                <input
                                    type="email"
                                    required
                                    placeholder="email@example.com"
                                    className="w-full bg-dark-900/50 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-inner"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 mb-2 font-medium">Xabar</label>
                                <textarea
                                    required
                                    rows="4"
                                    placeholder="Xabaringizni yozing..."
                                    className="w-full bg-dark-900/50 border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-inner resize-none"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-gradient-to-r from-primary to-primary-light rounded-xl font-bold text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <Send size={20} />
                                Xabar Yuborish
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
