import React from 'react';
import { Link } from 'react-router-dom';
import './CaseStudiesGrid.css';

const defaultCases = [
  { title: 'Lidar & Camera Sensor Fusion', snippet: 'Portable building blocks for Lidar and Camera sensor fusion', icon: '📡', href: '/case-studies/1' },
  { title: 'Edge AI SoC Implementation', snippet: 'Silicon implementation for edge AI SoC', icon: '🧠', href: '/case-studies/2' },
  { title: 'High-speed Interface Design', snippet: 'Designing high-speed PHYs and interfaces', icon: '🔗', href: '/case-studies/3' },
  { title: 'AI-enabled Device Software', snippet: 'Embedded software for AI-enabled devices', icon: '💻', href: '/case-studies/4' }
];

export default function CaseStudiesGrid({ cases = defaultCases }) {
  return (
    <div className="cases-grid" role="list" aria-label="Case studies">
      {cases.map((c) => (
        <article key={c.title} className="case-card" role="listitem">
          <Link to={c.href || '#'} className="case-link">
            <div className="case-media">
              {c.img ? (
                <img src={c.img} alt={c.title} loading="lazy" decoding="async" />
              ) : (
                <span className="case-icon" aria-hidden="true">{c.icon || '📁'}</span>
              )}
            </div>
            <div className="case-body">
              <h3>{c.title}</h3>
              <p>{c.snippet}</p>
              <span className="case-cta">Read more →</span>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
}
