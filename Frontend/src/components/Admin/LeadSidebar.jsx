import React from "react";
import { NavLink } from "react-router-dom";
import { FolderKanban, ChevronRight } from "lucide-react";

const LeadSidebar = () => {
  return (
    <div className="flex h-full w-[260px] shrink-0 flex-col bg-gradient-to-b from-blue-700 via-blue-600 to-blue-700 pt-5">

      {/* Small Header */}
      <div className="mb-4 hidden px-5 md:block">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-200">
          Lead Admin
        </p>

        <div className="mt-2 h-1 w-7 rounded-full bg-orange-400" />
      </div>

      {/* Inquiries */}
      <NavLink
        end
        to="/lead-admin"
        className={({ isActive }) =>
          `group relative mx-3 flex cursor-pointer items-center gap-3 rounded-xl py-3 md:px-4 transition-all duration-300 ${
            isActive
              ? "bg-white text-blue-700 shadow-md"
              : "text-white hover:bg-white/10"
          }`
        }
      >
        {({ isActive }) => (
          <>
            {isActive && (
              <span className="absolute left-0 top-1/2 h-7 w-1 -translate-y-1/2 rounded-r-full bg-orange-500" />
            )}

            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-all duration-300 ${
                isActive
                  ? "bg-blue-50 text-blue-600"
                  : "bg-white/10 text-white group-hover:bg-white/15"
              }`}
            >
              <FolderKanban size={18} />
            </span>

            <p className="hidden flex-1 text-sm font-semibold md:inline-block">
              Inquiries
            </p>

            <ChevronRight
              size={15}
              className={`hidden transition-transform duration-300 md:block ${
                isActive
                  ? "text-blue-500"
                  : "text-blue-200 group-hover:translate-x-1"
              }`}
            />
          </>
        )}
      </NavLink>

      {/* Bottom Info */}
      <div className="mt-auto hidden p-4 md:block">
        <div className="rounded-xl border border-white/10 bg-white/10 p-3 backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_7px_rgba(74,222,128,0.8)]" />

            <span className="text-[11px] font-semibold text-white">
              ZyntexMedia Lead Admin
            </span>
          </div>

          <p className="mt-1.5 text-[10px] leading-4 text-blue-100">
            Manage your customer inquiries from here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeadSidebar;

