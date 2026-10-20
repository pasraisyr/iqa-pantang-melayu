import React from 'react';
import { BookOpen, Crown, Gift, MessageSquare, PackageCheck, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/useCart';
import {
  EBOOK_CHAPTERS,
  EXCLUSIVE_SET,
  EXCLUSIVE_SET_ITEMS,
} from '../data/pantangData';

export const ExclusiveSet: React.FC = () => {
  const { addToCart, openCart } = useCart();

  const handleOrder = () => {
    addToCart(EXCLUSIVE_SET, 1);
    openCart();
  };

  return (
    <section id="pakej-premium" className="exclusive-set-section section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center section-header-box">
          <span className="section-subtitle">
            <Crown size={13} className="inline-icon" /> PAKEJ UTAMA DIRAJA
          </span>
          <h2 className="section-title">KOLEKSI PANTANG EKSKLUSIF</h2>
          <div className="ornament-separator">
            <span className="ornament-symbol">❖ ⚜ ❖</span>
          </div>
        </div>

        {/* Exclusive Set Main Presentation Card */}
        <div className="exclusive-card-container">
          <div className="exclusive-grid">
            {/* Visual Column */}
            <div className="exclusive-image-col">
              <div className="exclusive-image-wrapper">
                <img
                  src="/media/koleksi_pantang_ekslusif.jpg"
                  alt="Koleksi Pantang Eksklusif IQA Pantang Melayu"
                  className="exclusive-banner-img"
                />
                <div className="price-tag-ribbon">
                  <span className="ribbon-prefix">Harga Istimewa</span>
                  <span className="ribbon-price">RM 349</span>
                </div>
              </div>

              {/* Free Gift Badge */}
              <div className="free-ebook-highlight-card">
                <div className="free-gift-header">
                  <div className="gift-icon-wrapper">
                    <Gift size={22} className="gift-icon-svg" />
                  </div>
                  <div>
                    <h4>HADIAH ISTIMEWA: E-BOOK PERCUMA!</h4>
                    <p className="gift-sub">
                      KITAB IQA PANTANG MELAYU (Panduan 44 Hari Pantang Melayu)
                    </p>
                  </div>
                </div>
                <p className="gift-desc-text">
                  Diberikan secara <strong>PERCUMA</strong> dengan setiap
                  pembelian Set Pantang Melayu Premium.
                </p>
              </div>
            </div>

            {/* Details Column */}
            <div className="exclusive-content-col">
              <div className="exclusive-title-row">
                <h3 className="exclusive-title">SET PANTANG MELAYU PREMIUM</h3>
                <div className="exclusive-price-display">
                  <span className="currency">RM</span>
                  <span className="amount">349</span>
                </div>
              </div>

              <p className="exclusive-tagline">
                Raikan perjalanan keibuan dengan koleksi penjagaan berpantang
                eksklusif yang diinspirasikan daripada kehalusan warisan Melayu.
              </p>

              {/* Items included list */}
              <div className="included-items-container">
                <h4 className="items-header">
                  <PackageCheck size={18} className="items-header-icon" />
                  <span>Apa yang anda terima? (14 Keperluan Lengkap)</span>
                </h4>
                <div className="included-items-grid">
                  {EXCLUSIVE_SET_ITEMS.map((item, index) => (
                    <div key={index} className="included-item-pill">
                      <span className="item-number">{index + 1}.</span>
                      <span className="item-title">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="exclusive-cta-actions">
                <button
                  type="button"
                  className="btn-tradisi-gold cta-action-btn"
                  onClick={handleOrder}
                >
                  <ShoppingBag size={18} />
                  <span>Tambah Ke Troli (RM 349)</span>
                </button>
                <button
                  type="button"
                  className="btn-tradisi-green cta-action-btn"
                  onClick={() => {
                    addToCart(EXCLUSIVE_SET, 1);
                    openCart();
                  }}
                >
                  <MessageSquare size={18} />
                  <span>Pesan Terus Ke WhatsApp</span>
                </button>
              </div>
            </div>
          </div>

          {/* E-Book Breakdown Section */}
          <div className="ebook-detailed-section">
            <div className="ebook-section-header">
              <div className="ebook-icon-wrapper">
                <BookOpen size={24} className="ebook-icon-svg" />
              </div>
              <div>
                <h3 className="ebook-title">
                  KANDUNGAN KITAB IQA PANTANG MELAYU
                </h3>
                <p className="ebook-subtitle">
                  Panduan lengkap & berstruktur 44 hari untuk ketenangan minda
                  dan pemulihan fizikal ibu:
                </p>
              </div>
            </div>

            <div className="ebook-chapters-grid">
              {EBOOK_CHAPTERS.map((ch) => (
                <div key={ch.num} className="chapter-card">
                  <span className="chapter-badge">{ch.num}</span>
                  <div className="chapter-content">
                    <h4 className="chapter-name">{ch.title}</h4>
                    <p className="chapter-desc">{ch.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
