import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import CaseStudies from './pages/CaseStudies';
import ITConsulting from './pages/ITConsulting';
import ITServices from './pages/ITServices';
import RCMServices from './pages/RCMServices';
import RCMDetails from './pages/RCMDetails';
import Semi from './pages/Semiconductors';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/it-services" element={<ITServices />} />
        <Route path="/rcm-services" element={<RCMServices />} />
        <Route path="/rcm-details" element={<RCMDetails />} />
        <Route path="/it-consulting" element={<ITConsulting />} />
        <Route path="/semiconductors" element={<Semi />} />
        <Route path="/about" element={<About />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
