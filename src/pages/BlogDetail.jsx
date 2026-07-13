import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api';
import { mockBlogs } from '../data/mockContent';
import './BlogDetail.css';

function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    setLoading(true);
    setNotFound(false);
    api.get(`/api/blogs/${slug}`)
      .then((response) => setPost(response.data))
      .catch(() => {
        const fallback = mockBlogs.find((b) => b.slug === slug);
        if (fallback) setPost(fallback);
        else setNotFound(true);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <p className="loading" style={{ padding: '4rem 2rem', textAlign: 'center' }}>Loading article...</p>;

  if (notFound || !post) {
    return (
      <div className="blog-detail-container">
        <h1>Article not found</h1>
        <Link to="/blog" className="read-more">← Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="blog-detail">
      <div className="blog-detail-hero">
        <span className="category-badge">{post.category}</span>
        <h1>{post.title}</h1>
        <div className="blog-meta">
          <span className="author">By {post.author}</span>
          <span className="date">{new Date(post.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
      <div className="blog-detail-container">
        <div className="blog-detail-image">{post.image || '📰'}</div>
        <p className="blog-detail-excerpt">{post.excerpt}</p>
        <Link to="/blog" className="read-more">← Back to Blog</Link>
      </div>
    </div>
  );
}

export default BlogDetail;
