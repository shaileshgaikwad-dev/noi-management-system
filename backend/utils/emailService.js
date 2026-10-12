import transporter from "../config/mail.js";

export async function LoginEmail(user) {
  await transporter.sendMail({
    from: `Notice of Intimation Management Team ,<${process.env.EMAIL_USER}>`,
    to: user.email,
    subject: "Successful Login - Notice of Management Management",
    html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Login Notification</title>
    </head>
    <body style="margin:0;padding:0;background:#f0f4f8;font-family:'Segoe UI',Arial,sans-serif;">

      <!-- Main Container -->
      <table align="center" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;margin:40px auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e2e8f0;box-shadow:0 10px 40px rgba(0,0,0,0.08);">
        <tr>
          <td style="padding:0;">

            <!-- Header with Gradient -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:linear-gradient(135deg,#0f172a 0%,#1e293b 100%);padding:32px 40px;text-align:center;">
              <tr>
                <td>
                  <div style="display:inline-block;background:rgba(255,255,255,0.10);padding:8px 20px;border-radius:50px;margin-bottom:12px;">
                    <span style="color:#94a3b8;font-size:12px;font-weight:600;letter-spacing:2px;text-transform:uppercase;">Secure Access</span>
                  </div>
                  <h1 style="margin:8px 0 4px;color:#ffffff;font-size:28px;font-weight:700;letter-spacing:-0.5px;">
                    Welcome Back!
                  </h1>
                  <p style="margin:0;color:#94a3b8;font-size:15px;">
                    You have successfully logged in to your dashboard
                  </p>
                </td>
              </tr>
            </table>

            <!-- Body -->
            <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px;">
              <tr>
                <td>

                  <!-- Greeting -->
                  <h2 style="margin:0 0 8px;color:#0f172a;font-size:22px;font-weight:600;">
                    Hello ${user.name} 👋
                  </h2>
                  <p style="margin:0 0 24px;color:#64748b;font-size:16px;line-height:1.7;">
                    Your admin account was successfully logged in to the NOI Management portal.
                  </p>

                  <!-- Info Cards -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc;border-radius:12px;border:1px solid #e2e8f0;margin-bottom:24px;">
                    <tr>
                      <td style="padding:20px 24px;border-bottom:1px solid #e2e8f0;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="color:#64748b;font-size:13px;font-weight:600;letter-spacing:0.5px;text-transform:uppercase;">
                              📧 Account
                            </td>
                            <td align="right" style="color:#0f172a;font-weight:600;font-size:15px;">
                              ${user.email}
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:20px 24px;border-bottom:1px solid #e2e8f0;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="color:#64748b;font-size:13px;font-weight:600;letter-spacing:0.5px;text-transform:uppercase;">
                              🕐 Login Time
                            </td>
                            <td align="right" style="color:#0f172a;font-weight:500;font-size:15px;">
                              ${new Date().toLocaleDateString("es-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true })}
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:20px 24px;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="color:#64748b;font-size:13px;font-weight:600;letter-spacing:0.5px;text-transform:uppercase;">
                              🔑 Session
                            </td>
                            <td align="right" style="color:#0f172a;font-weight:500;font-size:15px;">
                              <span style="display:inline-block;background:#dcfce7;color:#166534;padding:2px 14px;border-radius:50px;font-size:12px;font-weight:600;">Active</span>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>

                  <!-- Divider -->
                  <hr style="border:0;border-top:1px solid #e2e8f0;margin:8px 0 24px;" />

                  <!-- Footer -->
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td align="center" style="color:#94a3b8;font-size:13px;line-height:1.8;">
                        <p style="margin:0;">
                          This is an automated notification from <strong style="color:#64748b;">NOI Management</strong>
                        </p>
                        <p style="margin:4px 0 0;font-size:12px;">
                          © ${new Date().getFullYear()} NOI PROJECT. All rights reserved.
                        </p>
                      </td>
                    </tr>
                  </table>

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
}
