import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-950 to-purple-900 text-white p-6">
      <div className="max-w-3xl text-center">
        <div className="flex justify-center">
          <Image
            src="/alwan.jpg" // Ganti dengan path foto kamu
            alt="Alwan"
            width={200}
            height={200}
            className="rounded-full border-4 border-blue-500 shadow-lg transform transition duration-300 hover:scale-110"
          />
        </div>
        <h1 className="text-4xl font-bold mt-4 text-blue-300">Alwan</h1>
        <h2 className="text-xl font-semibold text-gray-300 mt-2">Mahasiswa Sistem Informasi</h2>
        <p className="mt-4 text-lg text-gray-400">
          Lahir di Lampung pada tahun 2005, saat ini menempuh pendidikan di semester 4 dengan minat dalam teknologi dan pengembangan web.
        </p>
        <div className="mt-6">
          <a
            href="contact"
            className="px-6 py-3 bg-blue-700 hover:bg-purple-700 text-white font-semibold rounded-lg shadow-md transition"
          >
            Hubungi Saya
          </a>
        </div>
      </div>
    </div>
  );
}
