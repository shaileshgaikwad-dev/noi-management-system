
import type { CreateClientFormData } from "../../../schemas/createClientSchema";
import type { IClient } from "../../../types/client.types";
import type {  FieldErrors, UseFormRegister } from "react-hook-form";
import { InfoItem } from "./InfoItem";
import type { EditClientData } from "../../../schemas/editClientSchema";


interface IClientPersonalInfo{
    client:IClient,
    editMode:boolean,
    registerClient:UseFormRegister<EditClientData>,
    clientError: FieldErrors<CreateClientFormData>;
}

export function ClientPersonalInformation({client , editMode , registerClient , clientError}:IClientPersonalInfo){


    return(

        <section className="mb-6 rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md border-2 border-indigo-600">
          <div className="mb-5 flex items-center justify-between ">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-indigo-50 p-2 ">
                <svg
                  className="h-5 w-5 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-slate-800">
                Personal Information
              </h2>
            </div>
            {editMode && (
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600 animate-pulse">
                Editing
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {editMode ? (
              <>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Prefix
                  </label>
                  <select
                    {...registerClient("prefix")}
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  >
                    <option value="">Select Prefix</option>
                    <option value="MR.">MR.</option>
                    <option value="MS.">MS.</option>
                    <option value="MRS.">MRS.</option>
                    <option value="DR.">DR.</option>
                    <option value="PROF.">PROF.</option>
                    <option value="REV.">REV.</option>
                  </select>
                  {clientError.prefix && (
                    <p className="mt-1 text-sm text-rose-500">
                      {clientError.prefix.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    First Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...registerClient("firstName")}
                    type="text"
                    placeholder="Enter first name"
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 placeholder:text-slate-400"
                  />
                  {clientError.firstName && (
                    <p className="mt-1 text-sm text-rose-500">
                      {clientError.firstName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Middle Name
                  </label>
                  <input
                    {...registerClient("middleName")}
                    type="text"
                    placeholder="Enter middle name"
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 placeholder:text-slate-400"
                  />
                  {clientError.middleName && (
                    <p className="mt-1 text-sm text-rose-500">
                      {clientError.middleName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Last Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    {...registerClient("lastName")}
                    type="text"
                    placeholder="Enter last name"
                    className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 placeholder:text-slate-400"
                  />
                  {clientError.lastName && (
                    <p className="mt-1 text-sm text-rose-500">
                      {clientError.lastName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Gender <span className="text-rose-500">*</span>
                  </label>
                  <select
                    {...registerClient("gender")}
                    className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                  >
                    <option value="">Select Gender</option>
                    <option value="MALE">MALE</option>
                    <option value="FEMALE">FEMALE</option>
                    <option value="TRANSGENDER">TRANSGENDER</option>
                  </select>
                  {clientError.gender && (
                    <p className="mt-1 text-sm text-rose-500">
                      {clientError.gender.message}
                    </p>
                  )}
                </div>
              </>
            ) : (                
                <>
                    <InfoItem label="Prefix" value={client.prefix} />
                    <InfoItem label="First Name" value={client.firstName} />
                    <InfoItem
                    label="Middle Name"
                    value={client.middleName || "—"}
                    />
                    <InfoItem label="Last Name" value={client.lastName} />
                    <InfoItem label="Gender" value={client.gender} />
              </>
            )}
          </div>
        </section>
    )

}