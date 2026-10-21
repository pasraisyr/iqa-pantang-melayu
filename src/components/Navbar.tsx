import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/useCart';

export const Navbar: React.FC = () => {
  const { totalItems, openCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header royal-palace-nav">
      {/* Garis Hiasan Atas */}
      <div className="nav-top-gold-bar" />

      <div className="royal-nav-container">
        <div className="royal-nav-inner">
          {/* Logo & Identiti */}
          <a href="#" className="brand-logo-group">
            <div className="royal-logo-outer-ring">
              <img
                src="/media/logo.jpg"
                alt="IQA Pantang Melayu"
                className="brand-logo-img"
              />
            </div>
            <div>
              <h1 className="brand-title">Iqa Pantang Melayu</h1>
              <p className="brand-subtitle">Warisan Penjagaan Ibu Diraja</p>
            </div>
          </a>

          {/* Navigasi Utama */}
          <nav className="desktop-nav royal-nav-links">
            <a href="#pengenalan" className="nav-link-item">
              Pengenalan
            </a>
            <span className="nav-separator">❖</span>

            <a href="#kisah-pengasas" className="nav-link-item">
              Kisah Pengasas
            </a>
            <span className="nav-separator">❖</span>

            <a
              href="#pakej-premium"
              className="nav-link-item nav-link-premium"
            >
              Pakej Premium
            </a>
            <span className="nav-separator">❖</span>

            <a href="#koleksi-produk" className="nav-link-item">
              Koleksi Warisan
            </a>
            <span className="nav-separator">❖</span>

            <a href="#kitab-pantang" className="nav-link-item">
              Kitab E-Book
            </a>
            <span className="nav-separator">❖</span>

            <a href="#kasih-bonda" className="nav-link-item">
              Kasih Bonda
            </a>
            <span className="nav-separator">❖</span>
            
            <a href="#faq" className="nav-link-item">
              Soalan Lazim
            </a>
          </nav>

          {/* Butang Troli & CTA */}
          <div className="nav-actions">
            <button
              type="button"
              onClick={openCart}
              className="royal-cart-btn"
              aria-label="Troli Pesanan"
              title="Troli Pesanan"
            >
              <ShoppingCart size={19} />
              {totalItems > 0 && (
                <span className="royal-cart-badge">{totalItems}</span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Garis Sempadan Bawah */}
      <div className="nav-bottom-gold-bar" />

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-dropdown-menu">
          <nav className="mobile-nav-list">
            <a
              href="#pengenalan"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pengenalan
            </a>
            <a
              href="#kisah-pengasas"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kisah Pengasas
            </a>
            <a
              href="#pakej-premium"
              className="mobile-nav-link nav-link-premium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pakej Premium (RM349)
            </a>
            <a
              href="#koleksi-produk"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Koleksi Warisan
            </a>
            <a
              href="#kitab-pantang"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kitab E-Book
            </a>
            <a
              href="#kasih-bonda"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Kasih Bonda
            </a>
            <a
              href="#faq"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              Soalan Lazim
            </a>

            <button
              type="button"
              className="btn-tradisi-gold mobile-cart-cta"
              onClick={() => {
                setMobileMenuOpen(false);
                openCart();
              }}
            >
              <ShoppingCart size={18} /> Tempah Sekarang ({totalItems})
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
