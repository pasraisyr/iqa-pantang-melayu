import { CheckCircle2, Gift, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/useCart';
import { EBOOK_CHAPTERS, EXCLUSIVE_SET } from '../data/pantangData';

export const EbookSection: React.FC = () => {
  const { addToCart, openCart } = useCart();

  const handleOrder = () => {
    addToCart(EXCLUSIVE_SET, 1);
    openCart();
  };

  return (
    <section id="kitab-pantang" className="ebook-section section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center section-header-box">
          <span className="section-subtitle">
            <Gift size={13} className="inline-icon" /> HADIAH ISTIMEWA PERCUMA
          </span>
          <h2 className="section-title">KITAB IQA PANTANG MELAYU</h2>
          <div className="ornament-separator">
            <span className="ornament-symbol">❖ ⚜ ❖</span>
          </div>
          <p className="section-intro-text">
            Buku panduan digital komprehensif 44 hari berpantang tradisi Melayu
            yang disediakan secara eksklusif dan diberikan secara{' '}
            <strong>PERCUMA</strong> dengan setiap pembelian Set Pantang Melayu
            Premium.
          </p>
        </div>

        {/* E-Book Main Presentation Card */}
        <div className="ebook-main-card classic-border-box">
          <div className="ebook-showcase-grid">
            {/* Visual Column: Using /media/e-book.jpg */}
            <div className="ebook-visual-col">
              <div className="ebook-image-wrapper">
                <img
                  src="/media/e-book.jpg"
                  alt="Kitab IQA Pantang Melayu - Panduan 44 Hari Berpantang"
                  className="ebook-banner-img"
                  loading="lazy"
                />
                <div className="ebook-free-badge">
                  <Gift size={15} />
                  <span>Hadiah Percuma (Set Premium)</span>
                </div>
              </div>

              {/* Value Highlights */}
              <div className="ebook-perks-box">
                <div className="perk-item">
                  <CheckCircle2 size={16} className="perk-icon" />
                  <span>Format Digital (PDF) Mudah Dibaca di Telefon & Komputer</span>
                </div>
                <div className="perk-item">
                  <CheckCircle2 size={16} className="perk-icon" />
                  <span>Akses Terus Bersama Pembelian Set Pantang Melayu Premium</span>
                </div>
                <div className="perk-item">
                  <CheckCircle2 size={16} className="perk-icon" />
                  <span>Panduan Langkah Demi Langkah dari Hari 01 hingga 44</span>
                </div>
              </div>
            </div>

            {/* Chapters & Content Column */}
            <div className="ebook-content-col">
              <div className="ebook-header-block">
                <span className="ebook-edition-tag">Edisi Lengkap Eksklusif</span>
                <h3 className="ebook-content-title">
                  KANDUNGAN 9 BAB KITAB IQA PANTANG MELAYU
                </h3>
                <p className="ebook-content-desc">
                  Panduan berstruktur untuk ketenangan emosi dan pemulihan fizikal
                  menyeluruh ibu sepanjang tempoh 44 hari berpantang:
                </p>
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

              {/* Action Banner */}
              <div className="ebook-cta-box">
                <div className="ebook-cta-text">
                  <h5>Dapatkan Kitab Ini Secara Percuma Hari Ini</h5>
                  <p>
                    Kitab IQA Pantang Melayu diberikan secara percuma secara
                    automatik dengan setiap pembelian Set Pantang Melayu Premium
                    (RM 349).
                  </p>
                </div>
                <div className="ebook-cta-buttons">
                  <button
                    type="button"
                    className="btn-tradisi-gold btn-sm"
                    onClick={handleOrder}
                  >
                    <ShoppingBag size={16} />
                    <span>Tempah Set & Dapatkan E-Book (RM 349)</span>
                  </button>
                  <a
                    href="#pakej-premium"
                    className="btn-tradisi-outline btn-sm"
                  >
                    <span>Lihat Pakej Set Di Atas ↑</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
