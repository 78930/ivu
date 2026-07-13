const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Initialize email transporter
let transporter;

async function createEtherealTransporter() {
  console.log('📧 Using Ethereal Email for testing (development mode)...');
  const testAccount = await nodemailer.createTestAccount();
  transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass
    }
  });
  console.log('✓ Ethereal test account created');
  console.log('📧 Test emails available at: https://ethereal.email/messages');
}

async function initializeTransporter() {
  const hasSmtpEnv = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;

  if (hasSmtpEnv) {
    console.log('📧 Configured SMTP credentials detected. Attempting to connect...');
    console.log('SMTP_HOST:', process.env.SMTP_HOST);
    console.log('SMTP_PORT:', process.env.SMTP_PORT);
    console.log('SMTP_USER:', process.env.SMTP_USER);
    console.log('SMTP_PASS exists:', !!process.env.SMTP_PASS);

    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: String(process.env.SMTP_PORT) === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    try {
      await transporter.verify();
      console.log('✓ SMTP transporter ready');
      return;
    } catch (error) {
      console.error('SMTP transporter verification failed:', error);
      console.log('⚠️ Falling back to Ethereal test email transport for development.');
      await createEtherealTransporter();
      return;
    }
  }

  await createEtherealTransporter();
}

// Initialize transporter
initializeTransporter();

// Mock content endpoints
const blogs = [
  {
    _id: '1',
    title: 'Cloud Migration: A Step-by-Step Guide',
    slug: 'cloud-migration-guide',
    excerpt: 'Learn how to successfully migrate your infrastructure to the cloud.',
    category: 'IT Services',
    author: 'John Doe',
    createdAt: '2025-12-10T09:00:00.000Z',
    image: '☁️'
  },
  {
    _id: '2',
    title: 'RCM Optimization Best Practices',
    slug: 'rcm-best-practices',
    excerpt: 'Improve your revenue cycle management with these proven strategies.',
    category: 'Healthcare',
    author: 'Jane Smith',
    createdAt: '2025-12-08T09:00:00.000Z',
    image: '🏥'
  },
  {
    _id: '3',
    title: 'IoT in Manufacturing: Benefits and Implementation',
    slug: 'iot-manufacturing',
    excerpt: 'Discover how IoT is revolutionizing manufacturing processes.',
    category: 'Semiconductors',
    author: 'Mike Johnson',
    createdAt: '2025-12-05T09:00:00.000Z',
    image: '🔌'
  }
];

const jobs = [
  {
    _id: '1',
    title: 'Senior Full Stack Developer',
    department: 'IT Services',
    location: 'Hyderabad',
    type: 'Full-time',
    description: 'We are looking for an experienced developer to join our team.',
    requirements: ['5+ years experience', 'React & Node.js', 'MongoDB', 'AWS'],
    salary: '₹15-20 LPA'
  },
  {
    _id: '2',
    title: 'Healthcare RCM Specialist',
    department: 'Healthcare',
    location: 'Hyderabad',
    type: 'Full-time',
    description: 'Medical billing and coding expert needed for our healthcare division.',
    requirements: ['Medical coding knowledge', 'RCM expertise', 'Attention to detail', 'Team player'],
    salary: '₹12-15 LPA'
  },
  {
    _id: '3',
    title: 'Embedded Systems Engineer',
    department: 'Semiconductors',
    location: 'Hyderabad',
    type: 'Full-time',
    description: 'Design and develop embedded solutions for IoT applications.',
    requirements: ['Embedded C/C++', 'Microcontroller knowledge', 'RTOS', '3+ years experience'],
    salary: '₹13-18 LPA'
  }
];

const cases = [
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

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

app.get('/api/blogs', (req, res) => {
  res.json(blogs);
});

app.get('/api/blogs/:slug', (req, res) => {
  const post = blogs.find((b) => b.slug === req.params.slug);
  if (!post) return res.status(404).json({ error: 'Blog post not found' });
  res.json(post);
});

app.get('/api/jobs', (req, res) => {
  res.json(jobs);
});

app.get('/api/cases', (req, res) => {
  res.json(cases);
});

app.get('/api/cases/:id', (req, res) => {
  const item = cases.find((c) => c._id === req.params.id);
  if (!item) return res.status(404).json({ error: 'Case study not found' });
  res.json(item);
});

// Contact form submission endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, company, service, subject, message } = req.body;

    // Validation
    if (!name || !email || !phone || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format'
      });
    }

    // Phone validation (Indian numbers)
    const phoneRegex = /^(\+91[-\s]?|0)?[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid phone number format'
      });
    }

    // Prepare email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company:</strong> ${company || 'N/A'}</p>
      <p><strong>Service:</strong> ${service || 'N/A'}</p>
      <p><strong>Subject:</strong> ${subject || 'N/A'}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;

    if (!transporter) {
      console.error('Email transporter is not initialized.');
      return res.status(500).json({
        success: false,
        error: 'Email service is unavailable. Please try again later.'
      });
    }

    // Send email to admin
    const adminMailResponse = await transporter.sendMail({
      from: `"Tavimora Solutions" <${process.env.SMTP_USER}>`,
      to: process.env.RECIPIENT_EMAIL || 'contact@tavimora.com',
      subject: `New Contact: ${subject || name}`,
      html: emailContent,
      replyTo: email
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: `"Tavimora Solutions" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'We received your message - Tavimora Solutions',
      html: `
        <h2>Thank you for contacting us!</h2>
        <p>Hi ${name},</p>
        <p>We have received your message and will get back to you within 24 hours.</p>
        <p>Best regards,<br>Tavimora Solutions Team</p>
      `
    });

    // For development mode, show test email preview URL when available
    const previewUrl = nodemailer.getTestMessageUrl(adminMailResponse);
    const responseMessage = previewUrl
      ? `Message sent successfully. Preview available at ${previewUrl}`
      : 'Message sent successfully';

    if (previewUrl) {
      console.log(`📧 Test email preview: ${previewUrl}`);
    }

    res.json({
      success: true,
      message: responseMessage,
      testPreviewUrl: previewUrl || undefined
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to send message. Please try again later.'
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✓ Server running on http://localhost:${PORT}`);
  console.log(`✓ CORS enabled for ${process.env.CORS_ORIGIN || 'http://localhost:5173'}`);
});
