import React from 'react';

const TechStack = () => {
    const techs = [
        "🐍 Python", "🎯 Django", "🤖 aiogram 3", "🔐 JWT Auth",
        "🐳 Docker", "📊 ML", "💾 PostgreSQL", "⚡ Celery",
        // Repeat for seamless loop
        "🐍 Python", "🎯 Django", "🤖 aiogram 3", "🔐 JWT Auth",
        "🐳 Docker", "📊 ML", "💾 PostgreSQL", "⚡ Celery"
    ];

    return (
        <div className="w-full overflow-hidden bg-black/20 py-8 backdrop-blur-sm">
            <div className="flex animate-[marquee_30s_linear_infinite] whitespace-nowrap gap-8 px-4">
                {techs.map((tech, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 text-xl font-medium text-gray-200"
                    >
                        {tech}
                    </div>
                ))}
            </div>
            <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </div>
    );
};

export default TechStack;
