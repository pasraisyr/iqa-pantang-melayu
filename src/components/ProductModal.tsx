import React, { useEffect } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Leaf,
  Scale,
  ShoppingBag,
} from 'lucide-react';
import type { Product } from '../types';
import { useCart } from '../context/useCart';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
}) => {
  const { addToCart, openCart } = useCart();
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        className="modal-container classic-border-box"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Tutup Paparan"
        >
          ✕
        </button>

        <div className="modal-scroll-area">
          <div className="modal-product-grid">
            {/* Image Column */}
            <div className="modal-img-col">
              <div className="modal-img-frame">
                <img
                  src={product.image}
                  alt={product.name}
                  className="modal-product-img"
                />
              </div>
              {product.beratBersih && (
                <div className="modal-weight-badge">
                  <Scale size={14} className="inline-icon" />
                  <span>Berat Bersih: {product.beratBersih}</span>
                </div>
              )}
            </div>

            {/* Details Column */}
            <div className="modal-content-col">
              <span className="modal-product-category">
                Koleksi Produk Warisan
              </span>
              <h3 id="modal-product-title" className="modal-product-title">
                {product.name}
              </h3>
              {product.subtitle && (
                <p className="modal-product-subtitle">{product.subtitle}</p>
              )}

              {product.price && (
                <div className="modal-price-tag-wrap">
                  <span className="modal-price-pill">
                    Harga: <strong>RM {product.price}</strong>
                  </span>
                </div>
              )}

              {product.description && (
                <p className="modal-description">{product.description}</p>
              )}

              {/* Kandungan */}
              {product.kandungan && product.kandungan.length > 0 && (
                <div className="modal-detail-block">
                  <h4 className="detail-block-title">
                    <Leaf size={15} className="detail-heading-icon" />
                    <span>Kandungan:</span>
                  </h4>
                  <ul className="modal-bullet-list">
                    {product.kandungan.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Manfaat */}
              {product.manfaat && product.manfaat.length > 0 && (
                <div className="modal-detail-block">
                  <h4 className="detail-block-title">
                    <span className="ornament-tiny">❖</span>
                    <span>Manfaat:</span>
                  </h4>
                  <ul className="modal-bullet-list">
                    {product.manfaat.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Kaedah Penggunaan */}
              {product.kaedahPenggunaan && product.kaedahPenggunaan.length > 0 && (
                <div className="modal-detail-block">
                  <h4 className="detail-block-title">
                    <CheckCircle2 size={15} className="detail-heading-icon" />
                    <span>Kaedah Penggunaan:</span>
                  </h4>
                  <ol className="modal-numbered-list">
                    {product.kaedahPenggunaan.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Peringatan */}
              {product.peringatan && (
                <div className="modal-alert-box">
                  <AlertCircle size={16} className="alert-icon-svg" />
                  <div>
                    <strong>Peringatan:</strong> {product.peringatan}
                  </div>
                </div>
              )}

              {/* Standalone Buy Button or Informational Package Note */}
              {product.price ? (
                <div className="modal-info-footer-box modal-buy-footer-box">
                  <div className="modal-info-footer-text">
                    <span className="ornament-tiny">❖</span>
                    <p>
                      Boleh dibeli berasingan:{' '}
                      <strong className="modal-price-highlight">RM {product.price}</strong>
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      addToCart(product, 1);
                      onClose();
                      openCart();
                    }}
                    className="btn-tradisi-gold btn-modal-nav"
                  >
                    <ShoppingBag size={16} />
                    <span>Tambah Ke Troli (RM {product.price})</span>
                  </button>
                </div>
              ) : (
                <div className="modal-info-footer-box">
                  <div className="modal-info-footer-text">
                    <span className="ornament-tiny">❖</span>
                    <p>
                      Ramuan ini disediakan khusus sebagai komponen dalam{' '}
                      <strong>Set Pantang Melayu Premium (RM 349)</strong>.
                    </p>
                  </div>
                  <a
                    href="#pakej-premium"
                    onClick={onClose}
                    className="btn-tradisi-gold btn-modal-nav"
                  >
                    Lihat Pakej Lengkap Di Atas
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
