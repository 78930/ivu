import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api';
import { mockCases } from '../data/mockContent';
import './CaseStudyDetail.css';

function CaseStudyDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setLoading(true);
    setNotFound(false);
    api.get(`/api/cases/${id}`)
      .then((response) => setItem(response.data))
      .catch(() => {
        const fallback = mockCases.find((c) => c._id === id);
        if (fallback) setItem(fallback);
        else setNotFound(true);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="loading" style={{ padding: '4rem 2rem', textAlign: 'center' }}>Loading case study...</p>;

  if (notFound || !item) {
    return (
      <div className="case-detail-container">
        <h1>Case study not found</h1>
        <Link to="/case-studies" className="read-more">← Back to Case Studies</Link>
      </div>
    );
  }

  return (
    <div className="case-detail">
      <div className="case-detail-hero">
        <span className="category-badge">{item.service}</span>
        <h1>{item.title}</h1>
        <p>Client: {item.client}</p>
      </div>
      <div className="case-detail-container">
        <section>
          <h3>Challenge</h3>
          <p>{item.challenge}</p>
        </section>
        <section>
          <h3>Solution</h3>
          <p>{item.solution}</p>
        </section>
        <section>
          <h3>Results</h3>
          <p>{item.results}</p>
        </section>
        {item.metrics && (
          <div className="case-detail-metrics">
            {Object.entries(item.metrics).map(([key, value]) => (
              <div key={key} className="metric">
                <span className="metric-value">{value}</span>
                <span className="metric-label">{key}</span>
              </div>
            ))}
          </div>
        )}
        <Link to="/case-studies" className="read-more">← Back to Case Studies</Link>
      </div>
    </div>
  );
}

export default CaseStudyDetail;
