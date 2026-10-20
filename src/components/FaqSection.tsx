import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/pantangData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="faq-section section-padding">
      <div className="section-container">
        <div className="text-center section-header-box">
          <span className="section-subtitle">
            <HelpCircle size={13} className="inline-icon" /> JAWAPAN KEMUSYKILAN
          </span>
          <h2 className="section-title">SOALAN LAZIM (FAQ)</h2>
          <div className="ornament-separator">
            <span className="ornament-symbol">❖ ⚜ ❖</span>
          </div>
          <p className="section-intro-text">
            Maklumat penting dan panduan penggunaan koleksi penjagaan ibu IQA
            PANTANG MELAYU.
          </p>
        </div>

        <div className="faq-accordion-container">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`faq-accordion-item ${isOpen ? 'active' : ''}`}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleIndex(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-q-indicator">Q</span>
                  <span className="faq-q-text">{faq.question}</span>
                  <span className="faq-arrow-icon">
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-answer-pane">
                    <span className="faq-a-indicator">A:</span>
                    <p className="faq-a-text">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
