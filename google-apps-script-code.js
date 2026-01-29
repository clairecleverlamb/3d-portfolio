/**
 * Google Apps Script Code for Contact Form
 * 
 * INSTRUCTIONS:
 * 1. Go to https://script.google.com/
 * 2. Create a new project
 * 3. Delete the default code
 * 4. Copy and paste this entire file
 * 5. Save the project
 * 6. Deploy as Web App (see GOOGLE_APPS_SCRIPT_SETUP.md for details)
 */

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



