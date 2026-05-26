# Contact Form Backend Setup - Quick Start

## What Was Changed
The contact form now uses a **backend API** instead of EmailJS for better security and control.

## Quick Setup (5 minutes)

### Step 1: Install Backend Dependencies
```bash
cd backend
npm install
```

### Step 2: Configure Email (Gmail Example)
1. Open `backend/.env`
2. Update email credentials:
```env
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
RECIPIENT_EMAIL=nallavikram333779@gmail.com
```

**For Gmail:**
- Enable 2FA: https://myaccount.google.com/security
- Generate App Password: https://myaccount.google.com/apppasswords
- Copy the 16-character password to `.env` as `SMTP_PASS`

### Step 3: Run Backend & Frontend

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```
Expected: `✓ Server running on http://localhost:5000`

**Terminal 2 - Frontend:**
```bash
npm run dev
```

### Step 4: Test the Form
1. Visit http://localhost:5173
2. Go to Contact page
3. Fill form and submit
4. Check backend console for success/error logs

## File Structure
```
/
├── backend/
│   ├── server.js           ← Main API server
│   ├── package.json
│   ├── .env               ← Email credentials (create from .env.example)
│   └── README.md
├── src/
│   └── pages/
│       └── Contact.jsx    ← Updated to use backend API
├── .env                   ← Frontend config (VITE_API_URL)
└── .gitignore             ← Updated to exclude .env files
```

## What Works Now
✅ Contact form submits to backend  
✅ Emails sent to admin with form details  
✅ Confirmation email sent to user  
✅ Form validation on server-side  
✅ Error messages displayed to user  
✅ No EmailJS credentials needed  

## Troubleshooting

### "Failed to submit form" Error
- Check backend is running: `http://localhost:5000/health`
- Check `.env` has correct email credentials
- Check backend console for detailed error

### Email Not Sending
- Gmail: Verify app password is correct (16 chars)
- Gmail: Ensure 2FA is enabled
- Other email: Verify SMTP host/port settings

### CORS Errors
- Frontend must be on `http://localhost:5173`
- Backend must be on `http://localhost:5000`
- Both servers must be running

## Production Deployment
For production:
1. Use environment variables from hosting platform
2. Update CORS_ORIGIN in backend `.env`
3. Use SSL (https) for SMTP connections
4. Set `NODE_ENV=production`
5. Use a production email service (SendGrid, Mailgun, etc.)

## More Details
See [backend/README.md](backend/README.md) for full documentation.
