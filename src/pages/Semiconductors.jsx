import React from "react";
import "./Semiconductors.css";

const semiconductorServices = [
  {
    title: "ASIC & SoC Design",
    short: "End-to-end ASIC/SoC architecture, design, and implementation.",
    points: [
      "Architecture & micro-architecture",
      "RTL design (Verilog / VHDL / SystemVerilog)",
      "Low-power and high-performance optimization",
      "DFT, DFM, and sign-off support",
    ],
  },
  {
    title: "FPGA Design & Prototyping",
    short: "High-speed FPGA solutions for rapid prototyping and production.",
    points: [
      "RTL design and IP integration",
      "High-speed interfaces (PCIe, DDR, Ethernet)",
      "Board bring-up & validation",
      "Lab testing and debug",
    ],
  },
  {
    title: "Verification & Validation",
    short: "Functional, formal, and system-level verification services.",
    points: [
      "Testbench development (UVM/SystemVerilog)",
      "Coverage-driven verification",
      "Assertion-based verification",
      "Post-silicon validation support",
    ],
  },
  {
    title: "Physical Design & STA",
    short: "Back-end implementation from netlist to GDSII.",
    points: [
      "Floorplanning, placement, and routing",
      "Clock tree synthesis",
      "Static timing analysis and closure",
      "Power, IR drop, and EM analysis",
    ],
  },
  {
    title: "Embedded & Firmware",
    short: "Embedded software for silicon platforms and boards.",
    points: [
      "Bare-metal and RTOS-based development",
      "Board support packages and drivers",
      "Bootloader and firmware optimization",
      "Debugging and performance tuning",
    ],
  },
  {
    title: "IoT & Edge Solutions",
    short: "Silicon and system design for IoT and edge computing.",
    points: [
      "Low-power sensor nodes",
      "Connectivity (BLE, Wi-Fi, LPWAN)",
      "Edge AI acceleration",
      "Cloud integration support",
    ],
  },
];

export default function Semiconductors() {
  return (
    <div className="semi-page">
      <header className="semi-hero">
        <div className="semi-hero-content">
          <h1>Semiconductor & Embedded Solutions</h1>
          <p>
            End-to-end VLSI, embedded, and system design services from concept
            to production-ready silicon.
          </p>
          <div className="semi-hero-tags">
            <span>ASIC / SoC</span>
            <span>FPGA</span>
            <span>Verification</span>
            <span>Physical Design</span>
            <span>Embedded</span>
            <span>IoT & Edge</span>
          </div>
        </div>
      </header>

      <section className="semi-services-section">
        <h2>Our Semiconductor Services</h2>
        <p className="semi-section-subtitle">
          Covering the full silicon lifecycle: architecture, design,
          verification, physical implementation, and embedded software.
        </p>
        <div className="semi-services-grid">
          {semiconductorServices.map((service) => (
            <article key={service.title} className="semi-service-card">
              <h3>{service.title}</h3>
              <p className="semi-service-short">{service.short}</p>
              <ul>
                {service.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="semi-capabilities">
        <h2>Technical Competencies</h2>
        <div className="semi-capabilities-grid">
          <div className="semi-capability">
            <h4>Design Tools & Flows</h4>
            <p>Experience with industry-standard EDA tools and flows across front-end and back-end design.</p>
          </div>
          <div className="semi-capability">
            <h4>Process Nodes</h4>
            <p>Support from mature nodes to advanced geometries for performance, power, and area optimization.</p>
          </div>
          <div className="semi-capability">
            <h4>Quality & Reliability</h4>
            <p>Robust verification, sign-off, and validation practices for first-time-right silicon.</p>
          </div>
        </div>
      </section>

      <section className="semi-cta">
        <h2>Need a Semiconductor Partner?</h2>
        <p>
          Share your ASIC, FPGA, or embedded requirements and get a tailored
          engagement model for your roadmap.
        </p>
        <a href="/contact" className="semi-cta-button">
          Talk to our semiconductor team
        </a>
      </section>
    </div>
  );
}
