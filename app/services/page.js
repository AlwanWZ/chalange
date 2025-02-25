'use client';

import React from 'react';

const Services = () => {
  const services = [
    { name: 'Pengembangan Website', description: 'Membangun situs web profesional dan responsif menggunakan teknologi terbaru.', icon: '💻', color: 'text-blue-400' },
    { name: 'Desain UI/UX', description: 'Membuat antarmuka yang menarik dan ramah pengguna dengan pendekatan desain modern.', icon: '🎨', color: 'text-pink-400' },
    { name: 'Pengelolaan Backend', description: 'Mengembangkan backend yang aman dan scalable dengan framework terbaru.', icon: '🔧', color: 'text-yellow-400' },
    { name: 'Administrasi Database', description: 'Mengelola database yang efisien dan optimal untuk memastikan integritas data.', icon: '🗄️', color: 'text-green-400' },
    { name: 'SEO dan Optimasi', description: 'Meningkatkan performa dan visibilitas situs di mesin pencari dengan strategi SEO.', icon: '🚀', color: 'text-purple-400' },
    { name: 'Dukungan & Pemeliharaan', description: 'Menyediakan layanan perawatan dan pemeliharaan untuk memastikan sistem berjalan optimal.', icon: '🛠️', color: 'text-red-400' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-purple-900 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-300">
        Layanan Kami
      </h1>
      <p className="text-center max-w-2xl text-gray-300 mb-8">
        Kami menawarkan berbagai layanan dalam pengembangan web, desain, dan optimasi sistem untuk mendukung kebutuhan digital Anda.
      </p>

      <div className="grid md:grid-cols-3 gap-6 w-full max-w-5xl">
        {services.map((service, index) => (
          <div key={index} className="bg-white bg-opacity-10 p-6 rounded-2xl text-center flex flex-col items-center shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-opacity-20 hover:shadow-2xl">
            <div className={`${service.color} text-4xl mb-4`}>{service.icon}</div>
            <h2 className="text-xl font-semibold text-blue-300">{service.name}</h2>
            <p className="text-gray-300 mt-2">{service.description}</p>
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

export default Services;
