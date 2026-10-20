import React, { useState } from 'react';
import { Eye, Package, Plus } from 'lucide-react';
import { useCart } from '../context/useCart';
import { PRODUCTS } from '../data/pantangData';
import type { Product } from '../types';
import { ProductModal } from './ProductModal';

export const ProductCollection: React.FC = () => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section id="koleksi-produk" className="products-section section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center section-header-box">
          <span className="section-subtitle">
            <Package size={13} className="inline-icon" /> WARISAN 15 RAMUAN ALAMI
          </span>
          <h2 className="section-title">KOLEKSI PRODUK WARISAN</h2>
          <div className="ornament-separator">
            <span className="ornament-symbol">❖ ⚜ ❖</span>
          </div>
          <p className="section-intro-text">
            Himpunan persediaan tradisional Melayu yang diadun rapi daripada
            rempah-ratus pilihan dan khazanah alam untuk pemulihan rahim, tenaga
            dan ketenangan ibu serta si manja.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="products-grid">
          {PRODUCTS.map((prod, index) => (
            <article key={prod.id} className="product-card classic-border-box">
              <div
                className="product-card-media"
                onClick={() => setSelectedProduct(prod)}
                role="button"
                tabIndex={0}
                aria-label={`Lihat butiran ${prod.name}`}
              >
                <span className="product-index-badge">{index + 1}</span>
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="product-card-img"
                  loading="lazy"
                />
                {prod.beratBersih && (
                  <span className="product-weight-tag">{prod.beratBersih}</span>
                )}
              </div>

              <div className="product-card-body">
                <div className="product-title-group">
                  <h3
                    className="product-title"
                    onClick={() => setSelectedProduct(prod)}
                  >
                    {prod.name}
                  </h3>
                  {prod.subtitle && (
                    <span className="product-subtitle">{prod.subtitle}</span>
                  )}
                </div>

                {prod.description && (
                  <p className="product-short-desc">{prod.description}</p>
                )}

                <div className="product-card-actions">
                  <button
                    type="button"
                    className="btn-card-details"
                    onClick={() => setSelectedProduct(prod)}
                  >
                    <Eye size={14} />
                    <span>Butiran Penuh</span>
                  </button>
                  <button
                    type="button"
                    className="btn-card-add"
                    onClick={() => addToCart(prod, 1)}
                  >
                    <Plus size={14} />
                    <span>Tambah</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};
