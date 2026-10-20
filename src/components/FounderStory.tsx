import React from 'react';
import { Award, Crown, Globe, Sparkles, Trophy } from 'lucide-react';
import { FOUNDER_ACHIEVEMENTS } from '../data/pantangData';

export const FounderStory: React.FC = () => {
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
        return <Sparkles size={18} className="achievement-icon-gold" />;
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
          <h2 className="section-title">KISAH PENGASAS (OUR STORY)</h2>
          <div className="ornament-separator">
            <span className="ornament-symbol">❖ ⚜ ❖</span>
          </div>
        </div>

        {/* Founder Profile Card */}
        <div className="founder-grid-layout">
          {/* Left Column: Image & Credentials */}
          <div className="founder-media-col">
            <div className="founder-portrait-frame">
              <img
                src="/media/gambar_founder.jpg"
                alt="Gambar Pengasas - Iqa Helmy"
                className="founder-portrait-img"
              />
              <div className="portrait-gold-trim"></div>
            </div>

            <div className="founder-caption-box">
              <h3 className="founder-name">Nurul Afiqah (Iqa Helmy)</h3>
              <p className="founder-title-badge">Pengasas IQA PANTANG MELAYU</p>
              <ul className="founder-quick-credentials">
                <li>• Ibu kepada dua cahaya mata</li>
                <li>• Usahawan Wanita Malaysia</li>
                <li>• Diploma in Medical Science</li>
                <li>• Berpengalaman dalam Bidang Perbidanan</li>
                <li>• Ratu Cantik Antarabangsa & Duta Kebudayaan</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Founder Narrative & Achievements */}
          <div className="founder-text-col">
            <div className="narrative-block">
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

            {/* Pencapaian Antarabangsa */}
            <div className="achievements-section-card">
              <h3 className="subheading-classic">
                Keanggunan Wanita, Pengiktirafan Antarabangsa
              </h3>
              <p className="achievement-subtext">
                Selain perjalanan dalam bidang keibuan dan kesihatan,{' '}
                <strong>Nurul Afiqah (Iqa Helmy)</strong> turut menempa nama
                dalam dunia kecantikan, peragaan, pelancongan dan kebudayaan
                antarabangsa.
              </p>
              <p className="achievement-lead">
                Antara pencapaian serta pengiktirafan beliau ialah:
              </p>

              <div className="achievement-list-grid">
                {FOUNDER_ACHIEVEMENTS.map((item, idx) => (
                  <div key={idx} className="achievement-item-row">
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

              <p className="mt-3">
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

            {/* Daripada Pengalaman, Terciptanya Sebuah Jenama */}
            <div className="narrative-block mt-4">
              <h3 className="subheading-classic">
                Daripada Pengalaman, Terciptanya Sebuah Jenama
              </h3>
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
            </div>

            {/* Sebuah Legasi untuk Generasi Akan Datang */}
            <div className="narrative-block mt-4">
              <h3 className="subheading-classic">
                Sebuah Legasi untuk Generasi Akan Datang
              </h3>
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

            {/* Founder Quote */}
            <div className="founder-quote-banner">
              <span className="quote-mark">“</span>
              <blockquote className="founder-quote-text">
                Kerana bagi beliau, keindahan seorang wanita bukan hanya
                terletak pada mahkota yang pernah disarungkan, tetapi juga pada
                kekuatan, ilmu, kasih sayang dan legasi yang ditinggalkan.
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
