'use client';

import React from 'react';

const Portfolio = () => {
  const projects = [
    { 
      name: 'Website Travel Agency', 
      description: 'Sistem pemesanan tiket perjalanan dengan tampilan interaktif.', 
      image: '/travel.jpg' 
    },
    { 
      name: 'Aplikasi Manajemen Keuangan', 
      description: 'Aplikasi berbasis web untuk mengatur pengeluaran dan pemasukan secara efisien.', 
      image: '/finance.jpg' 
    },
    { 
      name: 'Sistem Reservasi Hotel', 
      description: 'Platform pemesanan kamar hotel dengan fitur kalender dan pembayaran online.', 
      image: '/hotel.jpg' 
    },
    { 
      name: 'Loopify - Social Media Platform', 
      description: 'Saya membangun website media sosial bernama Loopify untuk menghubungkan orang-orang dengan fitur interaktif.', 
      image: '/loopify.jpg' 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-purple-900 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-300">
        Portfolio Saya
      </h1>
      <p className="text-center max-w-2xl text-gray-300 mb-8">
        Berikut adalah beberapa proyek yang telah saya kerjakan dalam pengembangan website dan aplikasi.
      </p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-white bg-opacity-10 p-6 rounded-2xl text-center flex flex-col items-center shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-opacity-20 hover:shadow-2xl"
          >
            <img 
              src={project.image} 
              alt={project.name} 
              className="w-full h-40 object-cover rounded-lg mb-4 transition-transform transform hover:scale-110 duration-300"
            />
            <h2 className="text-xl font-semibold text-blue-300">{project.name}</h2>
            <p className="text-gray-300 mt-2">{project.description}</p>
          </div>
        ))}
      </div>

      <a 
        href="/" 
        className="mt-8 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        Kembali ke Beranda
      </a>
    </div>
  );
};

export default Portfolio;
