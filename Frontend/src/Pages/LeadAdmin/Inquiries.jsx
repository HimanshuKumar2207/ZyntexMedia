import { useAppContext } from "../../context/AppContext";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

import InquiryStats from "./InquiryStats";
import InquiryFilters from "./InquiryFilters";
import InquiryModal from "./InquiryModal";
import InquiryTable from "./InquiryTable";

const Inquiries = () => {
  const { axios } = useAppContext();

  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [selected, setSelected] = useState(null);

  const fetchInquiries = async () => {
    try {
      setLoading(true);

      const savedToken = localStorage.getItem("token");

      console.log("TOKEN FROM LOCAL STORAGE:", savedToken);

      if (!savedToken) {
        console.error("No token found in localStorage");
        toast.error("Authentication token not found");
        return;
      }

      const authHeader = `Bearer ${savedToken}`;

      console.log("AUTH HEADER BEING SENT:", authHeader);

      const response = await axios.get("/api/inquiries", {
        headers: {
          Authorization: authHeader,
        },
      });

      console.log("FULL AXIOS RESPONSE:", response);
      console.log("INQUIRY API DATA:", response?.data);

      if (response?.data?.success) {
        setInquiries(response.data.inquiries || []);

        console.log("INQUIRIES RECEIVED:", response.data.inquiries);
      } else {
        console.error("API returned unsuccessful response:", response?.data);

        toast.error(response?.data?.message || "Failed to load inquiries");
      }
    } catch (error) {
      console.error("========== INQUIRY API ERROR ==========");
      console.error("Error:", error);
      console.error("Message:", error?.message);
      console.error("Status:", error?.response?.status);
      console.error("Response data:", error?.response?.data);
      console.error("Response headers:", error?.response?.headers);
      console.error("Request config:", error?.config);
      console.error("Request headers:", error?.config?.headers);
      console.error("========================================");

      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to load inquiries",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const updateStatus = async (id, newStatus) => {
    try {
      const savedToken = localStorage.getItem("token");

      if (!savedToken) {
        toast.error("Authentication token not found");
        return;
      }

      const { data } = await axios.put(
        `/api/inquiries/${id}`,
        {
          status: newStatus,
        },
        {
          headers: {
            Authorization: `Bearer ${savedToken}`,
          },
        },
      );

      if (data.success) {
        toast.success("Inquiry status updated");

        setInquiries((prev) =>
          prev.map((item) =>
            item._id === id ? { ...item, status: newStatus } : item,
          ),
        );

        if (selected?._id === id) {
          setSelected((prev) => ({
            ...prev,
            status: newStatus,
          }));
        }
      } else {
        toast.error(data.message || "Failed to update inquiry");
      }
    } catch (error) {
      console.error("Update inquiry error:", error);

      toast.error(error?.response?.data?.message || "Failed to update inquiry");
    }
  };

  const deleteInquiry = async (id) => {
    try {
      const savedToken = localStorage.getItem("token");

      if (!savedToken) {
        toast.error("Authentication token not found");
        return;
      }

      const { data } = await axios.delete(`/api/inquiries/${id}`, {
        headers: {
          Authorization: `Bearer ${savedToken}`,
        },
      });

      if (data.success) {
        toast.success("Inquiry deleted");

        setInquiries((prev) => prev.filter((item) => item._id !== id));

        setSelected(null);
      } else {
        toast.error(data.message || "Failed to delete inquiry");
      }
    } catch (error) {
      console.error("Delete inquiry error:", error);

      toast.error(error?.response?.data?.message || "Failed to delete inquiry");
    }
  };

  const filteredInquiries = inquiries.filter((item) => {
    const fullName = item?.fullName?.toLowerCase() || "";
    const email = item?.email?.toLowerCase() || "";
    const phone = item?.phone || "";

    const searchValue = search.toLowerCase();

    const matchesSearch =
      fullName.includes(searchValue) ||
      email.includes(searchValue) ||
      phone.includes(search);

    const matchesStatus = status === "all" || item?.status === status;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Inquiries</h1>

        <p className="text-sm text-gray-500">
          Manage customer inquiries and leads.
        </p>
      </div>

      <InquiryStats
        inquiries={inquiries}
        status={status}
        setStatus={setStatus}
      />

      <InquiryFilters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />

      <InquiryTable
        inquiries={filteredInquiries}
        loading={loading}
        onView={setSelected}
        onStatusChange={updateStatus}
        onDelete={deleteInquiry}
      />

      {selected && (
        <InquiryModal
          inquiry={selected}
          onClose={() => setSelected(null)}
          onStatusChange={updateStatus}
          onDelete={deleteInquiry}
        />
      )}
    </div>
  );
};

export default Inquiries;
