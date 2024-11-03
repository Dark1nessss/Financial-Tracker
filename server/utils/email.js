const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  // 1) Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // 2) Define the HTML template for the email
  const htmlContent = `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            color: #ffffff;
            background-color: #1c1c1c;
            margin: 0;
            padding: 0;
          }
          .email-container {
            max-width: 600px;
            margin: auto;
            background-color: #1c1c1c;
            color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          }
          .header {
            background-color: #1c1c1c;
            text-align: center;
            padding: 30px 20px;
          }
          .header img {
            width: 50px;
            height: auto;
            transition: transform 0.3s;
            display: block;
            margin: auto;
          }
          .header img:hover {
            transform: rotate(45deg);
          }
          .content {
            padding: 20px 30px;
          }
          .content h2 {
            color: #C1F000;
            font-size: 24px;
            margin-bottom: 10px;
          }
          .content p {
            color: #e0e0e0;
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 20px;
          }
          .footer {
            padding: 20px 30px;
            background-color: #191919;
            color: #ffffff;
            text-align: center;
            font-size: 12px;
          }
          .footer a {
            color: #C1F000;
            text-decoration: none;
            margin: 0 5px;
          }
          .footer p {
            margin: 10px 0;
          }
          .social-icons {
            margin-top: 10px;
          }
          .social-icons a {
            margin: 0 5px;
            display: inline-block;
          }
          .social-icons img {
            width: 24px;
            height: 24px;
            transition: transform 0.3s;
          }
          .social-icons img:hover {
            transform: scale(1.1);
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <!-- Logo and Header -->
          <div class="header">
            <img src="https://lh3.googleusercontent.com/d/1Y504k4tXRBQU5awKgL3SZSPEFiG1i-JL" alt="YourBanK Logo" />
          </div>

          <!-- Content Section -->
          <div class="content">
            <h2>Welcome to YourBanK</h2>
            <p>Dear customer,</p>
            <p>
              At YourBanK, we’re dedicated to empowering you on your financial journey. We offer comprehensive banking solutions to help you achieve your financial goals, with a focus on security, reliability, and innovation.
            </p>
            <p>${options.message}</p>
          </div>

          <!-- Footer Section -->
          <div class="footer">
            <p>&copy; 2024 YourBanK. All rights reserved.</p>
            <p>
              <a href="${process.env.BASE_URL}/privacy-policy">Privacy Policy</a> |
              <a href="${process.env.BASE_URL}/terms-of-service">Terms of Service</a>
            </p>
            <div class="social-icons">
              <a href="https://facebook.com"><img src="https://lh3.googleusercontent.com/d/1_TzAccaEy8O5JRrYwU72_OdyN5KevOTB" alt="Facebook" /></a>
              <a href="https://twitter.com"><img src="https://lh3.googleusercontent.com/d/1xD2ZFXEd5YVMyWdfzJ7rYBrCmOOn7ML_" alt="Twitter" /></a>
              <a href="https://linkedin.com"><img src="https://lh3.googleusercontent.com/d/1omo8c_5S9pG2-0jIzhZt2kglRfTTYy4W" alt="LinkedIn" /></a>
            </div>
            <p>Need assistance? <a href="mailto:support@yourbank.pt">Contact Us</a></p>
          </div>
        </div>
      </body>
    </html>
  `;

  // 3) Define the email options
  const mailOptions = {
    from: "YourBanK Support <support@yourbank.pt>",
    to: options.email,
    subject: options.subject,
    text: options.message,
    html: htmlContent, // Adding the HTML content here
  };

  // 4) Actually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;