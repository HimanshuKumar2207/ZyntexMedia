import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    techStack: {
      type: [String],
      required: true,
      validate: (v) => Array.isArray(v) && v.length > 0,
    },
    github: { type: String, required: true },
    liveDemo: { type: String, required: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
