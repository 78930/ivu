// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import { useState, lazy, Suspense } from 'react';
// video is expected at runtime as a static public asset: `frontend/public/bg.mp4`
// Use a remote electronics-themed fallback video if the local `/bg.mp4` is missing.
// Provided fallback (iStock Big Data video):
// https://media.istockphoto.com/id/1309227447/video/big-data-information-flowing-through-a-computer-network.mp4
const CDN_BG = 'https://media.istockphoto.com/id/1309227447/video/big-data-information-flowing-through-a-computer-network.mp4?s=mp4-640x640-is&k=20&c=VidCqZ3Kf2FxTXblJTJM-4hEecoM-YSYcbxlbeEHtuQ=';
import poster from '../assets/bg-poster.svg';
const AnimatedBackground = lazy(() => import('../components/AnimatedBackground'));
import './Home.css';
import ServicesGrid from '../components/ServicesGrid';

function Home() {
  const [videoFailed, setVideoFailed] = useState(false);
  const [videoSrc, setVideoSrc] = useState('/bg.mp4');
  const [triedCdn, setTriedCdn] = useState(false);

  return (
    <div className="home">
      {/* Hero Section with 4D video background */}
      <section
        className={"hero" + (videoFailed ? ' fallback' : '')}
        style={videoFailed ? { backgroundImage: `url(${poster})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
      >
        {/* Animated background sits below video (or alone if video fails) */}
        <Suspense fallback={null}>
          <AnimatedBackground color={0x00e0ff} bg={0x071124} />
        </Suspense>

        {!videoFailed && (
          <video
            className="hero-video"
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            onError={() => {
              if (!triedCdn) {
                setVideoSrc(CDN_BG);
                setTriedCdn(true);
              } else {
                setVideoFailed(true);
              }
            }}
          />
        )}

        <div className="hero-overlay" />

        <div className="hero-content">
          <div className="hero-pretitle">From Problems to Solutions</div>
          <h1 className="hero-title">Progressive Engineering Excellence</h1>
          <p className="hero-sub">Vikram IVU is a trusted partner for product and silicon engineering — hardware, embedded software, cloud and AI solutions that accelerate product readiness.</p>

          <div className="hero-ctas">
            <Link to="/contact" className="nav-btn">Talk to an Expert</Link>
            <Link to="/services" className="cta-button cta-ghost">Our Services →</Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <h2>Our Services</h2>
        <ServicesGrid />
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <h2>Why Choose Us?</h2>
        <div className="benefits-grid">
          <div className="benefit">
            <h4>✓ Expert Team</h4>
            <p>Experienced professionals with 10+ years in industry</p>
          </div>
          <div className="benefit">
            <h4>✓ Proven Results</h4>
            <p>100+ successful projects delivered</p>
          </div>
          <div className="benefit">
            <h4>✓ 24/7 Support</h4>
            <p>Round-the-clock customer support</p>
          </div>
          <div className="benefit">
            <h4>✓ Customized Solutions</h4>
            <p>Tailored to your specific needs</p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta">
        <h2>Ready to Transform?</h2>
        <p>Let's discuss how we can help your business grow</p>
        <Link to="/contact" className="cta-button-white">
          Schedule a Consultation
        </Link>
      </section>
    </div>
  );
}

export default Home;
