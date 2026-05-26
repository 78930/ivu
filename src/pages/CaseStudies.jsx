import { useState, useEffect } from 'react';
import api from '../api';
import './CaseStudies.css';
import CaseStudiesGrid from '../components/CaseStudiesGrid';

function CaseStudies() {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetchCaseStudies();
  }, []);

  const fetchCaseStudies = async () => {
    try {
      setError(null);
      const response = await api.get('/api/cases');
      setCases(response.data);
    } catch (error) {
      console.error('Error fetching case studies:', error);
      setError(error?.message || 'Failed to load case studies');
    } finally {
      setLoading(false);
    }
  };

  const retry = () => {
    setLoading(true);
    setError(null);
    fetchCaseStudies();
  };

  const mockCases = [
    {
      _id: '1',
      title: 'Enterprise Cloud Migration',
      service: 'IT Services',
      client: 'Tech Corp',
      challenge: 'Legacy systems hindering growth',
      solution: 'Complete cloud migration to AWS',
      results: 'Improved system performance',
      metrics: {
        improvement: '40% cost reduction',
        roi: '250%',
        timeframe: '6 months'
      }
    },
    {
      _id: '2',
      title: 'Healthcare RCM Optimization',
      service: 'Healthcare RCM',
      client: 'Hospital Chain',
      challenge: 'High claim denial rates',
      solution: 'Implemented AI-based RCM system',
      results: 'Reduced denials and improved collections',
      metrics: {
        improvement: '35% denial reduction',
        roi: '180%',
        timeframe: '4 months'
      }
    },
    {
      _id: '3',
      title: 'IoT Device Development',
      service: 'Semiconductors',
      client: 'Manufacturing Firm',
      challenge: 'Need for real-time monitoring',
      solution: 'Custom IoT solution with embedded systems',
      results: 'Real-time production monitoring',
      metrics: {
        improvement: '50% efficiency gain',
        roi: '320%',
        timeframe: '5 months'
      }
    }
  ];

  const displayCases = cases.length > 0 ? cases : mockCases;
  const filteredCases = filter === 'All'
    ? displayCases
    : displayCases.filter(c => c.service === filter);

  return (
    <div className="case-studies">
      <div className="case-hero">
        <h1>Case Studies</h1>
        <p>Real-world success stories from our clients</p>
      </div>

      <div className="case-container">
        <div className="filter-buttons">
          <button
            className={filter === 'All' ? 'active' : ''}
            onClick={() => setFilter('All')}
          >
            All
          </button>
          <button
            className={filter === 'IT Services' ? 'active' : ''}
            onClick={() => setFilter('IT Services')}
          >
            IT Services
          </button>
          <button
            className={filter === 'Healthcare RCM' ? 'active' : ''}
            onClick={() => setFilter('Healthcare RCM')}
          >
            Healthcare
          </button>
          <button
            className={filter === 'Semiconductors' ? 'active' : ''}
            onClick={() => setFilter('Semiconductors')}
          >
            Semiconductors
          </button>
        </div>

        {loading ? (
          <p className="loading">Loading case studies...</p>
        ) : error ? (
          <div style={{ textAlign: 'center', padding: '24px' }}>
            <p style={{ color: '#ff6b6b' }}>{error}</p>
            <button onClick={retry}>Retry</button>
          </div>
        ) : (
          // render grid (uses internal mock cards)
          <CaseStudiesGrid />
        )}
      </div>
    </div>
  );
}

export default CaseStudies;
