import { ArrowDown, CreditCard, Crown, ExternalLink, Gift, PackageCheck, ShieldCheck } from 'lucide-react';
import {
  DOKU_PAYMENT_URL,
  EXCLUSIVE_SET_ITEMS,
} from '../data/pantangData';

const ITEM_TO_PRODUCT_ID: Record<string, string> = {
  'Param, Pilis & Tapel Bidan': 'set-param-pilis-tapel',
  'Gel Mandian Maharani': 'gel-mandian-maharani',
  'Minyak Bidan Kampong': 'minyak-bidang-kampong',
  'Bengkong Kebaya Primadona': 'bengkong-kebaya-primadona',
  'Balm Emas Anaknda': 'balm-emas-anaknda',
  'Tungku Permata Sungai': 'tungku-permata-sungai',
  'Tungku Kacang Ketot': 'tungku-kacang-ketot',
  'Lulur Bentara Hutan': 'lulur-bentara-hutan',
  'Sajian Pantang': 'sajian-pantang',
  'Akar Kayu Sukma Jelita': 'akar-kayu-sukma-jelita',
  'Rempah Tangas Dewi Putik': 'rempah-tangas-dewi-putik',
  'Limpah Susu': 'limpah-susu',
  'Siraman Anakku': 'siraman-anakku',
  'Bunjut Pasak Seri': 'bunjut-pasak-seri',
};

export const ExclusiveSet: React.FC = () => {

  const handleSelectItem = (itemTitle: string) => {
    const prodId = ITEM_TO_PRODUCT_ID[itemTitle];
    if (prodId) {
      window.dispatchEvent(
        new CustomEvent('select-product-by-id', { detail: { id: prodId } })
      );
    }
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
          <p className="section-intro-text">
            Pakej lengkap 14 keperluan berpantang yang diadun daripada warisan
            Melayu turun-temurun, lengkap dengan hadiah percuma E-Buku panduan 44 hari.
          </p>
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

              {/* Free Gift Preview Link (Directs to Dedicated E-Book Section below) */}
              <a href="#kitab-pantang" className="free-ebook-link-card" title="Lihat Kandungan E-Book">
                <div className="free-gift-header">
                  <div className="gift-icon-wrapper">
                    <Gift size={20} className="gift-icon-svg" />
                  </div>
                  <div>
                    <h4>HADIAH PERCUMA: KITAB IQA PANTANG MELAYU</h4>
                    <p className="gift-sub">
                      Panduan 44 Hari Berpantang (Lihat Kandungan 9 Bab di bawah ↓)
                    </p>
                  </div>
                </div>
              </a>
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

              {/* Items included list (Interactive: Click to explore details below) */}
              <div className="included-items-container">
                <div className="items-header-row">
                  <h4 className="items-header">
                    <PackageCheck size={18} className="items-header-icon" />
                    <span>Apa yang anda terima? (14 Keperluan Lengkap)</span>
                  </h4>
                  <span className="items-hint-text">
                    (Klik mana-mana item untuk baca khasiat & panduan di bawah ↓)
                  </span>
                </div>

                <div className="included-items-grid">
                  {EXCLUSIVE_SET_ITEMS.map((item, index) => (
                    <button
                      key={index}
                      type="button"
                      className="included-item-pill interactive-item-pill"
                      onClick={() => handleSelectItem(item)}
                      title={`Klik untuk lihat huraian lengkap ${item}`}
                    >
                      <span className="item-number">{index + 1}.</span>
                      <span className="item-title">{item}</span>
                      <span className="pill-arrow-cue">→</span>
                    </button>
                  ))}
                </div>

                <div className="explore-items-footer">
                  <a href="#koleksi-produk" className="explore-items-anchor">
                    <span>Lihat Huraian Lengkap Setiap Ramuan di Bawah</span>
                    <ArrowDown size={14} />
                  </a>
                </div>
              </div>

              {/* Action Buttons (Direct Online Payment via DOKU) */}
              <div className="exclusive-cta-actions">
                <a
                  href={DOKU_PAYMENT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tradisi-gold cta-action-btn cta-doku-btn"
                >
                  <CreditCard size={20} />
                  <span>Bayar Terus Secara Online (RM 349)</span>
                  <ExternalLink size={17} />
                </a>
              </div>

              <div className="exclusive-payment-trust-bar">
                <ShieldCheck size={16} className="trust-shield-icon" />
                <span>
                  Pembayaran selamat & rasmi melalui <strong>Gerbang Pembayaran DOKU</strong> (FPX Online Banking, Kad Kredit & Debit). Resit automatik dihantar ke emel anda.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
