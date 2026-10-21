import React, { useEffect, useState } from 'react';
import { Award, BookOpen, ChevronRight, Crown, Globe, History, Trophy, UserCheck, X } from 'lucide-react';
import { FOUNDER_ACHIEVEMENTS } from '../data/pantangData';

type FounderModalType = 'biodata' | 'pencapaian' | 'pengalaman' | null;

export const FounderStory: React.FC = () => {
  const [activeModal, setActiveModal] = useState<FounderModalType>(null);

  // Close modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveModal(null);
      }
    };
    if (activeModal) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [activeModal]);

  const renderAchievementIcon = (type: string) => {
    switch (type) {
      case 'crown':
        return <Crown size={18} className="achievement-icon-gold" />;
      case 'globe':
        return <Globe size={18} className="achievement-icon-gold" />;
      case 'award':
        return <Award size={18} className="achievement-icon-gold" />;
      case 'trophy':
        return <Trophy size={18} className="achievement-icon-gold" />;
      default:
        return <Award size={18} className="achievement-icon-gold" />;
    }
  };

  return (
    <section id="kisah-pengasas" className="founder-section section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center section-header-box">
          <span className="section-subtitle">
            <Crown size={13} className="inline-icon" /> DI SEBALIK JENAMA
          </span>
          <h2 className="section-title">KISAH PENGASAS</h2>
          <div className="ornament-separator">
            <span className="ornament-symbol">❖ ⚜ ❖</span>
          </div>
    
        </div>

        {/* Founder Featured Image with Overlay Biodata (AT TOP) */}
        <div className="founder-top-banner-wrapper">
          <div className="founder-portrait-hero-frame">
            <img
              src="/media/gambar_founder.jpg"
              alt="Iqa Helmy - Pengasas IQA Pantang Melayu"
              className="founder-portrait-hero-img"
            />
            
            {/* Overlay Biodata Inside the Image */}
            <div className="founder-image-biodata-overlay">
              <div className="founder-overlay-content">
                <span className="founder-overlay-badge">
               Pengasas IQA Pantang Melayu
                </span>
                <h3 className="founder-overlay-name">IQA HELMY</h3>
                <div className="founder-overlay-divider"></div>
                <ul className="founder-overlay-credentials">
                  <li>• Ibu Dua Cahaya Mata & Usahawan Wanita</li>
                  <li>• Diploma Sains Perubatan</li>
                  <li>• Bersijil Perbidanan Melayu Islam & Kecantikan</li>
                  <li>• SKM Tahap 1 — Perkhidmatan Kecantikan</li>
                  <li>• Bersijil Formulasi Penjagaan Kulit Organik</li>
                  <li>• Ratu Cantik Antarabangsa & Duta Kebudayaan Malaysia</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Intro & Instruction */}
        <div className="founder-middle-intro text-center">
          <p className="founder-intro-quote">
            <strong>IQA PANTANG MELAYU</strong> lahir daripada gabungan
            pengalaman peribadi, latar belakang pendidikan Sains Perubatan
            dan kecintaan mendalam terhadap keindahan warisan penjagaan ibu Melayu.
          </p>
          
        </div>

        {/* 3 Interactive Highlight Cards (MELINTANG 3 BAWAH GAMBAR) */}
        <div className="founder-category-cards-grid">
          {/* Card 1: Biodata */}
          <button
            type="button"
            className="founder-category-card"
            onClick={() => setActiveModal('biodata')}
            title="Klik untuk membaca Biodata & Latar Belakang"
          >
            <div className="founder-card-top">
              <div className="founder-card-icon-box">
                <UserCheck size={22} />
              </div>
              <span className="founder-card-badge">Profil & Pendidikan</span>
            </div>
            <h3 className="founder-card-title">Biodata & Latar Belakang</h3>
            <p className="founder-card-snippet">
              Pendidikan Sains Perubatan, pengalaman perbidanan serta perjalanan keibuan yang memahami keperluan fizikal & emosi ibu berpantang.
            </p>
            <div className="founder-card-action">
              <span>Baca Butiran Penuh</span>
              <ChevronRight size={16} className="card-arrow" />
            </div>
          </button>

          {/* Card 2: Pencapaian & Kejayaan */}
          <button
            type="button"
            className="founder-category-card"
            onClick={() => setActiveModal('pencapaian')}
            title="Klik untuk melihat Pencapaian & Kejayaan"
          >
            <div className="founder-card-top">
              <div className="founder-card-icon-box">
                <Trophy size={22} />
              </div>
              <span className="founder-card-badge">Pengiktirafan Global</span>
            </div>
            <h3 className="founder-card-title">Pencapaian & Kejayaan</h3>
            <p className="founder-card-snippet">
              Gelaran Ratu Cantik Antarabangsa, Duta Kebudayaan & Pelancongan Malaysia serta anugerah wanita berinspirasi peringkat global.
            </p>
            <div className="founder-card-action">
              <span>Lihat Senarai Kejayaan</span>
              <ChevronRight size={16} className="card-arrow" />
            </div>
          </button>

          {/* Card 3: Pengalaman & Inspirasi */}
          <button
            type="button"
            className="founder-category-card"
            onClick={() => setActiveModal('pengalaman')}
            title="Klik untuk membaca Pengalaman & Inspirasi Jenama"
          >
            <div className="founder-card-top">
              <div className="founder-card-icon-box">
                <History size={22} />
              </div>
              <span className="founder-card-badge">Kelahiran Jenama</span>
            </div>
            <h3 className="founder-card-title">Pengalaman & Inspirasi Jenama</h3>
            <p className="founder-card-snippet">
              Bagaimana pengalaman berpantang sendiri mencetuskan penubuhan sebuah jenama moden, elegan dan legasi untuk generasi masa depan.
            </p>
            <div className="founder-card-action">
              <span>Teroka Kisah Inspirasi</span>
              <ChevronRight size={16} className="card-arrow" />
            </div>
          </button>
        </div>

        {/* Founder Quote Banner */}
        <div className="founder-quote-banner text-center">
        
          <blockquote className="founder-quote-text">
            "Kerana bagi beliau, keindahan seorang wanita bukan hanya
            terletak pada mahkota yang pernah disarungkan, tetapi juga pada
            kekuatan, ilmu, kasih sayang dan legasi yang ditinggalkan."
          </blockquote>
        </div>
      </div>

      {/* POPUP MODAL DETAILS */}
      {activeModal && (
        <div
          className="founder-modal-overlay"
          onClick={() => setActiveModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="founder-modal-card classic-border-box"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="founder-modal-header">
              <div className="founder-modal-title-wrap">
                <span className="founder-modal-tag">Kisah Pengasas Iqa Helmy</span>
                <h3 className="founder-modal-title">
                  {activeModal === 'biodata' && 'Biodata & Latar Belakang'}
                  {activeModal === 'pencapaian' && 'Pencapaian & Kejayaan Antarabangsa'}
                  {activeModal === 'pengalaman' && 'Pengalaman & Inspirasi Penubuhan Jenama'}
                </h3>
              </div>
              <button
                type="button"
                className="founder-modal-close-btn"
                onClick={() => setActiveModal(null)}
                aria-label="Tutup"
                title="Tutup (Esc)"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Scroll Content */}
            <div className="founder-modal-body">
              {/* MODAL 1: BIODATA */}
              {activeModal === 'biodata' && (
                <div className="founder-modal-section">
                  <div className="founder-modal-highlight-row">
                    <div className="highlight-icon-circle">
                      <BookOpen size={24} />
                    </div>
                    <div>
                      <h4 className="highlight-title">Iqa Helmy</h4>
                      <p className="highlight-sub">
                        Ibu Dua Cahaya Mata • Usahawan Wanita • Pengasas IQA Pantang Melayu
                      </p>
                    </div>
                  </div>

                  <div className="founder-modal-paragraphs">
                    <p>
                      <strong>IQA PANTANG MELAYU</strong> merupakan sebuah jenama
                      penjagaan ibu selepas bersalin yang diasaskan oleh{' '}
                      <strong>Iqa Helmy</strong>, seorang ibu kepada dua cahaya mata,
                      usahawan wanita, pemegang <em>Diploma in Medical Science</em>,
                      individu yang berpengalaman dalam bidang perbidanan, ratu cantik
                      antarabangsa serta duta kebudayaan Malaysia.
                    </p>
                    <p>
                      Penubuhan jenama ini lahir daripada gabungan pengalaman peribadi,
                      latar belakang pendidikan dan kecintaan mendalam terhadap
                      keindahan warisan penjagaan ibu Melayu.
                    </p>
                    <p>
                      Sebagai seorang ibu yang telah melalui sendiri perjalanan
                      kehamilan, kelahiran dan tempoh berpantang, beliau memahami
                      bahawa fasa selepas bersalin bukan sahaja memerlukan kekuatan
                      fizikal, malah perhatian, sokongan emosi dan penjagaan diri yang
                      sewajarnya.
                    </p>
                    <p>
                      Pengalaman menerima rawatan pantang tradisional Melayu telah
                      memperkenalkan beliau kepada kehalusan amalan penjagaan ibu yang
                      diwarisi sejak turun-temurun. Pengalaman tersebut, bersama
                      pengetahuan daripada pendidikan dalam bidang Sains Perubatan
                      serta pengalaman dalam bidang perbidanan, membentuk minat beliau
                      untuk memahami penjagaan ibu daripada perspektif tradisi dan
                      pengetahuan kesihatan moden.
                    </p>
                    <p>
                      Beliau percaya bahawa warisan penjagaan ibu Melayu mempunyai
                      nilai budaya yang tinggi dan wajar dipelihara, diperkenalkan
                      serta diamalkan secara bertanggungjawab dengan mengambil kira
                      keperluan dan keselamatan ibu masa kini.
                    </p>
                  </div>
                </div>
              )}

              {/* MODAL 2: PENCAPAIAN & KEJAYAAN */}
              {activeModal === 'pencapaian' && (
                <div className="founder-modal-section">
                  <div className="founder-modal-highlight-row">
                    <div className="highlight-icon-circle">
                      <Trophy size={24} />
                    </div>
                    <div>
                      <h4 className="highlight-title">Keanggunan Wanita, Pengiktirafan Antarabangsa</h4>
                      <p className="highlight-sub">
                        Pencapaian dalam dunia kecantikan, peragaan & kebudayaan global
                      </p>
                    </div>
                  </div>

                  <div className="founder-modal-paragraphs">
                    <p>
                      Selain perjalanan dalam bidang keibuan dan kesihatan,{' '}
                      <strong>Nurul Afiqah (Iqa Helmy)</strong> turut menempa nama
                      dalam dunia kecantikan, peragaan, pelancongan dan kebudayaan
                      antarabangsa.
                    </p>
                    <p className="achievement-lead">
                      Antara pencapaian serta pengiktirafan rasmi beliau ialah:
                    </p>
                  </div>

                  <div className="achievement-list-grid modal-achievements-list">
                    {FOUNDER_ACHIEVEMENTS.map((item, idx) => (
                      <div key={idx} className="achievement-item-row modal-achievement-card">
                        <span className="achievement-item-icon">
                          {renderAchievementIcon(item.iconType)}
                        </span>
                        <div className="achievement-item-info">
                          <span className="achievement-title">{item.title}</span>
                          {item.country && (
                            <span className="achievement-country">
                              {' '}
                              — {item.country}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="founder-modal-paragraphs mt-3">
                    <p>
                      Penglibatan beliau dalam dunia kecantikan dan kebudayaan telah
                      memberikan pengalaman serta perspektif yang lebih luas tentang
                      kepentingan identiti, keanggunan dan pemeliharaan warisan bangsa.
                    </p>
                    <p>
                      Di sebalik mahkota, pencapaian dan pengiktirafan, beliau tetap
                      melihat peranan sebagai seorang ibu sebagai antara pengalaman
                      paling bermakna dalam kehidupannya.
                    </p>
                  </div>
                </div>
              )}

              {/* MODAL 3: PENGALAMAN & INSPIRASI */}
              {activeModal === 'pengalaman' && (
                <div className="founder-modal-section">
                  <div className="founder-modal-highlight-row">
                    <div className="highlight-icon-circle">
                      <History size={24} />
                    </div>
                    <div>
                      <h4 className="highlight-title">Daripada Pengalaman, Terciptanya Sebuah Jenama</h4>
                      <p className="highlight-sub">
                        Kisah Inspirasi & Aspirasi Legasi Masa Depan
                      </p>
                    </div>
                  </div>

                  <div className="founder-modal-paragraphs">
                    <p>
                      Gabungan pengalaman keibuan, latar belakang pendidikan Sains
                      Perubatan, pengalaman perbidanan dan penglibatan dalam dunia
                      kebudayaan telah menjadi asas inspirasi penubuhan{' '}
                      <strong>IQA PANTANG MELAYU</strong>.
                    </p>
                    <p>
                      Jenama ini diwujudkan dengan aspirasi untuk mengangkat keindahan
                      tradisi penjagaan ibu Melayu melalui koleksi produk yang
                      dipersembahkan secara moden, elegan dan eksklusif.
                    </p>
                    <p>
                      Setiap koleksi membawa identiti yang diinspirasikan daripada
                      warisan Melayu, dengan penekanan terhadap penghargaan kepada ibu,
                      kualiti produk, ketelusan maklumat dan pengalaman pelanggan.
                    </p>
                    <p>
                      IQA PANTANG MELAYU bukan sekadar sebuah jenama penjagaan
                      berpantang, tetapi juga lambang penghormatan terhadap kekuatan
                      wanita, keindahan keibuan dan warisan bangsa.
                    </p>

                    <h4 className="subheading-classic mt-4">
                      Sebuah Legasi untuk Generasi Akan Datang
                    </h4>
                    <p>
                      Berbekalkan pengalaman, ilmu dan semangat keusahawanan, Nurul
                      Afiqah beraspirasi untuk menjadikan IQA PANTANG MELAYU sebagai
                      jenama penjagaan ibu beridentitikan warisan Melayu yang dikenali
                      di Malaysia serta mampu berkembang ke peringkat antarabangsa.
                    </p>
                    <p>
                      Melalui jenama ini, beliau berharap dapat memperkenalkan nilai
                      budaya penjagaan ibu Melayu kepada generasi baharu, di samping
                      menggalakkan penghargaan terhadap kesejahteraan dan penjagaan
                      diri selepas bersalin.
                    </p>
                  </div>

                  <div className="founder-modal-quote-box">
                    <span className="quote-mark-small">“</span>
                    <p className="quote-modal-text">
                      Kerana bagi beliau, keindahan seorang wanita bukan hanya
                      terletak pada mahkota yang pernah disarungkan, tetapi juga pada
                      kekuatan, ilmu, kasih sayang dan legasi yang ditinggalkan.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="founder-modal-footer">
              <div className="modal-category-switchers">
                <button
                  type="button"
                  className={`btn-modal-tab ${activeModal === 'biodata' ? 'active' : ''}`}
                  onClick={() => setActiveModal('biodata')}
                >
                  Biodata
                </button>
                <button
                  type="button"
                  className={`btn-modal-tab ${activeModal === 'pencapaian' ? 'active' : ''}`}
                  onClick={() => setActiveModal('pencapaian')}
                >
                  Pencapaian
                </button>
                <button
                  type="button"
                  className={`btn-modal-tab ${activeModal === 'pengalaman' ? 'active' : ''}`}
                  onClick={() => setActiveModal('pengalaman')}
                >
                  Pengalaman
                </button>
              </div>

              <button
                type="button"
                className="btn-tradisi-outline btn-sm"
                onClick={() => setActiveModal(null)}
              >
                <span>Tutup Paparan</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
