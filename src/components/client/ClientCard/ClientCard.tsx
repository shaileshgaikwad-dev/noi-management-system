import type { IClient } from "../../../types/client.types";

interface IClientCardProps {
  client: IClient;
  onClick: () => void;
  avatarColor: string;
}

export function ClientCard({ client, onClick, avatarColor }: IClientCardProps) {
  const initials = `${client.firstName.charAt(0).toUpperCase()}${client.lastName.charAt(0).toUpperCase()}`;

  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-xl border border-indigo-400 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-800 hover:shadow-lg"
    >
      <div className="flex items-start gap-3">
        <div
          className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold ${avatarColor}`}
        >
          {initials}
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate font-medium text-slate-800">
            {client.prefix} {client.firstName} {client.lastName}
          </p>

          <p className="truncate text-sm text-slate-500">{client.email}</p>
        </div>
      </div>

      <div className="mt-3 space-y-1 border-t border-slate-100 pt-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-500">Mobile</span>

          <span className="font-medium text-indigo-600">
            {client.mobileNumber}
          </span>
        </div>
      </div>
    </div>
  );
}
