// services/statusEmailService.js
import transporter from "../config/mail.js";

export async function sendStatusUpdateEmail(client, agent, noi) {
  const clientName =
    `${client.prefix} ${client.firstName} ${client.lastName}`.trim();
  const agentName = `${agent.firstName} ${agent.lastName}`.trim();
  const status = noi.status;

  const statusConfig = {
    Pending: {
      bg: "#FFFBEB",
      border: "#F59E0B",
      text: "#D97706",
      label: "Pending",
      greeting: "Your notice is being processed",
      message:
        "Your Notice of Intimation application has been received and is awaiting action.",
    },
    "In Progress": {
      bg: "#EFF6FF",
      border: "#3B82F6",
      text: "#2563EB",
      label: "In Progress",
      greeting: "Your notice is in progress",
      message:
        "Your Notice of Intimation is currently being processed by our team.",
    },
    Completed: {
      bg: "#ECFDF5",
      border: "#10B981",
      text: "#059669",
      label: "Completed",
      greeting: "Your notice has been completed",
      message:
        "Your Notice of Intimation application has been successfully completed.",
    },
  };

  const s = statusConfig[status] || statusConfig.Pending;

  const formatAmount = (n) =>
    Number(n || 0).toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    });

  // const showBill = status === true;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background:#F1F5F9;font-family:Arial,Helvetica,sans-serif;">
  <div style="max-width:650px;margin:30px auto;background:#FFFFFF;border-radius:12px;overflow:hidden;box-shadow:0 3px 15px rgba(0,0,0,0.06);">

    <!-- HEADER -->
    <div style="background:#1E293B;padding:30px 28px;text-align:center;">
      <h1 style="margin:0;color:#FFFFFF;font-size:22px;font-weight:600;">Notice of Intimation</h1>
      <p style="margin:6px 0 0;color:#94A3B8;font-size:13px;">Status Update Notification</p>
    </div>

    <!-- BODY -->
    <div style="padding:32px 28px;">
      <h2 style="margin:0 0 12px;color:#0F172A;font-size:20px;font-weight:600;">
        Hello ${clientName},
      </h2>

      <p style="margin:0 0 14px;color:#475569;font-size:14px;line-height:1.7;">
        ${s.greeting}. ${s.message}
      </p>

      <!-- STATUS -->
      <div style="margin:22px 0;padding:14px 18px;background:${s.bg};border-left:4px solid ${s.border};border-radius:6px;">
        <div style="color:#64748B;font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">
          Current Status
        </div>
        <strong style="color:${s.text};font-size:16px;font-weight:600;">
          ${s.label}
        </strong>
      </div>

      <!-- DETAILS -->
      <table width="100%" cellpadding="10" cellspacing="0" style="border-collapse:collapse;">
        <tr>
          <td style="color:#64748B;font-size:13px;">Client</td>
          <td style="text-align:right;font-weight:600;color:#0F172A;font-size:13px;">${clientName}</td>
        </tr>
        <tr>
          <td style="color:#64748B;font-size:13px;border-top:1px solid #F1F5F9;">Agent</td>
          <td style="text-align:right;font-weight:600;color:#0F172A;font-size:13px;border-top:1px solid #F1F5F9;">${agentName}</td>
        </tr>
        <tr>
          <td style="color:#64748B;font-size:13px;border-top:1px solid #F1F5F9;">Loan Amount</td>
          <td style="text-align:right;font-weight:600;color:#0F172A;font-size:13px;border-top:1px solid #F1F5F9;">${formatAmount(noi.loanAmount)}</td>
        </tr>
      </table>

      <!-- Bill Summary -- always shown -- -->
      <h3 style="margin:28px 0 12px;color:#0F172A;font-size:15px;font-weight:600;">Bill Summary</h3>
      <table width="100%" cellpadding="12" cellspacing="0" style="border-collapse:collapse;border:1px solid #E2E8F0;border-radius:8px;overflow:hidden;">
        <tr style="background:#F8FAFC;">
          <td style="font-weight:600;color:#475569;font-size:13px;">Description</td>
          <td style="text-align:right;font-weight:600;color:#475569;font-size:13px;">Amount</td>
        </tr>
        <tr>
          <td style="border-top:1px solid #E2E8F0;color:#475569;font-size:13px;">0.3% Challan</td>
          <td style="text-align:right;border-top:1px solid #E2E8F0;color:#0F172A;font-size:13px;font-weight:500;">${formatAmount(noi.challan03)}</td>
        </tr>
        <tr>
          <td style="border-top:1px solid #E2E8F0;color:#475569;font-size:13px;">0.5% Challan</td>
          <td style="text-align:right;border-top:1px solid #E2E8F0;color:#0F172A;font-size:13px;font-weight:500;">${formatAmount(noi.challan05)}</td>
        </tr>
        <tr>
          <td style="border-top:1px solid #E2E8F0;color:#475569;font-size:13px;">DHC Challan</td>
          <td style="text-align:right;border-top:1px solid #E2E8F0;color:#0F172A;font-size:13px;font-weight:500;">${formatAmount(noi.dhc)}</td>
        </tr>
        <tr>
          <td style="border-top:1px solid #E2E8F0;color:#475569;font-size:13px;">Intimation Charges</td>
          <td style="text-align:right;border-top:1px solid #E2E8F0;color:#0F172A;font-size:13px;font-weight:500;">${formatAmount(noi.intimationCharges)}</td>
        </tr>
        <tr style="background:#F8FAFC;">
          <td style="border-top:2px solid #1E293B;padding:14px 12px;font-weight:700;font-size:14px;color:#0F172A;">Total Bill</td>
          <td style="border-top:2px solid #1E293B;padding:14px 12px;text-align:right;font-weight:700;font-size:14px;color:#4F46E5;">${formatAmount(noi.totalAmount)}</td>
        </tr>
      </table>
      
     <!-- Closing message -->
      <p style="margin:24px 0 0;color:#475569;font-size:13px;line-height:1.7;">
        ${
          status === "Completed"
            ? "Thank you for completing this process with us."
            : "We will keep you updated on every step of the process."
        }
      </p>
    </div>

    <!-- FOOTER -->
    <div style="background:#F8FAFC;padding:22px 28px;text-align:center;border-top:1px solid #E2E8F0;">
      <p style="margin:0;color:#1E293B;font-weight:600;font-size:13px;">Notice of Intimation Management</p>
      <p style="margin:6px 0 0;color:#94A3B8;font-size:11px;">This is an automated email. Please do not reply.</p>
      <p style="margin:10px 0 0;color:#CBD5E1;font-size:10px;">© ${new Date().getFullYear()} Notice of Intimation Management System</p>
    </div>
  </div>
</body>
</html>
  `;

  await transporter.sendMail({
    from: `"Notice of Intimation" <${process.env.EMAIL_USER}>`,
    to: `${client.email}, ${agent.email}`, // ✅ Both in To
    subject: `Notice of Intimation ${s.label} — ${clientName}`,
    html,
  });
}
