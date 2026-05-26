import React from 'react';
import { Link } from 'react-router-dom';
import './RCMDetails.css';

export default function RCMDetails() {
  return (
    <div className="rcm-details-page container">
      <header className="rcm-details-hero">
        <h1>Healthcare RCM — Detailed Service Breakdown</h1>
        <p>
          Deep dive into Medical Billing & Coding, Claims Management, Eligibility,
          Denial Management, Compliance and Revenue Optimization — practical scope,
          process steps, technologies, and measurable outcomes.
        </p>
        <Link to="/contact" className="btn btn-primary">Request a RCM Assessment</Link>
      </header>

      <section className="rcm-section">
        <h2>Medical Billing & Coding</h2>
        <p>
          Accurate coding is the foundation of clean claims. Our certified coders
          (specialty-aware) map clinical documentation to ICD‑10, CPT and HCPCS,
          apply payer-specific rules, and perform regular coding audits. We also
          provide Clinical Documentation Improvement (CDI) to ensure records
          support the assigned codes and maximize reimbursement while remaining
          compliant.
        </p>
        <ul>
          <li>End-to-end charge capture, charge review and scrub</li>
          <li>Specialty coding: cardiology, orthopedics, oncology, ED, IP/OP</li>
          <li>HCC / risk-adjustment and quality measure alignment</li>
          <li>Regular audits and KPI-based quality assurance</li>
        </ul>
      </section>

      <section className="rcm-section">
        <h2>Claims Management</h2>
        <p>
          From claim creation to payer reconciliation, we implement automated
          edits and rules (scrubbing) to reduce rejections. Claims are
          prioritized using payer propensity and AR impact, with rapid
          resubmission flows and payer-specific appeals queues.
        </p>
        <ul>
          <li>Claim scrubbing, batching and submission (electronic & paper)</li>
          <li>Payer rules engine and custom edit templates</li>
          <li>Automated underpayment detection and recovery</li>
          <li>Integrated EDI and payer portal workflows</li>
        </ul>
      </section>

      <section className="rcm-section">
        <h2>Patient Eligibility & Benefits Verification</h2>
        <p>
          Verifying insurance eligibility at the front desk prevents claim
          denials and ensures patients are informed of financial responsibility
          upfront. We support real-time eligibility checks, benefits
          determination, prior authorization and financial counseling.
        </p>
        <ul>
          <li>Real-time payer eligibility and benefit lookups</li>
          <li>Automated prior authorization workflows and follow-up</li>
          <li>Estimation of patient responsibility and payment collections</li>
          <li>Pre-visit outreach and appointment reminders to reduce no-shows</li>
        </ul>
      </section>

      <section className="rcm-section">
        <h2>Denial Management</h2>
        <p>
          Denials are triaged by root cause and financial impact. Our team
          performs denial trend analytics, prepares appeals, corrects claims,
          and implements process changes to close recurring gaps that drive
          denials.
        </p>
        <ul>
          <li>Denial classification, analytics and RCA (root cause analysis)</li>
          <li>Appeals drafting, submission and escalation</li>
          <li>Provider education and corrective action implementation</li>
          <li>Automated workflows for resubmission and payer follow-up</li>
        </ul>
      </section>

      <section className="rcm-section">
        <h2>Healthcare Compliance & Security</h2>
        <p>
          Compliance is embedded in our processes: HIPAA-ready policies, audit
          trails, coder certifications and secure data handling. We provide
          documentation to support audits and ensure coding and billing
          practices follow regulations and payer-specific contract rules.
        </p>
        <ul>
          <li>HIPAA process alignment and secure data pipelines</li>
          <li>Coding & billing compliance reviews and audit support</li>
          <li>Policy definition for write-offs, refunds and credit balance</li>
          <li>Vendor and third-party governance for shared workflows</li>
        </ul>
      </section>

      <section className="rcm-section">
        <h2>Revenue Optimization & Analytics</h2>
        <p>
          Our analytics stack provides KPIs (Clean Claim Rate, DSO, Denial
          Rate, Net Collections %) and prescriptive recommendations. We run
          payer-performance comparisons, productivity benchmarking and
          scenario modeling to prioritize interventions that maximize cash
          recovery and operational efficiency.
        </p>
        <ul>
          <li>Dashboards for operations and executive views</li>
          <li>Predictive analytics for denial risk and payment propensity</li>
          <li>Contract performance and underpayment analysis</li>
          <li>Continuous improvement sprints and governance</li>
        </ul>
      </section>

      <section className="rcm-contact-cta">
        <h3>Next steps</h3>
        <p>
          Want a tailored plan? Share a sample claims report or current KPIs and
          we will provide a short analysis and a recommended transition plan.
        </p>
        <Link to="/contact" className="btn btn-primary">Request Assessment</Link>
      </section>
    </div>
  );
}
