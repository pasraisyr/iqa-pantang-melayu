import React, { useEffect } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Leaf,
  Scale,
  ShoppingBag,
  Sparkles,
} from 'lucide-react';
import { useCart } from '../context/useCart';
import type { Product } from '../types';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
}) => {
  const { addToCart } = useCart();

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

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

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
                    <Sparkles size={15} className="detail-heading-icon" />
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

              {/* Action Button */}
              <div className="modal-actions-bar">
                <button
                  type="button"
                  className="btn-tradisi-gold w-full"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag size={17} />
                  <span>Tambah Ke Troli Pesanan</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
