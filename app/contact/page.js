'use client';

import React, { useState } from 'react';

const ContactForm = () => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    alert('Pesan berhasil dikirim!');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-purple-900 text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-300">
        Hubungi Saya
      </h1>
      <p className="text-center max-w-2xl text-gray-300 mb-8">
        Jika Anda ingin berkolaborasi atau memiliki pertanyaan, silakan hubungi saya melalui informasi di bawah ini atau kirim pesan langsung melalui formulir.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="bg-white bg-opacity-10 p-6 rounded-2xl text-center flex flex-col items-center shadow-lg transform transition duration-300 hover:scale-105 hover:bg-opacity-20">
          <span className="text-blue-400 text-4xl">📧</span>
          <h2 className="text-xl font-semibold mt-2">Email</h2>
          <p className="text-gray-300 mt-1">alwanwildan92@gmail.com</p>
        </div>
        <div className="bg-white bg-opacity-10 p-6 rounded-2xl text-center flex flex-col items-center shadow-lg transform transition duration-300 hover:scale-105 hover:bg-opacity-20">
          <span className="text-green-400 text-4xl">📞</span>
          <h2 className="text-xl font-semibold mt-2">Telepon</h2>
          <p className="text-gray-300 mt-1">0843-7826-29348</p>
        </div>
        <div className="bg-white bg-opacity-10 p-6 rounded-2xl text-center flex flex-col items-center shadow-lg transform transition duration-300 hover:scale-105 hover:bg-opacity-20">
          <span className="text-red-400 text-4xl">📍</span>
          <h2 className="text-xl font-semibold mt-2">Lokasi</h2>
          <p className="text-gray-300 mt-1">Rancaekek, Bandung, Indonesia</p>
        </div>
      </div>

      <div className="mt-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Kirim Pesan</h2>
        <textarea
          placeholder="Masukkan pesan Anda..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 mb-4 rounded-lg bg-white bg-opacity-20 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-300"
          rows="4"
        />
        <button 
          className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-blue-500 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          onClick={handleSendMessage}
        >
          Kirim Pesan
        </button>
      </div>
      
      <a
        href="/"
        className="mt-8 bg-gray-800 hover:bg-gray-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        Kembali ke Beranda
      </a>
    </div>
  );
};

export default ContactForm;
