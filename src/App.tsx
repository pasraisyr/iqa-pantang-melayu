import React from 'react';
import './App.css';
import { CartDrawer } from './components/CartDrawer';
import { ClosingCta } from './components/ClosingCta';
import { CompanyProfile } from './components/CompanyProfile';
import { ExclusiveSet } from './components/ExclusiveSet';
import { FaqSection } from './components/FaqSection';
import { Features } from './components/Features';
import { FounderStory } from './components/FounderStory';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Navbar } from './components/Navbar';
import { ProductCollection } from './components/ProductCollection';
import { VisionMission } from './components/VisionMission';
import { Footer } from './components/Footer';
import { CartProvider } from './context/CartContext';

export const App: React.FC = () => {
  return (
    <CartProvider>
      <div className="site-wrapper">
        <Navbar />
        <main>
          <Hero />
          <Introduction />
          <FounderStory />
          <VisionMission />
          <ExclusiveSet />
          <ProductCollection />
          <Features />
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
