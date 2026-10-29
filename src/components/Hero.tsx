import React from 'react';
import { BookOpen, Crown, Eye, Gift, Leaf, ShieldCheck } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="section-container hero-container">
        {/* Header Text & Slogan */}
        <div className="hero-text-content">
          <div className="royal-badge">
            <Crown size={14} className="royal-icon" />
            <span>Warisan Melayu Turun-Temurun</span>
          </div>

          <h1 className="hero-main-title">IQA PANTANG MELAYU</h1>

          <div className="ornament-separator">
            <span className="ornament-symbol">❖ ⚜ ❖</span>
          </div>

          <p className="hero-slogan">
            <em>Ritual Nusantara Mewah Tradisi Lama, Pemulihan Ibu Modern</em>
          </p>

          <p className="hero-description">
            Menggabungkan kehalusan tradisi perbidanan Melayu dengan sentuhan
            moden yang eksklusif, kami mempersembahkan koleksi penjagaan
            berpantang yang istimewa, sebagai lambang kasih, kelembutan dan
            penghargaan buat setiap ibu.
          </p>

          {/* Clean E-Book Mention Notice */}
          <div className="hero-gift-notice">
            <span className="gift-badge">
              <Gift size={13} /> HADIAH PERCUMA
            </span>
            <span className="gift-text">
              Dapat percuma <strong>Kitab IQA Pantang Melayu (9 Bab Panduan 44 Hari)</strong> dengan setiap pembelian Set Premium.
            </span>
          </div>

          {/* Exactly 2 Clean, Distinct CTA Buttons */}
          <div className="hero-cta-group">
            <a
              href="#pakej-premium"
              className="btn-tradisi-gold hero-btn"
            >
              <Eye size={18} />
              <span>Lihat Set Premium (RM 349)</span>
            </a>
            <a href="#kitab-pantang" className="btn-tradisi-outline hero-btn">
              <BookOpen size={18} />
              <span>Tengok Kandungan E-Book (9 Bab)</span>
            </a>
          </div>

          {/* Quick Trust Highlights */}
          <div className="hero-trust-bar">
            <div className="trust-item">
              <Leaf size={16} className="trust-icon" />
              <span>100% Ramuan Alami</span>
            </div>
            <div className="trust-item">
              <ShieldCheck size={16} className="trust-icon" />
              <span>Tradisi Bidan Melayu</span>
            </div>
            <div className="trust-item">
              <Gift size={16} className="trust-icon" />
              <span>Buku Panduan 44 Hari</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Banner (Gah & Bersih) */}
        <div className="hero-visual-wrapper">
          <div className="hero-image-frame">
            <img
              src="/media/replace_hero.jpg"
              alt="IQA Pantang Melayu - Ritual Nusantara Mewah"
              className="hero-main-img"
              loading="eager"
            />
            <div className="frame-gold-border"></div>
          </div>
          {/* Tag Kotak Hijau diletakkan di bawah gambar supaya tidak menutup imej */}
          <div className="hero-featured-tag">
            <div className="tag-text-group">
              <span className="tag-label">Pakej 14 Keperluan + Percuma E-Book</span>
              <span className="tag-name">Set Pantang Melayu Premium</span>
            </div>
            <div className="tag-price-group">
              <span className="tag-price">RM 349</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
