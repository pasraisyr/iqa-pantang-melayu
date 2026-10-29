import React from 'react';
import { BUSINESS_INFO } from '../data/pantangData';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="section-container footer-content-grid">
        {/* Brand Column */}
        <div className="footer-col brand-col">
          <div className="footer-brand-header">
            <img
              src="/media/logo.jpg"
              alt="Logo IQA Pantang Melayu"
              className="footer-logo-img"
            />
            <div>
              <h4 className="footer-brand-title">IQA PANTANG MELAYU</h4>
              <p className="footer-brand-sub">IQA PRESTIGE GLOBAL</p>
            </div>
          </div>
          <p className="footer-slogan">
            <em>Ritual Nusantara Mewah Tradisi Lama, Pemulihan Ibu Modern</em>
          </p>
          <p className="footer-legal-notice">
            No. Pendaftaran SSM: {BUSINESS_INFO.noPendaftaranSSM}
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4 className="footer-col-title">Navigasi Pantas</h4>
          <ul className="footer-links-list">
            <li>
              <a href="#pengenalan">Utama & Pengenalan</a>
            </li>
            <li>
              <a href="#kisah-pengasas">Kisah Pengasas (Iqa Helmy)</a>
            </li>
            <li>
              <a href="#pakej-premium">Set Pantang Melayu Premium</a>
            </li>
            <li>
              <a href="#koleksi-produk">15 Koleksi Produk Warisan</a>
            </li>
            <li>
              <a href="#keistimewaan">Keistimewaan Koleksi</a>
            </li>
            <li>
              <a href="#kata-pelanggan">Apa Kata Pelanggan</a>
            </li>
            <li>
              <a href="#kasih-bonda">Inisiatif Kasih Bonda</a>
            </li>
            <li>
              <a href="#faq">Soalan Lazim (FAQ)</a>
            </li>
            <li>
              <a href="#profil-syarikat">Profil Syarikat</a>
            </li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-col">
          <h4 className="footer-col-title">Hubungi Kami</h4>
          <p className="footer-contact-item">
            <strong>Nombor WhatsApp:</strong>
            <br />
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-link"
            >
              {BUSINESS_INFO.nomborPerhubungan}
            </a>
          </p>
          <p className="footer-contact-item">
            <strong>E-mel Rasmi:</strong>
            <br />
            <a
              href={`mailto:${BUSINESS_INFO.emelRasmi}`}
              className="footer-contact-link"
            >
              {BUSINESS_INFO.emelRasmi}
            </a>
          </p>
          <p className="footer-contact-item">
            <strong>Negara:</strong>
            <br />
            {BUSINESS_INFO.negara}
          </p>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="section-container footer-bottom-container">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.namaBerdaftar} (
            {BUSINESS_INFO.jenama}). Hak Cipta Terpelihara.
          </p>
          <p className="footer-subtext">
            Warisan Tradisi Melayu Turun-Temurun Buat Setiap Permaisuri.
          </p>
        </div>
      </div>
    </footer>
  );
};
