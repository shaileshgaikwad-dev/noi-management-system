import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { IClient } from "../../../types/client.types";
import type { CreateClientFormData } from "../../../schemas/createClientSchema";
import type { EditClientData } from "../../../schemas/editClientSchema";

interface IPropertyProps {
  editMode: boolean;
  client: IClient;
  registerClient: UseFormRegister<EditClientData>;
  clientError: FieldErrors<CreateClientFormData>;
}

export function PropertyDescription({
  editMode,
  client,
  registerClient,
}: IPropertyProps) {
  return (
    <section className="mb-6 rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md border-2 border-purple-600">
      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-lg bg-purple-50 p-2">
          <svg
            className="h-5 w-5 text-purple-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1h-2z"
            />
          </svg>
        </div>
        <h2 className="text-lg font-semibold text-slate-800">
          Property Information
        </h2>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-slate-700">
          Property Address <span className="text-rose-500">*</span>
        </label>
        {editMode ? (
          <textarea
            {...registerClient("propertyAddress")}
            rows={4}
            placeholder="Enter complete property address"
            className="w-full resize-none rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 placeholder:text-slate-400"
          />
        ) : (
          <div className="rounded-lg bg-gradient-to-r from-slate-50 to-slate-100/50 p-4 border border-slate-200">
            <div className="flex items-start gap-3">
              <svg
                className="h-5 w-5 text-slate-400 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="text-sm leading-6 text-slate-700 whitespace-pre-wrap">
                {client.propertyAddress}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
