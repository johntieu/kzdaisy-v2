# EmailJS Setup Guide

This guide will help you set up EmailJS to enable the contact form to send emails directly to your inbox.

## Quick Setup (5 minutes)

### 1. Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Add an Email Service

1. In your EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection instructions
5. Copy your **Service ID** (e.g., `service_abc123`)

### 3. Create an Email Template

1. Click "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Message from {{user_name}}

From: {{user_name}}
Email: {{user_email}}
Subject: {{subject}}

Message:
{{message}}
```

4. Save and copy your **Template ID** (e.g., `template_xyz789`)

### 4. Get Your Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (e.g., `YOUR_PUBLIC_KEY`)

### 5. Update Your Code

Open `src/components/Contact.jsx` and replace these lines (around line 18-20):

```javascript
const serviceId = 'YOUR_SERVICE_ID'     // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID'   // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY'     // Replace with your Public Key
```

### 6. Test the Form

1. Run your dev server: `npm run dev`
2. Navigate to the Contact page
3. Fill out the form and click "Send Message"
4. Check your email inbox!

## Form Field Names

The form uses these field names (don't change them in the form):
- `user_name` - Sender's name
- `user_email` - Sender's email
- `subject` - Message subject
- `message` - Message content

Make sure your EmailJS template uses these same variable names: `{{user_name}}`, `{{user_email}}`, `{{subject}}`, `{{message}}`

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email templates
- 1 email service

This is perfect for a portfolio contact form!

## Troubleshooting

**Form shows error message:**
- Check that your Service ID, Template ID, and Public Key are correct
- Verify your email service is connected in EmailJS dashboard
- Check browser console for error details

**Emails not arriving:**
- Check your spam folder
- Verify the template has the correct variable names
- Ensure the "To Email" is set in your EmailJS template settings

## Alternative: Using Azure Functions

Since you're using Azure Static Web Apps, you could also set up an Azure Function for email sending. This would require:
1. Creating an Azure Function
2. Using SendGrid or Azure Communication Services
3. Updating the form to call your function endpoint

Let me know if you'd like help setting this up instead!
