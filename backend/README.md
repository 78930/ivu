# Tavimora Solutions Backend Setup Guide

## Overview
This backend handles contact form submissions with email notifications using Nodemailer.

## Installation

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Configure Email Settings

#### Using Gmail (Recommended):
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to [Google Account Security](https://myaccount.google.com/security)
   - Navigate to "App passwords"
   - Select "Mail" and "Windows Computer"
   - Copy the generated 16-character password

3. Update `.env` file:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
RECIPIENT_EMAIL=nallavikram333779@gmail.com
```

#### Using Other Email Providers:
- **SendGrid**: Use `smtp.sendgrid.net` with API key
- **Outlook**: Use `smtp-mail.outlook.com`
- **Custom SMTP**: Update host/port accordingly

### 3. Running the Server

**Development (with auto-reload):**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### POST `/api/contact`
Submits a contact form and sends emails

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+919876543210",
  "company": "Tech Corp",
  "service": "IT Services",
  "subject": "Project Inquiry",
  "message": "Hello, I'm interested in your services..."
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

**Error Response:**
```json
{
  "success": false,
  "error": "Invalid email format"
}
```

### GET `/health`
Health check endpoint

**Response:**
```json
{
  "status": "Server is running"
}
```

## Features
✅ Email validation
✅ Phone validation (Indian numbers)
✅ Sends notification to admin
✅ Sends confirmation to user
✅ CORS enabled for frontend
✅ Environment-based configuration
✅ Error handling and logging

## Troubleshooting

### Connection Refused Error
- Ensure backend is running on port 5000
- Check if port is already in use: `netstat -ano | findstr :5000`

### Email Not Sending
- Verify SMTP credentials in `.env`
- Check Gmail App Password is correct
- Ensure 2FA is enabled (for Gmail)
- Check email logs: `npm run dev` shows detailed errors

### CORS Errors
- Frontend must be on `http://localhost:5173`
- Update `CORS_ORIGIN` in `.env` if different
- Restart backend after changing `.env`

## Next Steps
1. Run backend: `npm run dev`
2. In another terminal, run frontend: `npm run dev` (from root)
3. Test form submission on Contact page
4. Check backend console for logs
