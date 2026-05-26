import React from 'react';
import './CaseStudiesGrid.css';

const cases = [
  { title: 'Lidar & Camera Sensor Fusion', snippet: 'Portable building blocks for Lidar and Camera sensor fusion', img: '/assets/case1.jpg', href: '/case-studies/1' },
  { title: 'Edge AI SoC Implementation', snippet: 'Silicon implementation for edge AI SoC', img: '/assets/case2.jpg', href: '/case-studies/2' },
  { title: 'High-speed Interface Design', snippet: 'Designing high-speed PHYs and interfaces', img: '/assets/case3.jpg', href: '/case-studies/3' },
  { title: 'AI-enabled Device Software', snippet: 'Embedded software for AI-enabled devices', img: '/assets/case4.jpg', href: '/case-studies/4' }
];

export default function CaseStudiesGrid() {
  return (
    <div className="cases-grid" role="list" aria-label="Case studies">
      {cases.map((c) => (
        <article key={c.title} className="case-card" role="listitem">
          <a href={c.href} className="case-link">
            <div className="case-media">
              <img src={c.img} alt={c.title} loading="lazy" decoding="async" />
            </div>
            <div className="case-body">
              <h3>{c.title}</h3>
              <p>{c.snippet}</p>
              <span className="case-cta">Read more →</span>
            </div>
          </a>
        </article>
      ))}
    </div>
  );
}
