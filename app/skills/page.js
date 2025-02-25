'use client';

import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML', level: 89, icon: '🔗', color: 'text-red-400' },
    { name: 'CSS & Tailwind', level: 70, icon: '✏️', color: 'text-blue-400' },
    { name: 'JavaScript', level: 79, icon: '⚡', color: 'text-yellow-400' },
    { name: 'React.js', level: 72, icon: '🌀', color: 'text-blue-500' },
    { name: 'Next.js', level: 79, icon: '🖥️', color: 'text-gray-400' },
    { name: 'Database / PL/SQL', level: 82, icon: '🗄️', color: 'text-green-400' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-purple-900 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-300">
        Keahlian Saya
      </h1>
      <p className="text-center max-w-2xl text-gray-300 mb-8">
        Saya berpengalaman dalam pengembangan web menggunakan beragam teknologi modern. Berikut adalah keahlian utama saya:
      </p>

      <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl">
        {skills.map((skill, index) => (
          <div key={index} className="bg-white bg-opacity-10 p-6 rounded-2xl text-center flex flex-col items-center shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-opacity-20 hover:shadow-2xl">
            <div className={`${skill.color} text-4xl mb-4`}>{skill.icon}</div>
            <h2 className="text-xl font-semibold text-blue-300">{skill.name}</h2>
            <div className="w-full mt-2">
              <div className="w-full bg-gray-700 rounded-full h-3 relative overflow-hidden">
                <div className="bg-blue-500 h-full rounded-full transition-all duration-500 ease-in-out" style={{ width: `${skill.level}%` }}></div>
              </div>
              <p className="text-gray-300 mt-2">{skill.level}%</p>
            </div>
          </div>
        ))}
      </div>

      <a 
        href='/'
        className="mt-8 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        Kembali ke Beranda
      </a>
    </div>
  );
};

export default Skills;
