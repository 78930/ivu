import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Leading provider of IT Services, IT Consulting, Healthcare RCM, and Semiconductor solutions.</p>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="/it-services">IT Services</a></li>
            <li><a href="/rcm-services">Healthcare RCM</a></li>
            <li><a href="/semiconductors">Semiconductors</a></li>
            <li><a href="/it-consulting">IT Consulting</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Email: nallavikram333779@gmail.com</p>
          <p>Phone: +91-7893030059</p>
          <p>Address: NAC BUILDING 2ND FLOOR Hyderabad, India</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Tavimora Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
