import './Services.css';
import { Link } from 'react-router-dom';

function Services() {
  const services = [
    {
      id: 1,
      title: 'IT Services & Consulting',
      icon: '💼',
      description: 'Enterprise solutions and digital transformation',
      features: [
        'Cloud Migration & Infrastructure',
        'Custom Software Development',
        'Web & Mobile Applications',
        'IT Infrastructure Management',
        'Cybersecurity Solutions',
        'Digital Transformation Strategy'
      ]
    },
    {
      id: 2,
      title: 'Healthcare RCM',
      icon: '🏥',
      description: 'Revenue Cycle Management for healthcare providers',
      features: [
        'Medical Billing & Coding',
        'Claims Management',
        'Patient Eligibility Verification',
        'Denial Management',
        'Healthcare Compliance',
        'Revenue Optimization'
      ]
    },
    {
      id: 3,
      title: 'Semiconductors & Embedded Systems',
      icon: '🔌',
      description: 'IoT solutions and embedded system design',
      features: [
        'Embedded Systems Design',
        'IoT Architecture',
        'Microcontroller Programming',
        'Digital Signal Processing',
        'Hardware-Software Integration',
        'FPGA Development'
      ]
    },
    {
      id: 4,
      title: 'Business Consulting',
      icon: '📊',
      description: 'Strategic consulting for business growth',
      features: [
        'Process Optimization',
        'Business Intelligence',
        'Change Management',
        'Risk Assessment',
        'Strategic Planning',
        'Performance Analytics'
      ]
    }
  ];

  const getServiceRoute = (serviceTitle) => {
    const routeMap = {
      'IT Services & Consulting': '/it-services',
      'Healthcare RCM': '/rcm-details',
      'Semiconductors & Embedded Systems': '/semiconductors',
      'Business Consulting': '/business-consulting'
    };
    return routeMap[serviceTitle] || '/services';
  };

  return (
    <div className="services">
      <div className="services-hero">
        <h1>Our Services</h1>
        <p>Comprehensive solutions tailored to your business needs</p>
      </div>

      <div className="services-container">
        {services.map((service) => (
          <div key={service.id} className="service-detail-card">
            <div className="service-detail-icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p className="service-desc">{service.description}</p>
            <ul className="features-list">
              {service.features.map((feature, index) => (
                <li key={index}>✓ {feature}</li>
              ))}
            </ul>
            <Link to={getServiceRoute(service.title)} className="service-cta">
              Learn More
            </Link>
          </div>
        ))}
      </div>

      <section className="why-choose-section">
        <h2>Why Choose Our Services?</h2>
        <div className="reasons-grid">
          <div className="reason">
            <h3>📈 Proven Expertise</h3>
            <p>Years of experience across all service verticals</p>
          </div>
          <div className="reason">
            <h3>🎯 Customized Solutions</h3>
            <p>Tailored approaches for each client</p>
          </div>
          <div className="reason">
            <h3>⚡ Rapid Implementation</h3>
            <p>Quick turnaround without compromising quality</p>
          </div>
          <div className="reason">
            <h3>💰 Cost Effective</h3>
            <p>Competitive pricing with maximum ROI</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
