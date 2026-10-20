import React from 'react';
import { BookOpen, Crown, Eye, Leaf, ShieldCheck } from 'lucide-react';

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

          <div className="hero-cta-group">
            <a
              href="#pakej-premium"
              className="btn-tradisi-gold hero-btn"
            >
              <Eye size={18} />
              <span>Lihat Set Premium (RM 349)</span>
            </a>
            <a href="#koleksi-produk" className="btn-tradisi-outline hero-btn">
              <span>Lihat 15 Produk Warisan</span>
            </a>
          </div>

          {/* Quick Trust Highlights */}
          <div className="hero-trust-bar">
            <div className="trust-item">
              <Leaf size={16} className="trust-icon" />
              <span>100% Ramuan Alami</span>
            </div>
            <div className="trust-item">
              <BookOpen size={16} className="trust-icon" />
              <span>Percuma Kitab 44 Hari</span>
            </div>
            <div className="trust-item">
              <ShieldCheck size={16} className="trust-icon" />
              <span>Tradisi Bidan Melayu</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Banner */}
        <div className="hero-visual-wrapper">
          <a href="#pakej-premium" className="hero-visual-link" title="Lihat Pakej Premium">
            <div className="hero-image-frame">
              <img
                src="/media/hero.jpg"
                alt="IQA Pantang Melayu - Ritual Nusantara Mewah"
                className="hero-main-img"
                loading="eager"
              />
              <div className="frame-gold-border"></div>
            </div>
            <div className="hero-featured-tag">
              <span className="tag-label">Koleksi Pilihan</span>
              <span className="tag-name">Set Pantang Melayu Premium</span>
              <span className="tag-price">RM 349</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
