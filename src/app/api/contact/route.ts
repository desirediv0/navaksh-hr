import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message, phone } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Navaksh Portal" <${process.env.FROM_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: `[ENQUIRY] ${subject || "Service Inquiry"} - ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            .email-container { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(15, 23, 42, 0.05); }
            .header { background-color: #0F172A; padding: 35px 20px; text-align: center; border-bottom: 4px solid #18A6D9; }
            .header h1 { color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: 1.5px; }
            .content { padding: 40px; color: #334155; line-height: 1.6; }
            .section-title { font-size: 13px; font-weight: 800; color: #4330A3; text-transform: uppercase; margin-bottom: 20px; border-bottom: 1px solid #f1f5f9; padding-bottom: 6px; letter-spacing: 1px; }
            .info-grid { display: table; width: 100%; margin-bottom: 30px; }
            .info-row { display: table-row; }
            .info-label { display: table-cell; padding: 10px 0; font-weight: 700; color: #64748b; width: 150px; font-size: 13px; border-bottom: 1px solid #f8fafc; }
            .info-value { display: table-cell; padding: 10px 0; color: #0F172A; font-size: 14px; border-bottom: 1px solid #f8fafc; font-weight: 500; }
            .message-box { background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 25px; margin-top: 10px; font-style: normal; color: #334155; border-left: 4px solid #18A6D9; border-radius: 4px; font-size: 14px; }
            .footer { background-color: #f8fafc; padding: 25px; text-align: center; color: #94a3b8; font-size: 11px; border-top: 1px solid #f1f5f9; }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="header">
              <h1>Navaksh HR Management</h1>
            </div>
            <div class="content">
              <div class="section-title">New Service Enquiry</div>
              
              <div class="info-grid">
                <div class="info-row">
                  <div class="info-label">Client Name:</div>
                  <div class="info-value">${name}</div>
                </div>
                <div class="info-row">
                  <div class="info-label">Email Address:</div>
                  <div class="info-value"><a href="mailto:${email}" style="color: #18A6D9; text-decoration: none; font-weight: 600;">${email}</a></div>
                </div>
                <div class="info-row">
                  <div class="info-label">Phone Number:</div>
                  <div class="info-value">${phone || "N/A"}</div>
                </div>
                <div class="info-row">
                  <div class="info-label">Subject:</div>
                  <div class="info-value" style="color: #4330A3; font-weight: 600;">${subject || "General Inquiry"}</div>
                </div>
                <div class="info-row">
                  <div class="info-label">Timestamp:</div>
                  <div class="info-value">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} (IST)</div>
                </div>
              </div>
 
              <div class="section-title">Client Message</div>
              <div class="message-box">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>
            <div class="footer">
              This is an automated notification from your website's contact portal.<br>
              &copy; ${new Date().getFullYear()} Navaksh HR Management Pvt. Ltd.
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
