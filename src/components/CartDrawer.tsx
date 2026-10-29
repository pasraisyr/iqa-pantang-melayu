import React, { useState } from 'react';
import {
  AlertCircle,
  MessageSquare,
  Plus,
  ShieldCheck,
  ShoppingBag,
} from 'lucide-react';
import { useCart } from '../context/useCart';
import { EXCLUSIVE_SET, SET_TEMBIKAR_SRI_BONDA } from '../data/pantangData';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
    orderForm,
    updateOrderForm,
    sendWhatsAppOrder,
    addToCart,
  } = useCart();

  const [formError, setFormError] = useState<string | null>(null);

  if (!isCartOpen) return null;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const result = sendWhatsAppOrder();
    if (!result.success && result.error) {
      setFormError(result.error);
    }
  };

  return (
    <div className="cart-backdrop" onClick={closeCart}>
      <aside
        className="cart-drawer-panel"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Troli Pesanan IQA Pantang Melayu"
      >
        {/* Cart Header */}
        <div className="cart-header">
          <div className="cart-header-title">
            <ShoppingBag size={20} className="cart-header-icon-svg" />
            <div>
              <h3>Troli & Borang Pesanan</h3>
              <p className="cart-header-subtitle">IQA PANTANG MELAYU</p>
            </div>
          </div>
          <button
            type="button"
            className="cart-close-btn"
            onClick={closeCart}
            aria-label="Tutup troli"
          >
            ✕
          </button>
        </div>

        {/* Cart Body */}
        <div className="cart-body-scroll">
          {cart.length === 0 ? (
            <div className="empty-cart-view">
              <div className="empty-cart-icon-wrapper">
                <ShoppingBag size={48} className="empty-cart-icon-svg" />
              </div>
              <h4>Troli Anda Masih Kosong</h4>
              <p>
                Sila pilih koleksi pantang atau mana-mana produk warisan kami
                untuk dimasukkan ke dalam pesanan anda.
              </p>
              <div className="empty-cart-buttons-group">
                <button
                  type="button"
                  className="btn-tradisi-gold mt-3 w-full"
                  onClick={() => {
                    addToCart(EXCLUSIVE_SET, 1);
                  }}
                >
                  <Plus size={16} />
                  <span>Tambah Set Pantang Premium (RM 349)</span>
                </button>
                <button
                  type="button"
                  className="btn-tradisi-outline mt-2 w-full"
                  onClick={() => {
                    addToCart(SET_TEMBIKAR_SRI_BONDA, 1);
                  }}
                >
                  <Plus size={16} />
                  <span>Tambah Set Pengurusan Uri (RM 79)</span>
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Product list */}
              <div className="cart-items-section">
                <h4 className="cart-section-title">
                  Senarai Item ({totalItems})
                </h4>
                <div className="cart-items-list">
                  {cart.map((item) => (
                    <div key={item.product.id} className="cart-item-row">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="cart-item-thumbnail"
                      />
                      <div className="cart-item-details">
                        <span className="cart-item-name">
                          {item.product.name}
                        </span>
                        {item.product.subtitle && (
                          <span className="cart-item-sub">
                            {item.product.subtitle}
                          </span>
                        )}
                        {item.product.price ? (
                          <span className="cart-item-price">
                            RM {item.product.price} × {item.quantity} = RM{' '}
                            {item.product.price * item.quantity}
                          </span>
                        ) : (
                          <span className="cart-item-price-custom">
                            Koleksi Warisan (Kuantiti: {item.quantity})
                          </span>
                        )}

                        {/* Quantity Controls */}
                        <div className="cart-qty-controls">
                          <button
                            type="button"
                            className="qty-btn"
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity - 1
                              )
                            }
                            aria-label="Kurangkan kuantiti"
                          >
                            −
                          </button>
                          <span className="qty-number">{item.quantity}</span>
                          <button
                            type="button"
                            className="qty-btn"
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.quantity + 1
                              )
                            }
                            aria-label="Tambah kuantiti"
                          >
                            +
                          </button>
                          <button
                            type="button"
                            className="cart-remove-link"
                            onClick={() => removeFromCart(item.product.id)}
                          >
                            Buang
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Addon suggestion if Tembikar not in cart */}
                {!cart.some((item) => item.product.id === 'set-tembikar-sri-bonda') && (
                  <div className="cart-addon-recommendation">
                    <div className="addon-rec-header">
                      <span className="addon-badge">Cadangan Tambahan</span>
                      <strong className="addon-title">Set Pengurusan Uri</strong>
                    </div>
                    <div className="addon-rec-content">
                      <img
                        src={SET_TEMBIKAR_SRI_BONDA.image}
                        alt={SET_TEMBIKAR_SRI_BONDA.name}
                        className="addon-rec-img"
                      />
                      <div className="addon-rec-details">
                        <span className="addon-rec-name">Tembikar Sri Bonda</span>
                        <span className="addon-rec-price">RM 79</span>
                      </div>
                      <button
                        type="button"
                        className="btn-addon-add"
                        onClick={() => addToCart(SET_TEMBIKAR_SRI_BONDA, 1)}
                        title="Tambah Set Pengurusan Uri ke troli"
                      >
                        <Plus size={14} />
                        <span>Tambah</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Order Form */}
              <div className="cart-form-section">
                <h4 className="cart-section-title">
                  Maklumat Penghantaran & Pembeli
                </h4>
                <form id="orderForm" onSubmit={handleSubmitOrder}>
                  {formError && (
                    <div className="form-error-alert" role="alert">
                      <AlertCircle size={16} className="inline-icon" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div className="form-group">
                    <label htmlFor="customerName" className="form-label">
                      Nama Penuh <span className="text-required">*</span>
                    </label>
                    <input
                      id="customerName"
                      type="text"
                      required
                      placeholder="cth: Puan Siti Zubaidah"
                      className="form-input"
                      value={orderForm.nama}
                      onChange={(e) =>
                        updateOrderForm({ nama: e.target.value })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="customerAddress" className="form-label">
                      Alamat Penghantaran Lengkap{' '}
                      <span className="text-required">*</span>
                    </label>
                    <textarea
                      id="customerAddress"
                      required
                      rows={3}
                      placeholder="cth: No 12, Jalan Warisan 3, Taman Melayu Raya, 50480 Kuala Lumpur"
                      className="form-textarea"
                      value={orderForm.alamat}
                      onChange={(e) =>
                        updateOrderForm({ alamat: e.target.value })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="customerPhone" className="form-label">
                      No. Telefon (Pilihan)
                    </label>
                    <input
                      id="customerPhone"
                      type="tel"
                      placeholder="cth: 019-1234567"
                      className="form-input"
                      value={orderForm.telefon || ''}
                      onChange={(e) =>
                        updateOrderForm({ telefon: e.target.value })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="customerNotes" className="form-label">
                      Catatan / Tarikh Dijangka Bersalin (Pilihan)
                    </label>
                    <input
                      id="customerNotes"
                      type="text"
                      placeholder="cth: Dijangka bersalin bulan depan / nota tambahan"
                      className="form-input"
                      value={orderForm.catatan || ''}
                      onChange={(e) =>
                        updateOrderForm({ catatan: e.target.value })
                      }
                    />
                  </div>
                </form>
              </div>
            </>
          )}
        </div>

        {/* Cart Footer */}
        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total-bar">
              <span className="total-label">Jumlah Anggaran:</span>
              <span className="total-price">
                {totalPrice > 0 ? `RM ${totalPrice.toFixed(2)}` : 'Atas Pesanan'}
              </span>
            </div>

            <button
              type="submit"
              form="orderForm"
              className="btn-tradisi-gold w-full cart-checkout-btn"
            >
              <MessageSquare size={18} />
              <span>HANTAR PESANAN KE WHATSAPP</span>
            </button>
            <p className="cart-secure-note">
              <ShieldCheck size={13} className="inline-icon" /> Butiran
              pesanan, nama dan alamat akan dihantar secara langsung ke talian
              WhatsApp rasmi IQA PANTANG MELAYU.
            </p>
          </div>
        )}
      </aside>
    </div>
  );
};
