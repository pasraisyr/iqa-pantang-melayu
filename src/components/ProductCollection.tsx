import React, { useEffect, useRef, useState } from 'react';
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Eye,
  Info,
  Leaf,
  Maximize2,
  Package,
  Scale,
  ShoppingBag,
} from 'lucide-react';
import { PRODUCTS } from '../data/pantangData';
import type { Product } from '../types';
import { useCart } from '../context/useCart';
import { ProductModal } from './ProductModal';

export const ProductCollection: React.FC = () => {
  const { addToCart, openCart } = useCart();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const showcaseCardRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);
  const isFirstRender = useRef(true);

  const totalProducts = PRODUCTS.length;
  const currentProduct = PRODUCTS[currentIndex];

  // Center screen smoothly on the showcase card / complete description
  const scrollToCenter = () => {
    if (showcaseCardRef.current) {
      showcaseCardRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalProducts - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalProducts - 1 ? 0 : prev + 1));
  };

  const goToIndex = (index: number, shouldScroll = false) => {
    if (index >= 0 && index < totalProducts) {
      setCurrentIndex(index);
      if (shouldScroll) {
        setTimeout(() => {
          scrollToCenter();
        }, 60);
      }
    }
  };

  // Keyboard navigation (ArrowLeft & ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProduct) return;
      if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedProduct, totalProducts]);

  // Listen to external product selection (e.g. from Exclusive Set items list)
  useEffect(() => {
    const handleSelectById = (e: Event) => {
      const customEvent = e as CustomEvent<{ id: string }>;
      const targetId = customEvent.detail?.id;
      if (targetId) {
        const foundIndex = PRODUCTS.findIndex((p) => p.id === targetId);
        if (foundIndex !== -1) {
          goToIndex(foundIndex, true);
        }
      }
    };

    window.addEventListener('select-product-by-id', handleSelectById);
    return () =>
      window.removeEventListener('select-product-by-id', handleSelectById);
  }, []);

  // Keep active thumbnail in view (only on user interaction, never hijack window scroll on load)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (thumbnailsRef.current) {
      const activeEl = thumbnailsRef.current.querySelector(
        `[data-thumb-index="${currentIndex}"]`
      ) as HTMLElement | null;
      if (activeEl) {
        const container = thumbnailsRef.current;
        const scrollLeft =
          activeEl.offsetLeft -
          container.offsetWidth / 2 +
          activeEl.offsetWidth / 2;
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth',
        });
      }
    }
  }, [currentIndex]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    touchStartX.current = null;
  };

  return (
    <section id="koleksi-produk" className="products-section section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center section-header-box">
          <span className="section-subtitle">
            <Package size={13} className="inline-icon" /> PERSENDAIAN LENGKAP SET PANTANG
          </span>
          <h2 className="section-title">HURAIAN & KHASIAT SETIAP RAMUAN SET PANTANG</h2>
          <div className="ornament-separator">
            <span className="ornament-symbol">❖ ⚜ ❖</span>
          </div>
          <p className="section-intro-text">
            Penerangan terperinci khasiat, ramuan herba alami dan kaedah penggunaan
            setiap satu persediaan tradisi yang terkandung di dalam{' '}
            <strong>Set Pantang Melayu Premium</strong>.
          </p>

          <div className="heritage-guide-notice">
            <Info size={16} className="notice-icon" />
            <span>
              <strong>Panduan Khasiat:</strong> Kesemua ramuan tradisi di
              bawah adalah persediaan lengkap yang terkandung di dalam pakej{' '}
              <a href="#pakej-premium" className="notice-link">
                Set Pantang Melayu Premium (RM 349)
              </a>
              . Bahagian ini disediakan sebagai panduan rujukan khasiat dan bukan untuk belian runcit berasingan.
            </span>
          </div>
        </div>

        {/* Interactive Showcase Carousel (Gambar di Atas & Center, Description di Bawah) */}
        <div
          className="product-showcase-wrapper"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Floating Navigation Arrows */}
          <button
            type="button"
            className="slider-nav-btn slider-nav-prev"
            onClick={() => {
              goToPrev();
              scrollToCenter();
            }}
            aria-label="Ramuan Sebelumnya (Arrow Left)"
            title="Ramuan Sebelumnya"
          >
            <ChevronLeft size={30} />
          </button>

          <button
            type="button"
            className="slider-nav-btn slider-nav-next"
            onClick={() => {
              goToNext();
              scrollToCenter();
            }}
            aria-label="Ramuan Seterusnya (Arrow Right)"
            title="Ramuan Seterusnya"
          >
            <ChevronRight size={30} />
          </button>

          {/* Active Product Showcase Card */}
          <div
            className="product-showcase-card classic-border-box"
            ref={showcaseCardRef}
          >
            {/* Slide Header Toolbar */}
            <div className="showcase-toolbar">
              <div className="toolbar-counter">
                <span className="counter-pill">
                  RAMUAN {String(currentIndex + 1).padStart(2, '0')} / {totalProducts}
                </span>
                <span className="toolbar-category-label">
                  Khazanah Penjagaan Berpantang
                </span>
              </div>

              {/* Mobile / Compact Arrow Controls */}
              <div className="toolbar-actions">
                <button
                  type="button"
                  className="btn-toolbar-nav"
                  onClick={() => {
                    goToPrev();
                    scrollToCenter();
                  }}
                  aria-label="Sebelumnya"
                >
                  <ChevronLeft size={18} />
                </button>
                <span className="toolbar-pagination-text">
                  {currentIndex + 1} / {totalProducts}
                </span>
                <button
                  type="button"
                  className="btn-toolbar-nav"
                  onClick={() => {
                    goToNext();
                    scrollToCenter();
                  }}
                  aria-label="Seterusnya"
                >
                  <ChevronRight size={18} />
                </button>

                <button
                  type="button"
                  className="btn-toolbar-fullscreen"
                  onClick={() => setSelectedProduct(currentProduct)}
                  title="Buka Paparan Penuh"
                >
                  <Maximize2 size={15} />
                  <span className="btn-text-desktop">Paparan Penuh</span>
                </button>
              </div>
            </div>

            {/* Showcase Stacked Layout: GAMBAR DI ATAS & CENTER, DESCRIPTION DI BAWAH */}
            <div className="showcase-layout-stacked">
              {/* TOP: Centered Image Stage (SIZE SEBENAR - 100% TANPA CROP) */}
              <div className="showcase-top-visual">
                <div
                  className="showcase-image-stage-centered"
                  onClick={scrollToCenter}
                  role="button"
                  tabIndex={0}
                  aria-label={`Fokus pada penerangan ${currentProduct.name}`}
                  title="Klik untuk fokus pada huraian lengkap"
                >
                  {/* Actual aspect ratio image container - never cropped! */}
                  <img
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    className="showcase-natural-img"
                    key={currentProduct.id}
                  />

                  {currentProduct.beratBersih && (
                    <div className="showcase-weight-badge">
                      <Scale size={13} className="inline-icon" />
                      <span>{currentProduct.beratBersih}</span>
                    </div>
                  )}

                  <div className="showcase-zoom-hint">
                    <Eye size={14} />
                    <span>Klik Untuk Paparan Terperinci</span>
                  </div>
                </div>

                <p className="showcase-aspect-caption">
                  ❖ Gambar paparan saiz penuh produk sebenar tanpa potongan
                </p>
              </div>

              {/* BOTTOM: Complete Description Under Image */}
              <div className="showcase-bottom-info" ref={descriptionRef}>
                {/* Centered Title & Category */}
                <div className="showcase-header-centered">
                  <div className="showcase-pill-badge">
                    {currentProduct.subtitle || 'Warisan Tradisional'}
                  </div>
                  <h3 className="showcase-product-name">{currentProduct.name}</h3>

                  {currentProduct.price ? (
                    <div className="showcase-price-tag-wrap">
                      <span className="price-tag-pill">
                        Harga: <strong>RM {currentProduct.price}</strong>
                      </span>
                    </div>
                  ) : null}

                  {/* Overview Description */}
                  {currentProduct.description && (
                    <div className="showcase-intro-block-centered">
                      <p className="showcase-intro-text">
                        {currentProduct.description}
                      </p>
                    </div>
                  )}
                </div>

                {/* Split Details Grid: Khasiat & Ramuan (Left), Cara Guna & Peringatan (Right) */}
                <div className="showcase-details-split-grid">
                  {/* Column 1: Khasiat & Ramuan */}
                  <div className="split-grid-col">
                    {/* Khasiat & Manfaat */}
                    {currentProduct.manfaat && currentProduct.manfaat.length > 0 && (
                      <div className="showcase-detail-section">
                        <h4 className="detail-section-title">
                          <span className="title-bullet-gold">❖</span>
                          <span>Khasiat & Manfaat Utama</span>
                        </h4>
                        <ul className="showcase-benefit-list">
                          {currentProduct.manfaat.map((item, idx) => (
                            <li key={idx} className="benefit-item">
                              <span className="benefit-bullet">❖</span>
                              <span className="benefit-text">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Ramuan / Kandungan Alami */}
                    {currentProduct.kandungan && currentProduct.kandungan.length > 0 && (
                      <div className="showcase-detail-section">
                        <h4 className="detail-section-title">
                          <Leaf size={16} className="title-icon-gold" />
                          <span>Ramuan & Herba Terpilih</span>
                        </h4>
                        <div className="showcase-tags-wrap">
                          {currentProduct.kandungan.map((herb, idx) => (
                            <span key={idx} className="herb-tag-pill">
                              {herb}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Column 2: Kaedah Penggunaan & Peringatan */}
                  <div className="split-grid-col">
                    {/* Kaedah Penggunaan */}
                    {currentProduct.kaedahPenggunaan &&
                      currentProduct.kaedahPenggunaan.length > 0 && (
                        <div className="showcase-detail-section">
                          <h4 className="detail-section-title">
                            <CheckCircle2 size={16} className="title-icon-gold" />
                            <span>Kaedah & Petua Penggunaan</span>
                          </h4>
                          <ol className="showcase-steps-list">
                            {currentProduct.kaedahPenggunaan.map((step, idx) => (
                              <li key={idx} className="step-item">
                                <span className="step-index-badge">{idx + 1}</span>
                                <span className="step-text">{step}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}

                    {/* Peringatan / Langkah Keselamatan */}
                    {currentProduct.peringatan && (
                      <div className="showcase-alert-box">
                        <AlertCircle size={17} className="alert-box-icon" />
                        <div className="alert-box-content">
                          <strong className="alert-box-title">Peringatan:</strong>
                          <p className="alert-box-text">{currentProduct.peringatan}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Package Inclusion Callout OR Standalone Purchasable Callout */}
                {currentProduct.price ? (
                  <div className="showcase-package-callout callout-purchasable">
                    <div className="callout-icon-wrap callout-cart-wrap">
                      <ShoppingBag size={22} />
                    </div>
                    <div className="callout-content">
                      <h5 className="callout-heading">
                        Boleh Dibeli Berasingan — RM {currentProduct.price}
                      </h5>
                      <p className="callout-desc">
                        Set lengkap pengurusan uri sedia guna mengikut syariat & adat Melayu.
                      </p>
                    </div>
                    <button
                      type="button"
                      className="btn-tradisi-gold btn-callout-link"
                      onClick={() => {
                        addToCart(currentProduct, 1);
                        openCart();
                      }}
                    >
                      <ShoppingBag size={16} />
                      <span>Tambah Ke Troli (RM {currentProduct.price})</span>
                    </button>
                  </div>
                ) : (
                  <div className="showcase-package-callout">
                    <div className="callout-icon-wrap">
                      <Package size={20} />
                    </div>
                    <div className="callout-content">
                      <h5 className="callout-heading">
                        Sebahagian Daripada Set Pantang Melayu Premium
                      </h5>
                      <p className="callout-desc">
                        Nikmati khasiat 14 persediaan lengkap berserta Percuma
                        E-Buku Kitab IQA Pantang Melayu.
                      </p>
                    </div>
                    <a href="#pakej-premium" className="btn-tradisi-gold btn-callout-link">
                      <span>Lihat Pakej (RM 349)</span>
                      <ArrowRight size={15} />
                    </a>
                  </div>
                )}
              </div>
            </div>


          </div>
        </div>

        {/* Thumbnail Selector Ribbon (Allows quick browsing of all 15 items & centers screen) */}
        <div className="thumbnails-rail-container">
          <div className="thumbnails-rail-header">
            <span className="rail-header-title">
              Pilih Pantas Mana-Mana 15 Ramuan Warisan:
            </span>
            <span className="rail-header-hint">
              (Tekan mana-mana item di bawah untuk melihat gambar & huraian lengkap di tengah skrin)
            </span>
          </div>

          <div className="thumbnails-rail-scroll" ref={thumbnailsRef}>
            {PRODUCTS.map((prod, index) => {
              const isActive = index === currentIndex;
              return (
                <button
                  key={prod.id}
                  type="button"
                  data-thumb-index={index}
                  className={`thumbnail-card-item ${isActive ? 'is-active' : ''}`}
                  onClick={() => goToIndex(index, true)}
                  aria-label={`Pilih ${prod.name}`}
                >
                  <div className="thumb-img-wrapper">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="thumb-natural-img"
                      loading="lazy"
                    />
                    <span className="thumb-number-tag">{index + 1}</span>
                  </div>
                  <div className="thumb-info-text">
                    <span className="thumb-name">{prod.name}</span>
                    {prod.subtitle && (
                      <span className="thumb-sub">{prod.subtitle}</span>
                    )}
                    {prod.price && (
                      <span className="thumb-price-badge">RM {prod.price}</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Product Detail Modal (Without Buy Button) */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};
