# EmailJS Setup Guide

## 📧 How EmailJS Works (Under the Hood)

### **Architecture Overview:**

```
User's Browser → EmailJS API → Your Email Service (Gmail/Outlook/etc.) → Your Inbox
```

### **Step-by-Step Flow:**

1. **User Submits Form** (Frontend)
   - Form data is collected: `name`, `email`, `message`
   - Data is sent to EmailJS API via HTTPS POST request

2. **EmailJS API** (Backend Service)
   - Receives the request with your credentials (Service ID, Template ID, Public Key)
   - Validates the request
   - Processes the email template (replaces variables like `{{from_name}}` with actual values)
   - Connects to your email service (Gmail, Outlook, etc.) using OAuth2 or SMTP
   - Sends the email on your behalf

3. **Email Service** (Gmail/Outlook/etc.)
   - Receives the email from EmailJS
   - Delivers it to your inbox

### **Why EmailJS?**

✅ **No Backend Required**: Works entirely from the frontend  
✅ **Secure**: Uses OAuth2 for email service authentication  
✅ **Free Tier**: 200 emails/month free  
✅ **Easy Setup**: No server configuration needed  
✅ **Template System**: Easy email formatting  

### **Security Considerations:**

- **Public Key**: Safe to expose in frontend code (it's public by design)
- **Service ID & Template ID**: Also safe to expose (they're not sensitive)
- **No Private Keys**: EmailJS handles authentication with your email provider securely

---

## 🚀 Setup Instructions

### **Step 1: Create EmailJS Account**

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### **Step 2: Add Email Service**

1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the OAuth2 authentication flow
5. **Copy the Service ID** (e.g., `service_abc123`)

### **Step 3: Create Email Template**

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. **Copy the Template ID** (e.g., `template_xyz789`)

### **Step 4: Get Public Key**

1. Go to **Account** → **General**
2. Find **Public Key** section
3. **Copy your Public Key** (e.g., `abcdefghijklmnop`)

### **Step 5: Configure Environment Variables**

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and fill in your values:
   ```env
   VITE_EMAILJS_SERVICE_ID=service_abc123
   VITE_EMAILJS_TEMPLATE_ID=template_xyz789
   VITE_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
   ```

3. **Important**: Restart your dev server after creating `.env`:
   ```bash
   npm run dev
   ```

### **Step 6: Test the Form**

1. Fill out the contact form on your website
2. Submit it
3. Check your email inbox for the message!

---

## 🔧 How It Works in the Code

### **Environment Variables (Vite)**

Vite uses `import.meta.env` to access environment variables:

```javascript
const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
```

**Note**: All Vite env variables must start with `VITE_` to be exposed to the client.

### **EmailJS Send Function**

```javascript
emailjs.send(
  serviceId,        // Which email service to use
  templateId,       // Which template to use
  {
    from_name: form.name,      // Template variable
    from_email: form.email,    // Template variable
    to_name: "Claire Chen",    // Template variable
    message: form.message,      // Template variable
  },
  publicKey         // Authentication key
)
```

### **Template Variables**

The object passed to `emailjs.send()` becomes available in your template as:
- `{{from_name}}` → `form.name`
- `{{from_email}}` → `form.email`
- `{{to_name}}` → `"Claire Chen"`
- `{{message}}` → `form.message`

---

## 🐛 Troubleshooting

### **"EmailJS Error" Alert**
- Check that all environment variables are set correctly
- Verify your Service ID, Template ID, and Public Key
- Make sure you've restarted the dev server after creating `.env`

### **Email Not Received**
- Check your spam folder
- Verify your email service is connected in EmailJS dashboard
- Check EmailJS dashboard for error logs

### **"Service ID not found"**
- Make sure your Service ID starts with `service_`
- Verify the service is active in EmailJS dashboard

---

## 📚 Additional Resources

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS React Guide](https://www.emailjs.com/docs/examples/reactjs/)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)

---

## 🔒 Security Best Practices

1. **Never commit `.env` file** (already in `.gitignore`)
2. **Use different keys for production** (set up production environment variables)
3. **Monitor your EmailJS usage** (free tier: 200 emails/month)
4. **Enable rate limiting** in EmailJS dashboard to prevent spam

---

## 💡 Pro Tips

- **Customize your template** with HTML for better formatting
- **Add reCAPTCHA** to prevent spam (optional)
- **Set up email notifications** in EmailJS dashboard for failed sends
- **Use EmailJS webhooks** for advanced integrations (optional)

