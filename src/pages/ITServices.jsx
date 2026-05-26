import React, { useState } from 'react';
import './IT.css';


const ITServices = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const servicesData = [
    {
      id: 1,
      name: "Network Support & Management",
      category: "infrastructure",
      icon: "🌐",
      description: "Comprehensive network management and support services.",
      details: "We provide end-to-end network design, implementation, and maintenance. Our services include network setup, troubleshooting, monitoring, firewall management, and optimization to ensure maximum uptime and performance.",
      subServices: ["Network Setup", "Troubleshooting", "Monitoring", "Firewall Management"]
    },
    {
      id: 2,
      name: "Cloud Services",
      category: "infrastructure",
      icon: "☁️",
      description: "Cloud storage, migration, and management solutions.",
      details: "Migrate your business to the cloud with our expert guidance. We offer cloud storage solutions, SaaS integration, cloud migration services, and hybrid cloud management tailored to your business needs.",
      subServices: ["Cloud Storage", "SaaS Solutions", "Cloud Migration", "Hybrid Cloud"]
    },
    {
      id: 3,
      name: "Cybersecurity Solutions",
      category: "security",
      icon: "🔒",
      description: "Advanced threat detection and protection.",
      details: "Protect your business from cyber threats with our comprehensive security solutions. Services include threat monitoring, vulnerability assessments, firewall setup, and incident response planning.",
      subServices: ["Threat Monitoring", "Vulnerability Assessment", "Firewall Setup", "Incident Response"]
    },
    {
      id: 4,
      name: "IT Help Desk Support",
      category: "support",
      icon: "💬",
      description: "24/7 technical support for your team.",
      details: "Our dedicated support team provides round-the-clock assistance. We offer user support, ticketing systems, remote assistance, and comprehensive knowledge base management.",
      subServices: ["User Support", "Ticketing System", "Remote Assistance", "Knowledge Base"]
    },
    {
      id: 5,
      name: "Data Backup & Recovery",
      category: "infrastructure",
      icon: "💾",
      description: "Secure backup and disaster recovery solutions.",
      details: "Never lose your critical data. We provide automated backups, disaster recovery planning, and fast data restoration services to ensure business continuity.",
      subServices: ["Regular Backups", "Disaster Recovery", "Data Restoration"]
    },
    {
      id: 6,
      name: "Managed IT Services",
      category: "infrastructure",
      icon: "🛠️",
      description: "Proactive IT management and monitoring.",
      details: "Let us manage your entire IT infrastructure. Our managed services include infrastructure monitoring, patch management, proactive maintenance, and strategic IT planning.",
      subServices: ["Infrastructure Management", "Proactive Monitoring", "Patch Management"]
    },
    {
      id: 7,
      name: "Software Development",
      category: "development",
      icon: "💻",
      description: "Custom software solutions for your business.",
      details: "We develop tailored software solutions including web applications, mobile apps, CRM systems, and API integrations. Our team delivers scalable and secure applications.",
      subServices: ["Web Development", "Mobile Apps", "CRM Systems", "API Integration"]
    },
    {
      id: 8,
      name: "Infrastructure Provisioning",
      category: "infrastructure",
      icon: "🏗️",
      description: "Server setup and data center management.",
      details: "We provision and manage your IT infrastructure including server setup, virtualization, and data center management with optimal performance and security.",
      subServices: ["Server Setup", "Data Center Management", "Virtualization"]
    },
    {
      id: 9,
      name: "Communication Solutions",
      category: "support",
      icon: "📞",
      description: "VoIP and unified communication systems.",
      details: "Modern communication solutions including VoIP services, unified communication platforms, video conferencing, and email hosting for seamless team collaboration.",
      subServices: ["VoIP Services", "Unified Communication", "Video Conferencing", "Email Hosting"]
    },
    {
      id: 10,
      name: "Managed Security Services",
      category: "security",
      icon: "🔐",
      description: "Advanced security monitoring and compliance.",
      details: "Comprehensive managed security services including threat intelligence, identity management, SIEM solutions, and compliance management for regulatory requirements.",
      subServices: ["Threat Intelligence", "Identity Management", "SIEM", "Compliance Management"]
    },
    {
      id: 11,
      name: "IT Consulting",
      category: "support",
      icon: "📋",
      description: "Strategic IT planning and digital transformation.",
      details: "Our consultants help you plan IT strategy, execute digital transformation, and optimize your technology investments for business growth.",
      subServices: ["Strategy Planning", "Digital Transformation", "IT Audits"]
    },
    {
      id: 12,
      name: "Technical Training",
      category: "support",
      icon: "🎓",
      description: "Training programs for IT skills development.",
      details: "Empower your team with comprehensive training on IT systems, tools, and best practices. We offer workshops, online courses, and on-site training programs.",
      subServices: ["Workshops", "Online Courses", "On-site Training"]
    }
  ];

  // Filter Services
  const filteredServices = servicesData.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Open Modal
  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  // Close Modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <>
      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="container">
          <h2 className="section-title">Our IT Services</h2>
          
          {/* Filter & Search */}
          <div className="filter-section">
            <input 
              type="text" 
              id="searchInput" 
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select 
              id="categoryFilter"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              <option value="infrastructure">Infrastructure</option>
              <option value="security">Security</option>
              <option value="development">Development</option>
              <option value="support">Support</option>
            </select>
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {filteredServices.map(service => (
              <div key={service.id} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <ul>
                  {service.subServices.map((sub, index) => (
                    <li key={index}>{sub}</li>
                  ))}
                </ul>
                <button 
                  className="btn btn-secondary" 
                  onClick={() => openModal(service)}
                  style={{ marginTop: '1rem', width: '100%' }}
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Service Details */}
      {isModalOpen && selectedService && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <div className="modal-body">
              <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <div style={{ fontSize: '3rem' }}>{selectedService.icon}</div>
              </div>
              <h2>{selectedService.name}</h2>
              <p style={{ margin: '1rem 0', color: '#666' }}>{selectedService.details}</p>
              <h4 style={{ marginTop: '1.5rem', color: '#0066cc' }}>Included Services:</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {selectedService.subServices.map((sub, index) => (
                  <li key={index} style={{ padding: '0.5rem 0', color: '#666' }}>
                    <span style={{ color: '#00a86b' }}>✓</span> {sub}
                  </li>
                ))}
              </ul>
              <button 
                className="btn btn-secondary" 
                style={{ width: '100%', marginTop: '2rem' }}
                onClick={() => alert('Contact our sales team for more information!')}
              >
                Request Service
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ITServices;
