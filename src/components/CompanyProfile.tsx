import React from 'react';
import { Building2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/pantangData';

export const CompanyProfile: React.FC = () => {
  return (
    <section id="profil-syarikat" className="company-section section-padding">
      <div className="section-container">
        <div className="text-center section-header-box">
          <span className="section-subtitle">
            <Building2 size={13} className="inline-icon" /> SYARIKAT & LEGASI
          </span>
          <h2 className="section-title">PROFIL SYARIKAT</h2>
          <div className="ornament-separator">
            <span className="ornament-symbol">❖ ⚜ ❖</span>
          </div>
        </div>

        <div className="company-grid">
          {/* Left: Naratif Syarikat */}
          <div className="company-narrative-card classic-border-box">
            <h3 className="company-brand-name">IQA PRESTIGE GLOBAL</h3>
            <p className="company-p">
              <strong>IQA PRESTIGE GLOBAL</strong> merupakan sebuah perniagaan
              milik usahawan wanita Malaysia, <strong>Iqa Helmy</strong>, yang
              berteraskan keunggulan, inovasi dan kecemerlangan dalam membangunkan
              jenama tempatan bertaraf premium.
            </p>
            <p className="company-p">
              Menerusi jenama eksklusif <strong>IQA PANTANG MELAYU</strong>, kami
              beraspirasi memartabatkan keindahan warisan penjagaan ibu Melayu
              melalui gabungan tradisi, pengetahuan moden dan sentuhan
              kemewahan yang elegan.
            </p>
            <p className="company-p">
              Berlandaskan komitmen terhadap kualiti dan kepercayaan pelanggan,
              IQA PRESTIGE GLOBAL bertekad membina legasi perniagaan yang
              berprestij serta berdaya saing di persada antarabangsa.
            </p>
          </div>

          {/* Right: Maklumat Perniagaan Table / List */}
          <div className="company-info-card classic-border-box">
            <h3 className="company-info-heading">MAKLUMAT PERNIAGAAN</h3>
            <div className="business-details-list">
              <div className="business-row">
                <span className="detail-label">Nama Berdaftar:</span>
                <span className="detail-value">{BUSINESS_INFO.namaBerdaftar}</span>
              </div>
              <div className="business-row">
                <span className="detail-label">Jenama:</span>
                <span className="detail-value">{BUSINESS_INFO.jenama}</span>
              </div>
              <div className="business-row">
                <span className="detail-label">Pengasas:</span>
                <span className="detail-value">{BUSINESS_INFO.pengasas}</span>
              </div>
              <div className="business-row">
                <span className="detail-label">Tahun Penubuhan:</span>
                <span className="detail-value">{BUSINESS_INFO.tahunPenubuhan}</span>
              </div>
              <div className="business-row">
                <span className="detail-label">Jenis Perniagaan:</span>
                <span className="detail-value">{BUSINESS_INFO.jenisPerniagaan}</span>
              </div>
              <div className="business-row">
                <span className="detail-label">No. Pendaftaran SSM:</span>
                <span className="detail-value ssm-highlight">
                  {BUSINESS_INFO.noPendaftaranSSM}
                </span>
              </div>
              <div className="business-row">
                <span className="detail-label">Negara:</span>
                <span className="detail-value">{BUSINESS_INFO.negara}</span>
              </div>
              <div className="business-row">
                <span className="detail-label">E-mel Rasmi:</span>
                <a
                  href={`mailto:${BUSINESS_INFO.emelRasmi}`}
                  className="detail-value link-style"
                >
                  {BUSINESS_INFO.emelRasmi}
                </a>
              </div>
              <div className="business-row">
                <span className="detail-label">Nombor Perhubungan:</span>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="detail-value link-style"
                >
                  {BUSINESS_INFO.nomborPerhubungan}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
