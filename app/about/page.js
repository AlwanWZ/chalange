'use client';

import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-r from-blue-950 to-purple-800 text-white flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold mb-6 text-blue-400">Tentang Saya</h1>
        
        <div className="bg-blue-900 p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 max-w-lg w-full">
          <ul className="space-y-4 text-lg">
            <li className="flex items-center">
              <span className="text-blue-300 font-semibold w-32">Nama</span>: <span className="ml-2">Alwan</span>
            </li>
            <li className="flex items-center">
              <span className="text-blue-300 font-semibold w-32">Lahir</span>: <span className="ml-2">Lampung, 6 November 2005</span>
            </li>
            <li className="flex items-center">
              <span className="text-blue-300 font-semibold w-32">Prodi</span>: <span className="ml-2">Sistem Informasi A</span>
            </li>
            <li className="flex items-center">
              <span className="text-blue-300 font-semibold w-32">Semester</span>: <span className="ml-2">4</span>
            </li>
            <li className="flex items-center">
              <span className="text-blue-300 font-semibold w-32">Hobi</span>: 
              <span className="ml-2">Basket, baca komik, nonton anime, riding, game</span>
            </li>
          </ul>
        </div>
        
        <a 
          href='/' 
          className="mt-8 bg-gray-800 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-full transition">
          Kembali ke Beranda
        </a>
      </div>
    </>
  );
};

export default About;
