export interface Product {
  id: string;
  name: string;
  subtitle?: string;
  image: string;
  description?: string;
  kandungan?: string[];
  manfaat?: string[];
  kaedahPenggunaan?: string[];
  peringatan?: string;
  beratBersih?: string;
  price?: number;
  isSet?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Achievement {
  iconType: 'crown' | 'globe' | 'award' | 'sparkles' | 'trophy';
  title: string;
  country?: string;
}

export interface FeatureItem {
  iconType: 'shield' | 'crown' | 'gift' | 'book' | 'heart';
  title: string;
  desc: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BusinessInfo {
  namaBerdaftar: string;
  jenama: string;
  pengasas: string;
  tahunPenubuhan: string;
  jenisPerniagaan: string;
  noPendaftaranSSM: string;
  negara: string;
  emelRasmi: string;
  nomborPerhubungan: string;
  whatsappNumber: string;
}

export interface OrderFormData {
  nama: string;
  alamat: string;
  telefon?: string;
  catatan?: string;
}
