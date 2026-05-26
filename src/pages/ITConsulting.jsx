import React from "react";
import "./ITConsulting.css";

export default function ITConsulting() {
  return (
    <section className="itc-section" id="it-consulting">
      <div className="itc-container">
        <div className="itc-badge">IT Consulting</div>

        <h2 className="itc-title">Strategic IT & Business Consulting</h2>
        <p className="itc-subtitle">
          Strategic business consulting and process optimization to align
          technology, people, and processes with your growth plans.
        </p>

        <div className="itc-grid">
          <article className="itc-card">
            <h3>Technology Strategy & Roadmap</h3>
            <p>
              Align IT investments with business goals through clear, phased
              roadmaps.
            </p>
            <ul>
              <li>Current-state IT assessment</li>
              <li>IT strategy & target architecture</li>
              <li>Cloud & modernization roadmap</li>
              <li>Cost optimization and governance</li>
            </ul>
          </article>

          <article className="itc-card">
            <h3>Business Process Optimization</h3>
            <p>
              Analyze, redesign, and automate key processes for efficiency and
              scalability.
            </p>
            <ul>
              <li>Process discovery & mapping (AS-IS / TO-BE)</li>
              <li>BPM & workflow design</li>
              <li>Automation & RPA opportunities</li>
              <li>KPIs, SLAs, and dashboards</li>
            </ul>
          </article>

          <article className="itc-card">
            <h3>Change & Transformation</h3>
            <p>
              Support end‑to‑end digital transformation with structured change
              management.
            </p>
            <ul>
              <li>Transformation program design</li>
              <li>Stakeholder & change management</li>
              <li>Training and adoption plans</li>
              <li>Continuous improvement framework</li>
            </ul>
          </article>
        </div>

        <div className="itc-footer">
          <p>
            Looking to optimize your processes or define an IT strategy that
            supports your business growth?
          </p>
          <a href="/contact" className="itc-cta">
            Schedule an IT consulting session
          </a>
        </div>
      </div>
    </section>
  );
}
