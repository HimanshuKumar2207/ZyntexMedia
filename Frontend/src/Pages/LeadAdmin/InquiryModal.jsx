
import {
  FaTimes,
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaTrash,
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

  return new Date(date).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const InquiryModal = ({
  inquiry,
  onClose,
  onStatusChange,
  onDelete,
}) => {
  if (!inquiry) return null;

  const whatsappNumber = inquiry.phone?.replace(
    /\D/g,
    ""
  );

  const handleDelete = () => {
    if (
      window.confirm(
        "Are you sure you want to delete this inquiry?"
      )
    ) {
      onDelete(inquiry._id);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Inquiry Details
            </h2>

            <p className="mt-1 text-xs text-gray-500">
              {formatDate(inquiry.createdAt)}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100"
          >
            <FaTimes />
          </button>
        </div>

        {/* Content */}
        <div className="space-y-5 p-5">
          {/* Name */}
          <div>
            <p className="text-xs font-medium uppercase text-gray-400">
              Full Name
            </p>

            <p className="mt-1 text-base font-semibold text-gray-800">
              {inquiry.fullName}
            </p>
          </div>

          {/* Contact */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase text-gray-400">
                Phone
              </p>

              <p className="mt-1 text-sm text-gray-700">
                {inquiry.phone}
              </p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase text-gray-400">
                Email
              </p>

              <p className="mt-1 break-all text-sm text-gray-700">
                {inquiry.email}
              </p>
            </div>
          </div>

          {/* Service */}
          <div>
            <p className="text-xs font-medium uppercase text-gray-400">
              Service
            </p>

            <p className="mt-1 text-sm text-gray-700">
              {inquiry.service}
            </p>
          </div>

          {/* Message */}
          <div>
            <p className="text-xs font-medium uppercase text-gray-400">
              Message
            </p>

            <div className="mt-2 rounded-lg bg-gray-50 p-4 text-sm leading-6 text-gray-700">
              {inquiry.message || "No message provided."}
            </div>
          </div>

          {/* Status */}
          <div>
            <p className="text-xs font-medium uppercase text-gray-400">
              Status
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-3">
              <select
                value={inquiry.status}
                onChange={(e) =>
                  onStatusChange(
                    inquiry._id,
                    e.target.value
                  )
                }
                className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-gray-500"
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

              <span
                className={`rounded-full px-3 py-1.5 text-xs font-medium ${
                  statusStyles[inquiry.status] ||
                  "bg-gray-100 text-gray-600"
                }`}
              >
                {formatStatus(inquiry.status)}
              </span>
            </div>
          </div>

          {/* Quick actions */}
          <div className="border-t border-gray-200 pt-5">
            <p className="mb-3 text-xs font-medium uppercase text-gray-400">
              Quick Actions
            </p>

            <div className="flex flex-wrap gap-2">
              <a
                href={`tel:${inquiry.phone}`}
                className="flex items-center gap-2 rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
              >
                <FaPhone />
                Call
              </a>

              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-200"
              >
                <FaWhatsapp />
                WhatsApp
              </a>

              <a
                href={`mailto:${inquiry.email}`}
                className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-200"
              >
                <FaEnvelope />
                Email
              </a>

              <button
                type="button"
                onClick={handleDelete}
                className="flex items-center gap-2 rounded-lg bg-red-50 px-4 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-100"
              >
                <FaTrash />
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end border-t border-gray-200 px-5 py-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default InquiryModal;
