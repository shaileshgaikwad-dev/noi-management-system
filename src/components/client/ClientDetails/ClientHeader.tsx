interface IClientHeaderProps {
  fullName: string;
  initials: string;
}

export function ClientHeader({ fullName, initials }: IClientHeaderProps) {
  return (
    <div className="mb-6 rounded-xl bg-white p-6 shadow-sm border border-slate-200">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50 text-xl font-bold text-indigo-600">
          {initials}
        </div>
        <div>
          <h1 className="text-xl sm:text-2xl font-semibold text-slate-800">
            {fullName}
          </h1>
          <p className="text-sm text-slate-500 mt-1">Client Information</p>
        </div>
      </div>
    </div>
  );
}
