
import {
  FaInbox,
  FaPhone,
  FaComments,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

const InquiryStats = ({ inquiries = [] }) => {
  const total = inquiries.length;

  const newCount = inquiries.filter(
    (item) => item.status === "new"
  ).length;

  const contactedCount = inquiries.filter(
    (item) => item.status === "contacted"
  ).length;

  const discussionCount = inquiries.filter(
    (item) => item.status === "in-discussion"
  ).length;

  const convertedCount = inquiries.filter(
    (item) => item.status === "converted"
  ).length;

  const closedCount = inquiries.filter(
    (item) => item.status === "closed"
  ).length;

  const stats = [
    {
      title: "Total",
      value: total,
      icon: <FaInbox />,
    },
    {
      title: "New",
      value: newCount,
      icon: <FaInbox />,
    },
    {
      title: "Contacted",
      value: contactedCount,
      icon: <FaPhone />,
    },
    {
      title: "In Discussion",
      value: discussionCount,
      icon: <FaComments />,
    },
    {
      title: "Converted",
      value: convertedCount,
      icon: <FaCheckCircle />,
    },
    {
      title: "Closed",
      value: closedCount,
      icon: <FaTimesCircle />,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
      {stats.map((item) => (
        <div
          key={item.title}
          className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                {item.title}
              </p>

              <h3 className="mt-1 text-2xl font-bold text-gray-800">
                {item.value}
              </h3>
            </div>

            <div className="text-xl text-gray-400">
              {item.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InquiryStats;
