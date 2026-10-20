import React from 'react';


export const Introduction: React.FC = () => {
  return (
    <section id="pengenalan" className="intro-section section-padding">
      <div className="section-container">
        <div className="intro-card-inner">
          <div className="intro-header text-center">
            <span className="section-subtitle">
              PENGHORMATAN BUAT IBU
            </span>
            <h2 className="section-title">UTAMA & PENGENALAN</h2>
            <div className="ornament-separator">
              <span className="ornament-symbol">❖ ⚜ ❖</span>
            </div>
          </div>

          <div className="intro-body-text">
            <p className="intro-highlight-paragraph">
              <strong>IQA PANTANG MELAYU</strong> merupakan jenama penjagaan ibu
              selepas bersalin yang mengangkat keindahan warisan Melayu
              turun-temurun. Menggabungkan tradisi dengan sentuhan moden yang
              eksklusif, kami mempersembahkan koleksi penjagaan berpantang yang
              istimewa, sebagai lambang kasih, kelembutan dan penghargaan buat
              setiap ibu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
