import './About.css';

function About() {
  return (
    <div className="about">
      <div className="about-hero">
        <h1>About Tavimora Solutions</h1>
        <p>Transforming businesses through technology and expertise</p>
      </div>

      <div className="about-container">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            To deliver innovative, cost-effective solutions that drive growth and 
            transformation for businesses of all sizes. We believe in partnering with 
            our clients to create lasting value.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Vision</h2>
          <p>
            To be the most trusted partner for IT services, healthcare solutions, 
            and semiconductor consulting in India and globally.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded with a vision to bridge the technology gap, Tavimora Solutions has
            grown from a small startup to a trusted partner for 100+ organizations 
            across multiple industries. Our team of 50+ professionals brings 
            expertise in IT services, healthcare RCM, semiconductors, and business consulting.
          </p>
        </section>

        <section className="about-section">
          <h2>Why We're Different</h2>
          <ul className="diff-list">
            <li>✓ Multi-disciplinary team with diverse expertise</li>
            <li>✓ Client-centric approach to problem solving</li>
            <li>✓ Cutting-edge technology and best practices</li>
            <li>✓ Dedicated support and transparent communication</li>
            <li>✓ Scalable solutions for growth</li>
            <li>✓ Industry certifications and compliance</li>
          </ul>
        </section>
      </div>

      <section className="team-section">
        <h2>Our Team</h2>
        <p>Experienced professionals committed to your success</p>
        <div className="team-stats">
          <div className="stat">
            <h3>50+</h3>
            <p>Team Members</p>
          </div>
          <div className="stat">
            <h3>100+</h3>
            <p>Projects Delivered</p>
          </div>
          <div className="stat">
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat">
            <h3>95%</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
