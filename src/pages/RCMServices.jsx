import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./RCMServices.css";

const rcmServicesData = [
  {
    category: "Front Office Services",
    short: "Patient access, eligibility, and pre-authorizations.",
    details: [
      "Patient registration & demographic capture",
      "Insurance eligibility & benefits verification",
      "Pre-authorization & prior approvals",
      "Financial counseling & estimation",
      "Scheduling & appointment reminders",
    ],
  },
  {
    category: "Medical Coding",
    short: "Accurate ICD‑10 / CPT coding to ensure clean claims.",
    details: [
      "ICD‑10, CPT, HCPCS coding",
      "HCC & risk adjustment coding",
      "Specialty‑specific coding (IP, OP, ED, physician)",
      "Coding audits & compliance reviews",
      "Clinical documentation improvement (CDI)",
    ],
  },
  {
    category: "Charge Capture & Billing",
    short: "Timely charge entry and claim submission to payers.",
    details: [
      "Charge capture & review",
      "Claim creation & scrubbing",
      "Electronic & paper claim submission",
      "Payer rules & edits management",
      "Revenue integrity checks",
    ],
  },
  {
    category: "Payment Posting",
    short: "Accurate posting of ERA/EOB with adjustments.",
    details: [
      "ERA / EOB payment posting",
      "Patient responsibility identification",
      "Adjustments & write‑offs as per contracts",
      "Credit balance review",
      "Reconciliation with bank deposits",
    ],
  },
  {
    category: "Denial Management",
    short: "Analysis, appeal, and recovery for denied claims.",
    details: [
      "Denial trend analysis & root cause",
      "Rework and resubmission of denied claims",
      "Appeals preparation & submission",
      "Payer follow‑up and escalation",
      "Corrective action plans to reduce future denials",
    ],
  },
  {
    category: "Accounts Receivable (A/R)",
    short: "End‑to‑end A/R follow‑up and collections.",
    details: [
      "A/R aging analysis",
      "Payer follow‑up (phone, portal, email)",
      "Underpayment identification & recovery",
      "Small balance & legacy A/R clean‑up",
      "Monthly A/R performance reporting",
    ],
  },
  {
    category: "Patient Billing & Collections",
    short: "Patient statements, reminders, and support.",
    details: [
      "Patient invoicing & statement generation",
      "SMS / email reminders & payment links",
      "Call‑center support for patient queries",
      "Payment plans & settlements",
      "Online payment portal integration",
    ],
  },
  {
    category: "Analytics & Reporting",
    short: "Actionable KPIs to improve revenue performance.",
    details: [
      "Dashboard for key RCM KPIs",
      "Denial rate, clean claim rate, DSO, and collection rate",
      "Payer performance comparison",
      "Productivity & quality reporting",
      "Customized MIS for management reviews",
    ],
  },
];

const metrics = [
  { label: "Clean Claim Rate", value: "98%+" },
  { label: "Denial Reduction", value: "30–40%" },
  { label: "Faster Collections", value: "20–30%" },
  { label: "Client Satisfaction", value: "95%+" },
];

const RCMServices = () => {
  const [selectedCategory, setSelectedCategory] = useState(rcmServicesData[0]);

  return (
    <div className="rcm-page">
      {/* Hero Section */}
      <section className="rcm-hero">
        <div className="rcm-hero-content">
          <h1>Healthcare Revenue Cycle Management (RCM) Services</h1>
          <p>
            End‑to‑end RCM services that cover the complete revenue lifecycle
            from patient access to final payment, helping providers improve cash
            flow, reduce denials, and stay compliant.
          </p>
          <div className="rcm-hero-tags">
            <span>Hospitals</span>
            <span>Clinics</span>
            <span>Physician Groups</span>
            <span>Diagnostic Centers</span>
          </div>
          <a href="#rcm-services" className="rcm-hero-btn">
            View Full Services
          </a>
          <Link to="/rcm-details" className="rcm-hero-btn rcm-hero-btn--alt">
            Learn More (Detailed)
          </Link>
        </div>
        <div className="rcm-hero-card">
          <h2>End‑to‑End RCM Workflow</h2>
          <ol>
            <li>Patient registration & eligibility</li>
            <li>Clinical documentation & coding</li>
            <li>Charge capture & claim submission</li>
            <li>Payment posting & reconciliation</li>
            <li>Denial management & A/R follow‑up</li>
            <li>Patient billing & collections</li>
            <li>Analytics & continuous improvement</li>
          </ol>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="rcm-metrics">
        {metrics.map((m) => (
          <div key={m.label} className="rcm-metric-card">
            <div className="rcm-metric-value">{m.value}</div>
            <div className="rcm-metric-label">{m.label}</div>
          </div>
        ))}
      </section>

      {/* Services Section */}
      <section id="rcm-services" className="rcm-services-section">
        <div className="rcm-section-header">
          <h2>Full RCM Services</h2>
          <p>
            Select a service category to view detailed scope of work delivered
            by our healthcare RCM team.
          </p>
        </div>

        <div className="rcm-services-layout">
          <div className="rcm-services-list">
            {rcmServicesData.map((service) => (
              <button
                key={service.category}
                className={
                  "rcm-service-item" +
                  (selectedCategory.category === service.category
                    ? " active"
                    : "")
                }
                onClick={() => setSelectedCategory(service)}
              >
                <h3>{service.category}</h3>
                <p>{service.short}</p>
              </button>
            ))}
          </div>

          <div className="rcm-service-details">
            <h3>{selectedCategory.category}</h3>
            <ul>
              {selectedCategory.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
            <div className="rcm-service-learnmore">
              <Link to="/rcm-details" className="rcm-learn-more">Learn more about RCM</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="rcm-why-us">
        <div className="rcm-section-header">
          <h2>Why Choose Our RCM Services?</h2>
        </div>
        <div className="rcm-why-grid">
          <div className="rcm-why-card">
            <h3>End‑to‑End Ownership</h3>
            <p>
              Front‑end, mid‑cycle, and back‑office RCM handled by a single
              team for better control and accountability.
            </p>
          </div>
          <div className="rcm-why-card">
            <h3>Compliance Focused</h3>
            <p>
              Strict adherence to ICD‑10, CPT, payer guidelines, and data
              security best practices (HIPAA‑ready processes).
            </p>
          </div>
          <div className="rcm-why-card">
            <h3>Scalable Team</h3>
            <p>
              Ability to ramp resources quickly for new specialties, locations,
              or higher claim volumes.
            </p>
          </div>
          <div className="rcm-why-card">
            <h3>Transparent Reporting</h3>
            <p>
              Clear visibility into KPIs like denial rate, DSO, cash flow, and
              productivity with monthly dashboards.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rcm-cta">
        <h2>Ready to Optimize Your Revenue Cycle?</h2>
        <p>
          Share your current challenges in billing, denials, or A/R, and get a
          customized RCM solution and transition plan.
        </p>
        <Link to="/contact" className="rcm-cta-btn">
          Talk to Our RCM Expert
        </Link>
      </section>
    </div>
  );
};

export default RCMServices;
