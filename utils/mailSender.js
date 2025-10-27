const nodemailer = require("nodemailer")

// const mailSender = async (email, title, body) => {
//   try {
//     // Debug environment variables
//     console.log("Mail configuration:", {
//       host: process.env.MAIL_HOST,
//       user: process.env.MAIL_USER,
//       pass: process.env.MAIL_PASS ? "***configured***" : "NOT SET"
//     });

//     if (!process.env.MAIL_HOST || !process.env.MAIL_USER || !process.env.MAIL_PASS) {
//       throw new Error("Email configuration is incomplete. Please check MAIL_HOST, MAIL_USER, and MAIL_PASS environment variables.");
//     }

//     let transporter = nodemailer.createTransport({
//       service: 'gmail', // Use Gmail service
//       host: 'smtp.gmail.com',
//       port: 465,
//       secure: true, // true for 465, false for other ports
//       auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS, // This should be your App Password, not regular password
//       },
//       tls: {
//         rejectUnauthorized: false
//       }
//     })

//     // Test the connection before sending
//     console.log("Testing SMTP connection...");
//     try {
//       await transporter.verify();
//       console.log("SMTP connection verified successfully!");
//     } catch (error) {
//       console.error("SMTP connection failed:", error);
//       throw new Error(`SMTP connection failed: ${error.message}`);
//     }

//     let info = await transporter.sendMail({
//       from: `"Ex-Libris" <${process.env.MAIL_USER}>`, // sender address
//       to: `${email}`, // list of receivers
//       subject: `${title}`, // Subject line
//       html: `${body}`, // html body
//     })
    
//     // Debug the full response object
//     console.log("Full mail response object:", JSON.stringify(info, null, 2));
//     console.log("Response property:", info.response);
//     console.log("MessageId:", info.messageId);
//     console.log("Accepted recipients:", info.accepted);
//     console.log("Rejected recipients:", info.rejected);
    
//     return info
//   } catch (error) {
//     console.log(error.message)
//     return error.message
//   }
// }

// const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465, // or 587
      secure: true, // true for port 465, false for 587
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"Ex-Libris" <${process.env.MAIL_USER}>`,
      to: email,
      subject: title,
      html: body,
    });

    console.log("✅ Email sent:", info.response);
    return info;
  } catch (error) {
    console.error("❌ Error sending email:", error.message);
    throw error;
  }
};

module.exports = mailSender;


// module.exports = mailSender
