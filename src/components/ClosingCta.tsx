import React from 'react';
import { CreditCard, Crown, ExternalLink } from 'lucide-react';
import { DOKU_PAYMENT_URL } from '../data/pantangData';

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
              href={DOKU_PAYMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tradisi-gold closing-btn"
            >
              <CreditCard size={18} />
              <span>BAYAR TERUS SECARA ONLINE (RM 349)</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
