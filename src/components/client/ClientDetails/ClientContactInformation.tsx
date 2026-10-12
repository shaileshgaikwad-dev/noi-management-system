import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { IClient } from "../../../types/client.types";
import { InfoItem } from "./InfoItem";
import type { CreateClientFormData } from "../../../schemas/createClientSchema";
import type { EditClientData } from "../../../schemas/editClientSchema";

interface IClientContact{
    editMode : boolean,
    client:IClient,
    registerClient : UseFormRegister<EditClientData>
    clientError : FieldErrors<CreateClientFormData>;
}

export function ClientContactInformation({editMode , client , registerClient , clientError}:IClientContact){

    return(
        <section className="mb-6 rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md border-2 border-emerald-600">
          <div className="mb-5 flex items-center gap-3">
            <div className="rounded-lg bg-emerald-50 p-2">
              <svg
                className="h-5 w-5 text-emerald-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-slate-800">
              Contact Information
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {editMode ? (
              <>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Email Address
                  </label>
                  <input
                    {...registerClient("email")}
                    type="email"
                    placeholder="Enter email address"
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 placeholder:text-slate-400"
                  />
                  {clientError.email && (
                    <p className="mt-1 text-sm text-rose-500">
                      {clientError.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Mobile Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...registerClient("mobileNumber")}
                    type="tel"
                    placeholder="10 digit mobile number"
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 placeholder:text-slate-400"
                  />
                  {clientError.mobileNumber && (
                    <p className="mt-1 text-sm text-rose-500">
                      {clientError.mobileNumber.message}
                    </p>
                  )}
                </div>
              </>
            ) : (
              <>
                <InfoItem label="Email Address" value={client.email || "—"} />
                <InfoItem label="Mobile Number" value={client.mobileNumber} />
              </>
            )}
          </div>
        </section>
    )
}