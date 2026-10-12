interface InfoItemProps {
  label: string;
  value: string | number;
  highlight?: boolean;
}

export function InfoItem({
  label,
  value,
  highlight = false,
}: InfoItemProps) {
  return (
    <div className="group rounded-lg p-3 transition hover:bg-slate-50">
      <p className="mb-1 text-xs font-medium uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <p
        className={`text-sm font-medium ${
          highlight ? "text-indigo-600" : "text-slate-700"
        }`}
      >
        {value || "—"}
      </p>
    </div>
  );
}