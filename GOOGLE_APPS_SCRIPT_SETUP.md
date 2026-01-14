# Google Apps Script Setup Guide

## 📧 How Google Apps Script Works (Under the Hood)

### **Architecture Overview:**

```
User's Browser → Google Apps Script Web App → Gmail API → Your Gmail Inbox
```

### **Step-by-Step Flow:**

1. **User Submits Form** (Frontend)
   - Form data is collected: `name`, `email`, `message`
   - Data is sent to Google Apps Script via HTTPS POST request

2. **Google Apps Script** (Google's Server)
   - Receives the POST request
   - Extracts form data (name, email, message)
   - Uses `GmailApp.sendEmail()` to send email directly from your Gmail account
   - Returns success/error response

3. **Gmail** (Your Email Account)
   - Receives the email sent by the script
   - Delivers it to your inbox (clairechenszeying@gmail.com)

### **Why Google Apps Script?**

✅ **100% Free**: No limits, no costs  
✅ **Uses Your Gmail**: Direct integration with your existing email  
✅ **No API Keys**: Just deploy and get a URL  
✅ **Secure**: Runs on Google's infrastructure  
✅ **No Third-Party**: Everything stays within Google ecosystem  
✅ **Easy Setup**: 5-minute setup process  

---

## 🚀 Setup Instructions (5 Minutes)

### **Step 1: Create Google Apps Script**

1. Go to [https://script.google.com/](https://script.google.com/)
2. Sign in with your Gmail account (clairechenszeying@gmail.com)
3. Click **"New Project"** (or the **"+"** button)

### **Step 2: Copy the Script Code**

1. Delete the default `myFunction()` code
2. Copy and paste this code into the editor:

```javascript
function doPost(e) {
  try {
    // Parse the JSON data from the form
    const data = JSON.parse(e.postData.contents);
    const { name, email, message } = data;

    // Your email address (where you want to receive messages)
    const recipientEmail = 'clairechenszeying@gmail.com';

    // Email subject
    const subject = `New Contact Form Message from ${name}`;

    // Email body (HTML formatted)
    const body = `
      <h2>New Contact Form Submission</h2>
      <p><strong>From:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p><em>This email was sent from your portfolio contact form.</em></p>
    `;

    // Send the email using GmailApp
    GmailApp.sendEmail(
      recipientEmail,
      subject,
      '', // Plain text version (empty, using HTML)
      {
        htmlBody: body,
        replyTo: email, // So you can reply directly to the sender
      }
    );

    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({ success: true, message: 'Email sent successfully' })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click **"Save"** (💾 icon) or press `Cmd+S` (Mac) / `Ctrl+S` (Windows)
4. Name your project: "Portfolio Contact Form" (or any name you like)

### **Step 3: Deploy as Web App**

1. Click **"Deploy"** → **"New deployment"**
2. Click the **gear icon** ⚙️ next to "Select type"
3. Choose **"Web app"**
4. Configure the deployment:
   - **Description**: "Contact Form Handler" (optional)
   - **Execute as**: **"Me"** (your email)
   - **Who has access**: **"Anyone"** (important! This allows your website to call it)
5. Click **"Deploy"**
6. **Authorize the script**:
   - Click **"Authorize access"**
   - Choose your Google account
   - Click **"Advanced"** → **"Go to Portfolio Contact Form (unsafe)"**
   - Click **"Allow"** to grant permissions
7. **Copy the Web App URL** - This is your script URL! It looks like:
   ```
   https://script.google.com/macros/s/AKfycby.../exec
   ```

### **Step 4: Add URL to Your Project**

1. Create a `.env` file in your project root (if it doesn't exist)
2. Add this line:
   ```env
   VITE_GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```
   Replace `YOUR_SCRIPT_ID` with your actual script URL

3. **Restart your dev server**:
   ```bash
   npm run dev
   ```

### **Step 5: Test It!**

1. Fill out the contact form on your website
2. Submit it
3. Check your Gmail inbox (clairechenszeying@gmail.com)
4. You should receive the email! 🎉

---

## 🔧 How It Works in the Code

### **Frontend (Contact.jsx)**

```javascript
const scriptURL = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;

fetch(scriptURL, {
  method: 'POST',
  mode: 'no-cors', // Required for Google Apps Script
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: form.name,
    email: form.email,
    message: form.message,
  }),
});
```

### **Backend (Google Apps Script)**

```javascript
function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  // Extract: name, email, message
  // Send email using GmailApp.sendEmail()
  // Return success/error response
}
```

### **Why `no-cors` Mode?**

Google Apps Script Web Apps don't support CORS headers, so we use `no-cors` mode. This means:
- ✅ The request is sent successfully
- ❌ We can't read the response (but that's okay - if no error, it worked!)

---

## 🐛 Troubleshooting

### **"Contact form is not configured" Error**
- Make sure you created the `.env` file
- Check that `VITE_GOOGLE_APPS_SCRIPT_URL` is set correctly
- Restart your dev server after creating `.env`

### **Email Not Received**
- Check your spam folder
- Verify the script is deployed correctly
- Check Google Apps Script execution logs:
  1. Go to [script.google.com](https://script.google.com/)
  2. Open your project
  3. Click **"Executions"** (clock icon) to see logs

### **"Authorization Required" Error**
- Make sure you authorized the script when deploying
- Re-deploy and authorize again if needed

### **Script Not Working**
- Check the script execution logs in Google Apps Script
- Make sure `doPost` function exists (not `doGet`)
- Verify the script is deployed as "Web app" (not "API Executable")

---

## 🔒 Security Considerations

### **Is This Secure?**

✅ **Yes!** Here's why:
- The script URL is public, but that's okay - it only sends emails to YOUR address
- Google Apps Script validates requests
- You control who can send emails (through form validation)
- No sensitive data is exposed

### **Spam Protection Tips:**

1. **Add reCAPTCHA** (optional, but recommended for production)
2. **Rate limiting**: Google Apps Script has built-in quotas
3. **Form validation**: Already implemented in your React form
4. **Email filtering**: Set up Gmail filters to organize contact form emails

---

## 📊 Google Apps Script Quotas (Free Tier)

- **Daily email sending**: 100 emails/day
- **Execution time**: 6 minutes max per execution
- **Concurrent executions**: 30

**For a portfolio contact form, this is more than enough!**

---

## 💡 Pro Tips

1. **Customize Email Format**: Edit the `body` variable in the script to match your style
2. **Add CC/BCC**: You can add `cc` or `bcc` in `GmailApp.sendEmail()` options
3. **Store Submissions**: Add Google Sheets integration to log all submissions
4. **Auto-Reply**: Add code to send auto-reply to the sender
5. **Email Templates**: Create different templates for different form types

---

## 🎯 Quick Reference

**Script URL Format:**
```
https://script.google.com/macros/s/AKfycby.../exec
```

**Environment Variable:**
```env
VITE_GOOGLE_APPS_SCRIPT_URL=your_script_url_here
```

**Required Function:**
```javascript
function doPost(e) { ... }
```

**Email Function:**
```javascript
GmailApp.sendEmail(recipientEmail, subject, '', { htmlBody: body, replyTo: email });
```

---

## 📚 Additional Resources

- [Google Apps Script Documentation](https://developers.google.com/apps-script)
- [GmailApp.sendEmail() Reference](https://developers.google.com/apps-script/reference/gmail/gmail-app#sendEmail(String,String,String,Object))
- [Web Apps Guide](https://developers.google.com/apps-script/guides/web)

---

## ✅ Checklist

- [ ] Created Google Apps Script project
- [ ] Copied and pasted the script code
- [ ] Saved the project
- [ ] Deployed as Web App
- [ ] Authorized the script
- [ ] Copied the Web App URL
- [ ] Added URL to `.env` file
- [ ] Restarted dev server
- [ ] Tested the form
- [ ] Received test email in Gmail

**You're all set! 🎉**

