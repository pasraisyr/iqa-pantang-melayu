Tolong ubah dan kemas kini komponen Navbar laman web Next.js / Tailwind CSS saya supaya kelihatan lebih elegan, eksklusif, dan berunsur Tradisional Melayu Istana. 

Sila ikuti panduan reka bentuk dan struktur kod di bawah:

1. Konsep & Warna:
   - Warna Latar: Krem lembut / off-white (#FAF6F0) untuk rasa klasik.
   - Warna Penegasan & Garisan: Warna Emas (#C5A059) dan Marun Klasik (#8C2318).
   - Elakkan unsur moden seperti glassmorphism, glowing effect, atau elemen neon/gradient moden.

2. Elemen Visual Tradisional:
   - Tambah garisan nipis ganda (double border) atau hiasan garisan emas di bahagian atas/bawah navbar.
   - Gunakan simbol tradisional kecil seperti "❖" atau "✦" sebagai pemisah antara pautan menu.
   - Balut logo (/media/logo.jpg) dengan bingkai bulatan berkembar berwarna emas (#C5A059).

3. Tipografi & Susunan Menu:
   - Gunakan font jenis Serif (seperti Cinzel / Cormorant Garamond / Playfair Display) dengan gaya UPPERCASE dan tracking-widest.
   - Ringkaskan dan susun menu seperti berikut:
     1. Pengenalan
     2. Kisah Pengasas
     3. Pakej Premium (Tebalkan & warnakan marun)
     4. Koleksi Warisan
     5. Soalan Lazim

4. Butang Actions & Troli:
   - Butang Troli: Ubah daripada hijau gelap kepada bingkai emas dengan latar krim (#F4ECE1), berserta lencana bilangan barang (badge) berwarna marun (#8C2318).
   - Tambah butang "TEMPAH SEKARANG" di sebelah kanan dengan bingkai ganda emas.

Contoh Struktur Kod Tailwind CSS yang Diingini:

import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#FAF6F0] border-b-2 border-[#C5A059]/40 shadow-sm">
      {/* Garis Hiasan Atas */}
      <div className="h-1 bg-gradient-to-r from-[#8C2318] via-[#C5A059] to-[#8C2318]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Identiti */}
          <div className="flex items-center space-x-3 cursor-pointer">
            <div className="relative w-12 h-12 rounded-full border-2 border-[#C5A059] p-0.5 overflow-hidden shadow-md">
              <img 
                src="/media/logo.jpg" 
                alt="IQA Pantang Melayu" 
                className="w-full h-full object-cover rounded-full" 
              />
            </div>
            <div>
              <h1 className="font-serif text-lg tracking-wider font-bold text-[#2C221E] uppercase leading-tight">
                Iqa Pantang Melayu
              </h1>
              <p className="text-[10px] tracking-widest text-[#C5A059] uppercase font-semibold">
                Warisan Penjagaan Ibu Diraja
              </p>
            </div>
          </div>

          {/* Navigasi Utama */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-[#4A3B32]">
            <a href="#pengenalan" className="hover:text-[#C5A059] transition-colors tracking-wide">
              Pengenalan
            </a>
            <span className="text-[#C5A059]/50 text-xs">❖</span>
            
            <a href="#kisah-pengasas" className="hover:text-[#C5A059] transition-colors tracking-wide">
              Kisah Pengasas
            </a>
            <span className="text-[#C5A059]/50 text-xs">❖</span>
            
            <a href="#pakej-premium" className="hover:text-[#C5A059] transition-colors tracking-wide font-semibold text-[#8C2318]">
              Pakej Premium
            </a>
            <span className="text-[#C5A059]/50 text-xs">❖</span>
            
            <a href="#koleksi-warisan" className="hover:text-[#C5A059] transition-colors tracking-wide">
              Koleksi Warisan
            </a>
            <span className="text-[#C5A059]/50 text-xs">❖</span>
            
            <a href="#faq" className="hover:text-[#C5A059] transition-colors tracking-wide">
              Soalan Lazim
            </a>
          </nav>

          {/* Butang Troli & CTA */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2.5 rounded-md border border-[#C5A059] bg-[#F4ECE1] text-[#2C221E] hover:bg-[#C5A059] hover:text-white transition-all shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-1.5 -right-1.5 bg-[#8C2318] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border border-white">
                1
              </span>
            </button>

            <a 
              href="#tempah" 
              className="hidden lg:inline-block px-5 py-2 text-xs uppercase tracking-widest font-semibold border-2 border-[#C5A059] text-[#2C221E] hover:bg-[#C5A059] hover:text-white transition-all shadow-sm rounded-sm"
            >
              Tempah Sekarang
            </a>
          </div>

        </div>
      </div>
      
      {/* Garis Sempadan Bawah */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-[#C5A059]/60 to-transparent" />
    </header>
  );
}

Sila suaikan kod di atas ke dalam komponen Navbar sedia ada dalam projek saya.