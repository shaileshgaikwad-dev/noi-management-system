import transporter from "../config/mail.js";

export async function agentRegistration(agent) {
  const currentYear = new Date().getFullYear();

  await transporter.sendMail({
    from: `"Notice of Intimation Management" <${process.env.EMAIL_USER}>`,
    to: agent.email,
    subject: "Welcome to Notice of Intimation Management",
    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Notice of Intimation Management</title>
</head>
<body style="margin:0;padding:0;background:#f0f4f8;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">

  <!-- Main Container -->
  <table align="center" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;margin:40px auto;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #dce2e8;box-shadow:0 2px 8px rgba(0,0,0,0.04);">
    <tr>
      <td style="padding:0;">

        <!-- ========== HEADER ========== -->
        <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 40px 24px;border-bottom:1px solid #e8edf3;background:#fafcfe;">
          <tr>
            <td>
              <h1 style="margin:0;color:#0f172a;font-size:22px;font-weight:600;letter-spacing:-0.3px;">
                Notice of Intimation Management
              </h1>
              <p style="margin:4px 0 0;color:#64748b;font-size:14px;font-weight:400;">
                Professional Notice of Intimation Services
              </p>
            </td>
          </tr>
        </table>

        <!-- ========== BODY ========== -->
        <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px;">
          <tr>
            <td>

              <!-- Greeting -->
              <h2 style="margin:0 0 4px;color:#0f172a;font-size:17px;font-weight:600;">
                Hi ${agent.firstName ? agent.firstName.toUpperCase() : "AGENT"} ${agent.lastName ? agent.lastName.toUpperCase() : ""},
              </h2>
              <p style="margin:0 0 20px;color:#475569;font-size:15px;line-height:1.7;">
                Thank you for choosing <strong style="color:#0f172a;">Notice of Intimation Management</strong>.
                We're pleased to welcome you as a trusted partner.
              </p>

              <!-- Intro Card -->
              <div style="background:#f1f5f9;border-radius:8px;padding:18px 22px;margin-bottom:20px;border-left:4px solid #2563eb;border:1px solid #e2e8f0;">
                <p style="margin:0;color:#0f172a;font-size:15px;line-height:1.8;">
                  <strong>Shailesh Gaikwad</strong> will personally manage all
                  <strong>Notice of Intimation (Notice of Intimation)</strong> filings for your clients —
                  with precision, speed, and full compliance.
                </p>
              </div>

              <!-- Services -->
              <p style="margin:0 0 12px;color:#0f172a;font-size:14px;font-weight:600;">
                We Provide All Types of Online Services
              </p>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:20px;background:#fafcfe;border-radius:8px;border:1px solid #e8edf3;">
                <tr>
                  <td style="padding:10px 16px;color:#475569;font-size:14px;line-height:1.8;border-bottom:1px solid #e8edf3;">
                    • Bank &amp; NBFC Notice of Intimation (Notice of Intimation) Filings
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 16px;color:#475569;font-size:14px;line-height:1.8;border-bottom:1px solid #e8edf3;">
                    • Complete Documentation &amp; Verification Support
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 16px;color:#475569;font-size:14px;line-height:1.8;border-bottom:1px solid #e8edf3;">
                    • Institutional Coordination &amp; Real-Time Tracking
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 16px;color:#475569;font-size:14px;line-height:1.8;border-bottom:1px solid #e8edf3;">
                    • Competitive &amp; Transparent Fee Structure
                  </td>
                </tr>
                <tr>
                  <td style="padding:10px 16px;color:#475569;font-size:14px;line-height:1.8;">
                    • 24/7 Dedicated Support &amp; Assistance
                  </td>
                </tr>
              </table>

              <!-- Trust Statement -->
              <div style="background:#eff6ff;border-radius:8px;padding:14px 18px;margin-bottom:20px;border:1px solid #bfdbfe;">
                <p style="margin:0;color:#1e40af;font-size:14px;line-height:1.7;">
                  💡 <strong>You can rely on us</strong> for end-to-end execution with minimal charges and complete transparency.
                </p>
              </div>

              <!-- Contact -->
              <div style="background:#f8fafc;border-radius:8px;padding:16px 20px;margin-bottom:20px;border:1px solid #e2e8f0;">
                <p style="margin:0 0 6px;color:#0f172a;font-size:14px;font-weight:600;">
                  📬 Contact
                </p>
                <p style="margin:3px 0;color:#475569;font-size:14px;">
                  📞 <a href="tel:+919545662596" style="color:#2563eb;text-decoration:none;font-weight:500;">+91 9545662596</a>
                </p>
                <p style="margin:3px 0;color:#475569;font-size:14px;">
                  ✉️ <a href="mailto:officialnoimanagement@gmail.com" style="color:#2563eb;text-decoration:none;font-weight:500;">officialnoimanagement@gmail.com</a>
                </p>
              </div>

              <!-- Closing -->
              <p style="margin:0 0 2px;color:#0f172a;font-size:15px;font-weight:500;">
                Looking forward to a successful partnership.
              </p>
              <p style="margin:0;color:#475569;font-size:15px;line-height:1.7;">
                Regards,<br>
                <strong style="color:#0f172a;">Shailesh Gaikwad</strong>
              </p>

            </td>
          </tr>
        </table>

        <!-- ========== FOOTER ========== -->
        <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;padding:16px 40px;border-top:1px solid #e2e8f0;">
          <tr>
            <td style="text-align:center;">
              <p style="margin:0;color:#94a3b8;font-size:12px;line-height:1.6;">
                &copy; ${currentYear} Notice of Intimation Management. All rights reserved.
              </p>
              <p style="margin:2px 0 0;color:#94a3b8;font-size:12px;">
                This is an automated notification. Please do not reply directly.
              </p>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>

</body>
</html>
    `,
  });

  console.log(`✅ Professional welcome email sent to ${agent.email}`);
}
