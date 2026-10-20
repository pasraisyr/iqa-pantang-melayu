import React, { useEffect, useState } from 'react';
import { BUSINESS_INFO } from '../data/pantangData';
import type { CartItem, OrderFormData, Product } from '../types';
import { CartContext } from './cartTypes';

const CART_STORAGE_KEY = 'iqa_pantang_cart_v1';
const FORM_STORAGE_KEY = 'iqa_pantang_form_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [orderForm, setOrderForm] = useState<OrderFormData>(() => {
    try {
      const saved = localStorage.getItem(FORM_STORAGE_KEY);
      return saved
        ? JSON.parse(saved)
        : { nama: '', alamat: '', telefon: '', catatan: '' };
    } catch {
      return { nama: '', alamat: '', telefon: '', catatan: '' };
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch {
      // storage unavailable
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(orderForm));
    } catch {
      // storage unavailable
    }
  }, [orderForm]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const addToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const updateOrderForm = (fields: Partial<OrderFormData>) => {
    setOrderForm((prev) => ({ ...prev, ...fields }));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = cart.reduce((sum, item) => {
    const itemPrice = item.product.price || 0;
    return sum + itemPrice * item.quantity;
  }, 0);

  const sendWhatsAppOrder = () => {
    if (cart.length === 0) {
      return {
        success: false,
        error:
          'Troli pesanan anda masih kosong. Sila pilih produk terlebih dahulu.',
      };
    }
    if (!orderForm.nama.trim()) {
      return { success: false, error: 'Sila masukkan Nama anda.' };
    }
    if (!orderForm.alamat.trim()) {
      return { success: false, error: 'Sila masukkan Alamat lengkap anda.' };
    }

    const itemsSummary = cart
      .map((item, index) => {
        const priceInfo = item.product.price
          ? ` (RM ${item.product.price} x ${item.quantity} = RM ${item.product.price * item.quantity})`
          : ` x ${item.quantity}`;
        return `${index + 1}. *${item.product.name}*${priceInfo}`;
      })
      .join('\n');

    const totalText =
      totalPrice > 0
        ? `\n*JUMLAH KESELURUHAN:* RM ${totalPrice.toFixed(2)}`
        : '';

    const phoneText = orderForm.telefon?.trim()
      ? `\n*No. Telefon:* ${orderForm.telefon.trim()}`
      : '';

    const catatanText = orderForm.catatan?.trim()
      ? `\n*Catatan Tambahan:* ${orderForm.catatan.trim()}`
      : '';

    const message =
      `Salam Sejahtera Puan Iqa / IQA PANTANG MELAYU,\n\n` +
      `Saya ingin membuat tempahan pesanan seperti maklumat berikut:\n\n` +
      `👤 *MAKLUMAT PELANGGAN*\n` +
      `*Nama:* ${orderForm.nama.trim()}\n` +
      `*Alamat:* ${orderForm.alamat.trim()}` +
      phoneText +
      `\n\n📦 *SENARAI PESANAN*\n` +
      itemsSummary +
      totalText +
      catatanText +
      `\n\nMohon pengesahan tempahan dan butiran pembayaran. Terima kasih.`;

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encoded}`;

    window.open(waUrl, '_blank', 'noopener,noreferrer');
    return { success: true };
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        openCart,
        closeCart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        orderForm,
        updateOrderForm,
        sendWhatsAppOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
