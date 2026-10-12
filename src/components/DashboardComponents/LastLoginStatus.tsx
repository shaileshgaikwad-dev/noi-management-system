export function LastLogin() {
  const lastLoginAt = localStorage.getItem("lastLoginAt");
  const name = localStorage.getItem("name");

  const greetingMessage = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) return "Good morning";
    if (hour >= 12 && hour < 17) return "Good afternoon";
    return "Good Evening";
  };

  const formattedLastLogin = lastLoginAt
    ? new Date(lastLoginAt).toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      })
    : null;

  return (
    <p className="px-4 py-3 wrap-break-word font-semibold text-slate-600 sm:px-6 sm:py-4 lg:max-w-2xl">
      {" "}
      {greetingMessage()},{" "}
      <span className="font-semibold text-indigo-600 uppercase">{name}</span>,{" "}
      Your last login was on{" "}
      <span className="font-semibold text-slate-600">{formattedLastLogin}</span>
      .
    </p>
  );
}
