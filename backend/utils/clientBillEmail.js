import transporter from "../config/mail.js";

export async function sendClientBillEmail(agent, client, noi) {
  const clientName = `${client.prefix} ${client.firstName} ${client.lastName}`;
  const agentName = `${agent.firstName} ${agent.lastName}`;

  // Format currency
  const formatAmount = (amount) => {
    return Number(amount).toLocaleString("en-IN", {
      currency: "INR",
      style: "currency",
    });
  };

  // Current status
  const currentStatus = noi.status || "Pending";

  // Status colors
  const statusStyles = {
    Pending: {
      background: "#FFFBEB",
      border: "#F59E0B",
      text: "#D97706",
      label: "Pending",
    },
    "In Progress": {
      background: "#EFF6FF",
      border: "#3B82F6",
      text: "#2563EB",
      label: "In Progress",
    },
    Completed: {
      background: "#ECFDF5",
      border: "#10B981",
      text: "#059669",
      label: "Completed",
    },
  };

  const statusStyle = statusStyles[currentStatus] || statusStyles.Pending;

  await transporter.sendMail({
    from: `"Notice of Intimation" <${process.env.EMAIL_USER}>`,
    to: [client.email, agent.email],
    subject: `Notice of Intimation Bill - ${client.firstName} ${client.lastName}`,

    html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Notice of Intimation Bill</title>
</head>
<body style="margin:0; padding:0; background:#F1F5F9; font-family:Arial, Helvetica, sans-serif;">
  <div style="max-width:650px; margin:30px auto; background:#FFFFFF; border-radius:12px; overflow:hidden; box-shadow:0 3px 15px rgba(0,0,0,0.06);">

    <!-- HEADER -->
    <div style="background:#1E293B; padding:30px 28px; text-align:center;">
      <h1 style="margin:0; color:#FFFFFF; font-size:22px; font-weight:600; letter-spacing:0.3px;">
        Notice of Intimation
      </h1>
      <p style="margin:6px 0 0; color:#94A3B8; font-size:13px;">
        Management & Documentation Services
      </p>
    </div>

    <!-- CONTENT -->
    <div style="padding:32px 28px;">

      <h2 style="margin:0 0 12px; color:#0F172A; font-size:20px; font-weight:600;">
        Hello ${clientName},
      </h2>

      <p style="margin:0 0 14px; color:#475569; font-size:14px; line-height:1.7;">
        Welcome to our Notice of Intimation service.
        Your Notice of Intimation application has been successfully registered with us.
      </p>

      <p style="margin:0 0 20px; color:#475569; font-size:14px; line-height:1.7;">
        Your application is being handled through
        <strong style="color:#0F172A;">${agentName}</strong>.
      </p>

      <!-- STATUS -->
      <div style="margin:22px 0; padding:14px 18px; background:${statusStyle.background}; border-left:4px solid ${statusStyle.border}; border-radius:6px;">
        <div style="color:#64748B; font-size:11px; font-weight:600; letter-spacing:0.5px; text-transform:uppercase; margin-bottom:4px;">
          Intimation Status
        </div>
        <strong style="color:${statusStyle.text}; font-size:16px; font-weight:600;">
          ${statusStyle.label}
        </strong>
      </div>

      <!-- CLIENT DETAILS -->
      <h3 style="margin:26px 0 12px; color:#0F172A; font-size:15px; font-weight:600;">
        Client Details
      </h3>

      <table width="100%" cellpadding="10" cellspacing="0" style="border-collapse:collapse;">
        <tr>
          <td style="color:#64748B; font-size:13px;">Client Name</td>
          <td style="text-align:right; font-weight:600; color:#0F172A; font-size:13px;">${clientName}</td>
        </tr>
        <tr>
          <td style="color:#64748B; font-size:13px; border-top:1px solid #F1F5F9;">Agent</td>
          <td style="text-align:right; font-weight:600; color:#0F172A; font-size:13px; border-top:1px solid #F1F5F9;">${agentName}</td>
        </tr>
        <tr>
          <td style="color:#64748B; font-size:13px; border-top:1px solid #F1F5F9;">Loan Amount</td>
          <td style="text-align:right; font-weight:600; color:#0F172A; font-size:13px; border-top:1px solid #F1F5F9;">${formatAmount(noi.loanAmount)}</td>
        </tr>
      </table>

      <!-- BILL SUMMARY -->
      <h3 style="margin:28px 0 12px; color:#0F172A; font-size:15px; font-weight:600;">
        Bill Summary
      </h3>

      <table width="100%" cellpadding="12" cellspacing="0" style="border-collapse:collapse; border:1px solid #E2E8F0; border-radius:8px; overflow:hidden;">
        <tr style="background:#F8FAFC;">
          <td style="font-weight:600; color:#475569; font-size:13px;">Description</td>
          <td style="text-align:right; font-weight:600; color:#475569; font-size:13px;">Amount</td>
        </tr>

        <tr>
          <td style="border-top:1px solid #E2E8F0; color:#475569; font-size:13px;">0.3% Challan</td>
          <td style="text-align:right; border-top:1px solid #E2E8F0; color:#0F172A; font-size:13px; font-weight:500;">${formatAmount(noi.challan03)}</td>
        </tr>

        <tr>
          <td style="border-top:1px solid #E2E8F0; color:#475569; font-size:13px;">0.5% Challan</td>
          <td style="text-align:right; border-top:1px solid #E2E8F0; color:#0F172A; font-size:13px; font-weight:500;">${formatAmount(noi.challan05)}</td>
        </tr>

        <tr>
          <td style="border-top:1px solid #E2E8F0; color:#475569; font-size:13px;">DHC Challan</td>
          <td style="text-align:right; border-top:1px solid #E2E8F0; color:#0F172A; font-size:13px; font-weight:500;">${formatAmount(noi.dhc)}</td>
        </tr>

        <tr>
          <td style="border-top:1px solid #E2E8F0; color:#475569; font-size:13px;">Intimation Charges</td>
          <td style="text-align:right; border-top:1px solid #E2E8F0; color:#0F172A; font-size:13px; font-weight:500;">${formatAmount(noi.intimationCharges)}</td>
        </tr>

        <!-- TOTAL -->
        <tr style="background:#F8FAFC;">
          <td style="border-top:2px solid #1E293B; padding:14px 12px; font-weight:700; font-size:14px; color:#0F172A;">
            Total Bill Amount
          </td>
          <td style="border-top:2px solid #1E293B; padding:14px 12px; text-align:right; font-weight:700; font-size:14px; color:#4F46E5;">
            ${formatAmount(noi.totalAmount)}
          </td>
        </tr>
      </table>

      <!-- MESSAGE -->
      <p style="margin:24px 0 0; color:#475569; font-size:13px; line-height:1.7;">
        We will keep you updated regarding the progress of your Notice of Intimation application.
        You will receive further communication when there is an update to your application status.
      </p>

      <p style="margin:12px 0 0; color:#475569; font-size:13px;">
        Thank you for choosing our service.
      </p>

    </div>

    <!-- FOOTER -->
    <div style="background:#F8FAFC; padding:22px 28px; text-align:center; border-top:1px solid #E2E8F0;">
      <p style="margin:0; color:#1E293B; font-weight:600; font-size:13px;">
        Notice of Intimation Management
      </p>
      <p style="margin:6px 0 0; color:#94A3B8; font-size:11px;">
        This is an automated email. Please do not reply directly to this email.
      </p>
      <p style="margin:10px 0 0; color:#CBD5E1; font-size:10px;">
        &copy; ${new Date().getFullYear()} Notice of Intimation Management System
      </p>
    </div>

  </div>
</body>
</html>
    `,
  });
}