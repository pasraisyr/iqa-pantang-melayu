import React from 'react';
import { BookOpen, Crown, Gift, Heart, ShieldCheck } from 'lucide-react';
import { FEATURES } from '../data/pantangData';

export const Features: React.FC = () => {
  const renderFeatureIcon = (type: string) => {
    switch (type) {
      case 'shield':
        return <ShieldCheck size={28} className="feature-icon-svg" />;
      case 'crown':
        return <Crown size={28} className="feature-icon-svg" />;
      case 'gift':
        return <Gift size={28} className="feature-icon-svg" />;
      case 'book':
        return <BookOpen size={28} className="feature-icon-svg" />;
      case 'heart':
        return <Heart size={28} className="feature-icon-svg" />;
      default:
        return <ShieldCheck size={28} className="feature-icon-svg" />;
    }
  };

  return (
    <section id="keistimewaan" className="features-section section-padding">
      <div className="section-container">
        <div className="text-center section-header-box">
          <span className="section-subtitle">
            <Crown size={13} className="inline-icon" /> KUALITI & NILAI
          </span>
          <h2 className="section-title">KEISTIMEWAAN KOLEKSI KAMI</h2>
          <div className="ornament-separator">
            <span className="ornament-symbol">❖ ⚜ ❖</span>
          </div>
        </div>

        <div className="features-grid">
          {FEATURES.map((feat, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon-badge">
                {renderFeatureIcon(feat.iconType)}
              </div>
              <h3 className="feature-title">{feat.title}</h3>
              <p className="feature-desc">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
