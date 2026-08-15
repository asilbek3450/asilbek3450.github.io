import React from 'react';
import { motion } from 'framer-motion';
import lmsImg from '../assets/projects/lms.png';
import shopImg from '../assets/projects/shop.png';
import botImg from '../assets/projects/bot.png';
import medImg from '../assets/projects/med.png';
import apiImg from '../assets/projects/api.png';
import dockerImg from '../assets/projects/docker.png';

const projects = [
    {
        image: lmsImg,
        title: "Online Learning Platform (LMS)",
        desc: "Zamonaviy o'quv platformasi (LMS). Talabalar uchun kurslar, real-time video darslar, progress tracking va sertifikatlash tizimi.",
        tags: ["React", "Django", "PostgreSQL", "AWS"]
    },
    {
        image: shopImg,
        title: "E-commerce Shop",
        desc: "To'liq funksional internet do'kon. Savat, to'lov tizimlari integratsiyasi, admin panel va real-time buyurtmalar statistikasi.",
        tags: ["Next.js", "Redux", "Stripe", "Tailwind"]
    },
    {
        image: botImg,
        title: "Telegram Bot Platform",
        desc: "aiogram 3 asosida yaratilgan murakkab bot tizimi. To'liq async ishlash, JWT autentifikatsiya va real-time ma'lumotlar bilan ishlash.",
        tags: ["aiogram 3", "Python", "PostgreSQL", "JWT"]
    },
    {
        image: medImg,
        title: "Medical ML System",
        desc: "Tibbiyot sohasida ML algoritmlari qo'llanilgan tizim. Clustering va klassifikatsiya orqali bemor ma'lumotlarini tahlil qilish.",
        tags: ["Machine Learning", "Django", "Clustering", "Healthcare"]
    },
    {
        image: apiImg,
        title: "Django Async API",
        desc: "Django 5 ning async imkoniyatlaridan foydalangan yuqori tezlikdagi REST API. Celery bilan background tasks va caching.",
        tags: ["Django 5", "Async", "Celery", "Redis"]
    },
    {
        image: dockerImg,
        title: "Dockerized Microservices",
        desc: "Docker va Docker Compose yordamida qurilgan mikroservis arxitekturasi. CI/CD pipeline va avtomatik deployment.",
        tags: ["Docker", "Microservices", "CI/CD", "Nginx"]
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 bg-dark-800/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
                        Loyihalarim
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full transform translate-y-4"></span>
                    </h2>
                    <p className="text-gray-400 text-lg mt-6">Real loyihalar va amaliy yechimlar</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ y: -15 }}
                            className="bg-dark-900/60 backdrop-blur-md rounded-3xl overflow-hidden border border-white/5 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group"
                        >
                            <div className="h-48 relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent" />
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-gray-400 mb-6 leading-relaxed line-clamp-3">
                                    {project.desc}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, tIdx) => (
                                        <span key={tIdx} className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary-light">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a href="#" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all group-hover:text-primary-light">
                                    Batafsil <span className="text-xl">→</span>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
