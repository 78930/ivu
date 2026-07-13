export const mockBlogs = [
  {
    _id: '1',
    title: 'Cloud Migration: A Step-by-Step Guide',
    slug: 'cloud-migration-guide',
    excerpt: 'Learn how to successfully migrate your infrastructure to the cloud',
    category: 'IT Services',
    author: 'John Doe',
    createdAt: new Date('2025-12-10'),
    image: '☁️'
  },
  {
    _id: '2',
    title: 'RCM Optimization Best Practices',
    slug: 'rcm-best-practices',
    excerpt: 'Improve your revenue cycle management with these proven strategies',
    category: 'Healthcare',
    author: 'Jane Smith',
    createdAt: new Date('2025-12-08'),
    image: '🏥'
  },
  {
    _id: '3',
    title: 'IoT in Manufacturing: Benefits and Implementation',
    slug: 'iot-manufacturing',
    excerpt: 'Discover how IoT is revolutionizing manufacturing processes',
    category: 'Semiconductors',
    author: 'Mike Johnson',
    createdAt: new Date('2025-12-05'),
    image: '🔌'
  }
];

export const mockCases = [
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
