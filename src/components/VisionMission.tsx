import React from 'react';
import { Scroll } from 'lucide-react';

export const VisionMission: React.FC = () => {
  return (
    <section className="vision-mission-section section-padding">
      <div className="section-container">
        <div className="text-center section-header-box">
          <span className="section-subtitle">
            <Scroll size={13} className="inline-icon" /> TERAS PEGANGAN
          </span>
          <h2 className="section-title">VISI, MISI & FALSAFAH</h2>
          <div className="ornament-separator">
            <span className="ornament-symbol">❖ ⚜ ❖</span>
          </div>
        </div>

        <div className="vision-cards-grid">
          {/* Visi */}
          <div className="vision-card">
          
            <h3 className="card-heading">VISI KAMI</h3>
            <p className="card-content-text">
              Memartabatkan kehalusan warisan penjagaan ibu Melayu sebagai
              lambang keanggunan, kemewahan dan keunggulan yang diiktiraf di
              persada antarabangsa.
            </p>
          </div>

          {/* Misi */}
          <div className="vision-card">
            
            <h3 className="card-heading">MISI KAMI</h3>
            <p className="card-content-text">
              Mengabadikan keindahan tradisi pantang Melayu melalui koleksi
              penjagaan ibu yang eksklusif, mengharmonikan kebijaksanaan warisan
              dengan pengetahuan moden serta menyantuni setiap ibu dengan penuh
              penghormatan dan keistimewaan.
            </p>
          </div>

          {/* Falsafah */}
          <div className="vision-card philosophy-card">
          
            <h3 className="card-heading">FALSAFAH KAMI</h3>
            <blockquote className="philosophy-quote">
              “Setiap ibu memiliki keagungan tersendiri. Setiap pengorbanan
              wajar dimuliakan, setiap kasih layak dihargai, dan setiap wanita
              berhak disantuni bak seorang permaisuri.”
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
