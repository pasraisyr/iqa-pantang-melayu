import React from 'react';
import { Crown, Eye } from 'lucide-react';

export const ClosingCta: React.FC = () => {
  return (
    <section className="closing-section section-padding">
      <div className="section-container">
        <div className="closing-card">
          <div className="closing-crown-wrapper">
            <Crown size={36} className="closing-crown-svg" />
          </div>
          <h2 className="closing-heading">PENUTUP</h2>

          <div className="ornament-separator">
            <span className="ornament-symbol">❖ ⚜ ❖</span>
          </div>

          <blockquote className="closing-royal-quote">
            “Kerana setiap ibu adalah seorang permaisuri yang layak diraikan,
            setiap pengorbanan wajar dihargai dan setiap perjalanan keibuan
            berhak disantuni dengan penuh kasih.”
          </blockquote>

          <div className="closing-offer-box">
            <h3 className="closing-offer-title">
              SET PANTANG MELAYU PREMIUM — RM349
            </h3>
            <p className="closing-offer-subtitle">
              *(Termasuk E-Buku Panduan 44 Hari Pantang Melayu Percuma)*
            </p>

            <a
              href="#pakej-premium"
              className="btn-tradisi-gold closing-btn"
            >
              <Eye size={18} />
              <span>LIHAT KOLEKSI SET PREMIUM (RM 349)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
