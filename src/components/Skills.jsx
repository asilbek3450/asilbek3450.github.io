import React from 'react';
import { motion } from 'framer-motion';

const skillsData = [
    {
        icon: "🚀",
        title: "Backend Development",
        skills: [
            { name: "Django Framework", level: "Expert" },
            { name: "Django 5 Async", level: "Advanced" },
            { name: "JWT Authentication", level: "Expert" },
            { name: "REST API Design", level: "Expert" }
        ]
    },
    {
        icon: "🤖",
        title: "Bot Development",
        skills: [
            { name: "aiogram 3", level: "Expert" },
            { name: "Telegram Bot API", level: "Advanced" },
            { name: "Interactive Bots", level: "Advanced" }
        ]
    },
    {
        icon: "💾",
        title: "Database & ORM",
        skills: [
            { name: "PostgreSQL", level: "Advanced" },
            { name: "SQLite", level: "Expert" },
            { name: "Django ORM", level: "Expert" }
        ]
    },
    {
        icon: "🐳",
        title: "DevOps & Infrastructure",
        skills: [
            { name: "Docker", level: "Advanced" },
            { name: "Celery", level: "Learning" },
            { name: "CI/CD", level: "Intermediate" }
        ]
    },
    {
        icon: "🧠",
        title: "ML & AI",
        skills: [
            { name: "Clustering Algorithms", level: "Advanced" },
            { name: "Medical ML", level: "Intermediate" },
            { name: "Data Analysis", level: "Advanced" }
        ]
    },
    {
        icon: "🛠️",
        title: "Tools & Others",
        skills: [
            { name: "Git & GitHub", level: "Expert" },
            { name: "Testing", level: "Advanced" },
            { name: "Technical Documentation", level: "Advanced" }
        ]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
                        Texnik Ko'nikmalar
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full transform translate-y-4"></span>
                    </h2>
                    <p className="text-gray-400 text-lg mt-6">Zamonaviy texnologiyalar va amaliy tajriba</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="bg-dark-800/50 backdrop-blur-lg p-8 rounded-3xl border border-primary/20 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 group relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                            <div className="text-4xl mb-6">{category.icon}</div>
                            <h3 className="text-2xl font-bold mb-6">{category.title}</h3>

                            <ul className="space-y-4">
                                {category.skills.map((skill, sIdx) => (
                                    <li key={sIdx} className="flex items-center justify-between p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                                        <span className="font-medium">{skill.name}</span>
                                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/20 text-primary-light">
                                            {skill.level}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
