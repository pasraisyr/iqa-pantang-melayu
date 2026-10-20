import { createContext } from 'react';
import type { CartItem, OrderFormData, Product } from '../types';

export interface CartContextType {
  cart: CartItem[];
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  orderForm: OrderFormData;
  updateOrderForm: (fields: Partial<OrderFormData>) => void;
  sendWhatsAppOrder: () => { success: boolean; error?: string };
}

export const CartContext = createContext<CartContextType | undefined>(undefined);
