import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    service: {
      type: String,
      required: true,
      trim: true,
    },

    message: {
      type: String,
      trim: true,
      default: "",
    },

    status: {
      type: String,
      enum: [
        "new",
        "contacted",
        "in-discussion",
        "converted",
        "closed",
      ],
      default: "new",
    },
  },
  {
    timestamps: true,
  }
);

const Inquiry =
  mongoose.models.Inquiry ||
  mongoose.model("Inquiry", inquirySchema);

export default Inquiry;
