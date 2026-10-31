import React from 'react';
import './App.css';
import { CartDrawer } from './components/CartDrawer';
import { ClosingCta } from './components/ClosingCta';
import { CompanyProfile } from './components/CompanyProfile';
import { ExclusiveSet } from './components/ExclusiveSet';
import { FaqSection } from './components/FaqSection';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { KasihBonda } from './components/KasihBonda';
import { FounderStory } from './components/FounderStory';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Navbar } from './components/Navbar';
import { ProductCollection } from './components/ProductCollection';
import { EbookSection } from './components/EbookSection';
import { VisionMission } from './components/VisionMission';
import { Footer } from './components/Footer';
import { CartProvider } from './context/CartContext';

export const App: React.FC = () => {
  React.useEffect(() => {
    // If user refreshes or loads page without a specific anchor, stay at Hero at top
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <CartProvider>
      <div className="site-wrapper">
        <Navbar />
        <main>
          <Hero />
          {/* 1. Pengenalan */}
          <Introduction />
          {/* 2. Keistimewaan Iqa Pantang Melayu */}
          <Features />
          {/* 3. Set Pantang Premium RM349 */}
          <ExclusiveSet />
          {/* 4. Senarai 15 Produk & Huraian Khasiat */}
          <ProductCollection />
          {/* 5. Hadiah E-Book Percuma */}
          <EbookSection />
          {/* 6. Kisah Pengasas */}
          <FounderStory />
          {/* 7. Visi Misi Falsafah */}
          <VisionMission />
          {/* Bahagian Tambahan / Sedia Ada */}
          <Testimonials />
          <KasihBonda />
          <FaqSection />
          <ClosingCta />
          <CompanyProfile />
        </main>
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
};

export default App;
