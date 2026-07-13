import { useState, useEffect } from 'react';
import api from '../api';
import './Careers.css';

function Careers() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchJobs = async () => {
    try {
      setError(null);
      const response = await api.get('/api/jobs');
      setJobs(response.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      setError(error?.message || 'Failed to load job listings');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const retry = () => {
    setLoading(true);
    setError(null);
    fetchJobs();
  };

  const mockJobs = [
    {
      _id: '1',
      title: 'Senior Full Stack Developer',
      department: 'IT Services',
      location: 'Hyderabad',
      type: 'Full-time',
      description: 'We are looking for an experienced developer to join our team',
      requirements: ['5+ years experience', 'React & Node.js', 'MongoDB', 'AWS'],
      salary: '₹15-20 LPA'
    },
    {
      _id: '2',
      title: 'Healthcare RCM Specialist',
      department: 'Healthcare',
      location: 'Hyderabad',
      type: 'Full-time',
      description: 'Medical billing and coding expert needed for our healthcare division',
      requirements: ['Medical coding knowledge', 'RCM expertise', 'Attention to detail', 'Team player'],
      salary: '₹12-15 LPA'
    },
    {
      _id: '3',
      title: 'Embedded Systems Engineer',
      department: 'Semiconductors',
      location: 'Hyderabad',
      type: 'Full-time',
      description: 'Design and develop embedded solutions for IoT applications',
      requirements: ['Embedded C/C++', 'Microcontroller knowledge', 'RTOS', '3+ years experience'],
      salary: '₹13-18 LPA'
    }
  ];

  const displayJobs = jobs.length > 0 ? jobs : mockJobs;

  return (
    <div className="careers">
      <div className="careers-hero">
        <h1>Join Our Team</h1>
        <p>Build your career with us</p>
      </div>

      <div className="careers-container">
        <section className="about-careers">
          <h2>Why Work With Us?</h2>
          <div className="perks-grid">
            <div className="perk">
              <h4>💼 Growth Opportunities</h4>
              <p>Continuous learning and career advancement</p>
            </div>
            <div className="perk">
              <h4>💰 Competitive Salary</h4>
              <p>Industry-leading compensation packages</p>
            </div>
            <div className="perk">
              <h4>🌍 Diverse Projects</h4>
              <p>Work on exciting and innovative projects</p>
            </div>
            <div className="perk">
              <h4>👥 Great Team</h4>
              <p>Collaborate with talented professionals</p>
            </div>
          </div>
        </section>

        <section className="open-positions">
          <h2>Open Positions</h2>
          {loading ? (
            <p className="loading">Loading job listings...</p>
          ) : error ? (
            <div style={{ textAlign: 'center', padding: '24px' }}>
              <p style={{ color: '#ff6b6b' }}>{error}</p>
              <button onClick={retry}>Retry</button>
            </div>
          ) : (
            <div className="jobs-list">
              {displayJobs.map(job => (
                <div key={job._id} className="job-listing">
                  <div className="job-header">
                    <div className="job-title-section">
                      <h3>{job.title}</h3>
                      <p className="department">{job.department}</p>
                    </div>
                    <div className="job-badges">
                      <span className="badge location">📍 {job.location}</span>
                      <span className="badge type">{job.type}</span>
                      <span className="badge salary">{job.salary}</span>
                    </div>
                  </div>

                  <p className="description">{job.description}</p>

                  <div className="requirements">
                    <h4>Requirements:</h4>
                    <ul>
                      {job.requirements && job.requirements.map((req, idx) => (
                        <li key={idx}>✓ {req}</li>
                      ))}
                    </ul>
                  </div>

                  <button className="apply-btn">Apply Now</button>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="cta-section">
          <h2>Don't see a position that fits?</h2>
          <p>Send us your resume and let's talk about opportunities!</p>
          <button className="contact-btn">Send Your Resume</button>
        </section>
      </div>
    </div>
  );
}

export default Careers;
