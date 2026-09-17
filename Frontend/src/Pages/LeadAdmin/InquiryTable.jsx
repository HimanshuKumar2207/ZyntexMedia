import {
  FaEye,
  FaTrash,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

const statusStyles = {
  new: "bg-blue-100 text-blue-700",
  contacted: "bg-yellow-100 text-yellow-700",
  "in-discussion": "bg-purple-100 text-purple-700",
  converted: "bg-green-100 text-green-700",
  closed: "bg-gray-100 text-gray-600",
};

const formatStatus = (status) => {
  if (!status) return "Unknown";

  return status
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");
};

const formatDate = (date) => {
  if (!date) return "-";

  const parsedDate = new Date(date);

  if (Number.isNaN(parsedDate.getTime())) {
    return "-";
  }

  return parsedDate.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const cleanPhone = (phone) => {
  if (!phone) return "";

  return String(phone).replace(/\D/g, "");
};

const InquiryTable = ({
  inquiries = [],
  loading = false,
  onView,
  onStatusChange,
  onDelete,
}) => {
  // Loading state
  if (loading) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-10 text-center shadow-sm">
        <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-gray-700" />

        <p className="mt-3 text-sm text-gray-500">
          Loading inquiries...
        </p>
      </div>
    );
  }

  // Empty state
  if (!inquiries.length) {
    return (
      <div className="rounded-xl border border-gray-200 bg-white p-10 text-center shadow-sm">
        <p className="text-gray-500">
          No inquiries found.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* =========================
          DESKTOP TABLE
      ========================== */}
      <div className="hidden overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm md:block">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[950px] text-left">
            <thead className="border-b border-gray-200 bg-gray-50">
              <tr>
                <th className="px-5 py-4 text-xs font-semibold uppercase text-gray-500">
                  Customer
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase text-gray-500">
                  Contact
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase text-gray-500">
                  Service
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase text-gray-500">
                  Date
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase text-gray-500">
                  Status
                </th>

                <th className="px-5 py-4 text-xs font-semibold uppercase text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {inquiries.map((inquiry) => {
                const phone = cleanPhone(inquiry.phone);

                return (
                  <tr
                    key={inquiry._id}
                    className="transition hover:bg-gray-50"
                  >
                    {/* Customer */}
                    <td className="px-5 py-4">
                      <p className="font-medium text-gray-800">
                        {inquiry.fullName || "Unknown"}
                      </p>

                      <p className="mt-1 max-w-[200px] truncate text-xs text-gray-500">
                        {inquiry.message || "No message"}
                      </p>
                    </td>

                    {/* Contact */}
                    <td className="px-5 py-4">
                      <p className="text-sm text-gray-700">
                        {inquiry.phone || "-"}
                      </p>

                      <p className="mt-1 text-xs text-gray-500">
                        {inquiry.email || "-"}
                      </p>
                    </td>

                    {/* Service */}
                    <td className="px-5 py-4">
                      <span className="text-sm text-gray-700">
                        {inquiry.service || "-"}
                      </span>
                    </td>

                    {/* Date */}
                    <td className="px-5 py-4 text-sm text-gray-500">
                      {formatDate(inquiry.createdAt)}
                    </td>

                    {/* Status */}
                    <td className="px-5 py-4">
                      <select
                        value={inquiry.status || "new"}
                        onChange={(e) =>
                          onStatusChange?.(
                            inquiry._id,
                            e.target.value
                          )
                        }
                        className={`rounded-full border-0 px-3 py-1.5 text-xs font-medium outline-none ${
                          statusStyles[inquiry.status] ||
                          "bg-gray-100 text-gray-600"
                        }`}
                      >
                        <option value="new">New</option>
                        <option value="contacted">
                          Contacted
                        </option>
                        <option value="in-discussion">
                          In Discussion
                        </option>
                        <option value="converted">
                          Converted
                        </option>
                        <option value="closed">
                          Closed
                        </option>
                      </select>
                    </td>

                    {/* Actions */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-2">
                        {/* View */}
                        <button
                          type="button"
                          onClick={() => onView?.(inquiry)}
                          title="View"
                          className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
                        >
                          <FaEye />
                        </button>

                        {/* Call */}
                        {phone && (
                          <a
                            href={`tel:${inquiry.phone}`}
                            title="Call"
                            className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
                          >
                            <FaPhone />
                          </a>
                        )}

                        {/* WhatsApp */}
                        {phone && (
                          <a
                            href={`https://wa.me/${phone}`}
                            target="_blank"
                            rel="noreferrer"
                            title="WhatsApp"
                            className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
                          >
                            <FaWhatsapp />
                          </a>
                        )}

                        {/* Email */}
                        {inquiry.email && (
                          <a
                            href={`mailto:${inquiry.email}`}
                            title="Email"
                            className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-800"
                          >
                            <FaEnvelope />
                          </a>
                        )}

                        {/* Delete */}
                        <button
                          type="button"
                          onClick={() => {
                            if (
                              window.confirm(
                                "Are you sure you want to delete this inquiry?"
                              )
                            ) {
                              onDelete?.(inquiry._id);
                            }
                          }}
                          title="Delete"
                          className="rounded-lg p-2 text-red-500 transition hover:bg-red-50"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* =========================
          MOBILE CARDS
      ========================== */}
      <div className="space-y-4 md:hidden">
        {inquiries.map((inquiry) => {
          const phone = cleanPhone(inquiry.phone);

          return (
            <div
              key={inquiry._id}
              className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {inquiry.fullName || "Unknown"}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    {formatDate(inquiry.createdAt)}
                  </p>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    statusStyles[inquiry.status] ||
                    "bg-gray-100 text-gray-600"
                  }`}
                >
                  {formatStatus(inquiry.status)}
                </span>
              </div>

              {/* Details */}
              <div className="mt-4 space-y-2 text-sm">
                <p>
                  <span className="font-medium">
                    Service:
                  </span>{" "}
                  {inquiry.service || "-"}
                </p>

                <p>
                  <span className="font-medium">
                    Phone:
                  </span>{" "}
                  {inquiry.phone || "-"}
                </p>

                <p className="break-all">
                  <span className="font-medium">
                    Email:
                  </span>{" "}
                  {inquiry.email || "-"}
                </p>

                {inquiry.message && (
                  <p className="rounded-lg bg-gray-50 p-3 text-gray-600">
                    {inquiry.message}
                  </p>
                )}
              </div>

              {/* Actions */}
              <div className="mt-4 flex flex-wrap gap-2">
                {/* View */}
                <button
                  type="button"
                  onClick={() => onView?.(inquiry)}
                  className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-xs font-medium transition hover:bg-gray-200"
                >
                  <FaEye />
                  View
                </button>

                {/* Call */}
                {phone && (
                  <a
                    href={`tel:${inquiry.phone}`}
                    className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-xs font-medium transition hover:bg-gray-200"
                  >
                    <FaPhone />
                    Call
                  </a>
                )}

                {/* WhatsApp */}
                {phone && (
                  <a
                    href={`https://wa.me/${phone}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-xs font-medium transition hover:bg-gray-200"
                  >
                    <FaWhatsapp />
                    WhatsApp
                  </a>
                )}

                {/* Email */}
                {inquiry.email && (
                  <a
                    href={`mailto:${inquiry.email}`}
                    className="flex items-center gap-2 rounded-lg bg-gray-100 px-3 py-2 text-xs font-medium transition hover:bg-gray-200"
                  >
                    <FaEnvelope />
                    Email
                  </a>
                )}

                {/* Delete */}
                <button
                  type="button"
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you want to delete this inquiry?"
                      )
                    ) {
                      onDelete?.(inquiry._id);
                    }
                  }}
                  className="flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-xs font-medium text-red-600 transition hover:bg-red-100"
                >
                  <FaTrash />
                  Delete
                </button>
              </div>

              {/* Status */}
              <div className="mt-4">
                <select
                  value={inquiry.status || "new"}
                  onChange={(e) =>
                    onStatusChange?.(
                      inquiry._id,
                      e.target.value
                    )
                  }
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-gray-500"
                >
                  <option value="new">New</option>
                  <option value="contacted">
                    Contacted
                  </option>
                  <option value="in-discussion">
                    In Discussion
                  </option>
                  <option value="converted">
                    Converted
                  </option>
                  <option value="closed">Closed</option>
                </select>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default InquiryTable;
