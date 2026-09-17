
import {
  FaSearch,
  FaSyncAlt,
} from "react-icons/fa";

const InquiryFilters = ({
  search,
  setSearch,
  status,
  setStatus,
  onRefresh,
}) => {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-3 md:flex-row">
        {/* Search */}
        <div className="relative flex-1">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, phone, email or service..."
            className="w-full rounded-lg border border-gray-300 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-gray-500"
          />
        </div>

        {/* Status */}
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none focus:border-gray-500"
        >
          <option value="all">All Status</option>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="in-discussion">
            In Discussion
          </option>
          <option value="converted">Converted</option>
          <option value="closed">Closed</option>
        </select>

        {/* Refresh */}
        <button
          type="button"
          onClick={onRefresh}
          className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
        >
          <FaSyncAlt />
          Refresh
        </button>
      </div>
    </div>
  );
};

export default InquiryFilters;

