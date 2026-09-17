import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";
import {
  Upload,
  Image as ImageIcon,
  FolderPlus,
  Github,
  ExternalLink,
  Check,
} from "lucide-react";

const techOptions = [
  "MongoDB",
  "Express.js",
  "React",
  "Node.js",
  "JavaScript",
  "Next.js",
  "HTML",
  "CSS",
  "Redux",
  "Tailwind CSS",
  "Bootstrap",
  "React-dom",
  "Context-Api",
  "Java",
  "C Language",
];

const AddProject = () => {
  const { axios } = useAppContext();

  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [techStack, setTechStack] = useState([]);
  const [github, setGithub] = useState("");
  const [liveDemo, setLiveDemo] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size should be less than 5MB.");
      return;
    }

    setImage(file);
  };

  const handleTechChange = (e) => {
    const value = e.target.value;

    setTechStack((prev) =>
      prev.includes(value)
        ? prev.filter((tech) => tech !== value)
        : [...prev, value],
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !image ||
      !title.trim() ||
      !description.trim() ||
      // techStack.length === 0 ||
      // !github.trim() ||
      !liveDemo.trim()
    ) {
      toast.error("Please complete all fields.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("title", title.trim());
      formData.append("description", description.trim());
      // formData.append("techStack", JSON.stringify(techStack));
      // formData.append("github", github.trim());
      formData.append("liveDemo", liveDemo.trim());
      formData.append("image", image);

      const { data } = await axios.post("/api/projects/add-project", formData);

      if (data.success) {
        toast.success("Project added successfully!");

        setTitle("");
        setDescription("");
        // setTechStack([]);
        // setGithub("");
        setLiveDemo("");
        setImage(null);

        // Reset file input
        const fileInput = document.getElementById("image");
        if (fileInput) fileInput.value = "";
      } else {
        toast.error(data.message || "Failed to add project.");
      }
    } catch (error) {
      console.error("Error in addProject:", error);

      toast.error(
        error?.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-1 h-174 overflow-y-auto bg-gray-50 text-gray-700"
    >
      <div className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/20">
              <FolderPlus size={21} />
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                Add New Project
              </h1>

              <p className="mt-0.5 text-xs text-gray-500 sm:text-sm">
                Add a new project to your ZyntexMedia portfolio.
              </p>
            </div>
          </div>
        </div>

        {/* Main Card */}
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          {/* Card Header */}
          <div className="border-b border-gray-100 px-5 py-4 sm:px-7">
            <h2 className="text-sm font-semibold text-gray-900">
              Project Information
            </h2>

            <p className="mt-1 text-xs text-gray-500">
              Provide the details, technology stack and links for this project.
            </p>
          </div>

          <div className="space-y-7 p-5 sm:p-7">
            {/* Thumbnail */}
            <div>
              <label className="mb-2.5 flex items-center gap-2 text-sm font-semibold text-gray-800">
                <ImageIcon size={16} className="text-blue-600" />
                Project Thumbnail
              </label>

              <label
                htmlFor="image"
                className="group block w-full cursor-pointer"
              >
                <div
                  className={`relative flex min-h-[190px] w-full items-center justify-center overflow-hidden rounded-xl border-2 border-dashed transition-all duration-300 ${
                    image
                      ? "border-blue-300 bg-blue-50/30"
                      : "border-gray-300 bg-gray-50 hover:border-blue-400 hover:bg-blue-50/40"
                  }`}
                >
                  {image ? (
                    <>
                      <img
                        src={URL.createObjectURL(image)}
                        alt="Project preview"
                        className="h-full max-h-[260px] w-full object-cover"
                      />

                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-lg">
                          <Upload size={16} />
                          Change Image
                        </div>
                      </div>

                      <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full bg-green-500 text-white shadow-lg">
                        <Check size={15} />
                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center px-5 py-8 text-center">
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-transform duration-300 group-hover:scale-105">
                        <Upload size={22} />
                      </div>

                      <p className="text-sm font-semibold text-gray-700">
                        Upload project thumbnail
                      </p>

                      <p className="mt-1 text-xs text-gray-400">
                        PNG, JPG or WEBP · Maximum 5MB
                      </p>
                    </div>
                  )}
                </div>

                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  hidden
                />
              </label>
            </div>

            {/* Project Title */}
            <div>
              <label
                htmlFor="title"
                className="mb-2 block text-sm font-semibold text-gray-800"
              >
                Project Title
              </label>

              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Hospital Management System"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-semibold text-gray-800"
              >
                Project Description
              </label>

              <textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Write a short description about the project..."
                rows={5}
                className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm leading-6 text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                required
              />
            </div>

            {/* Tech Stack */}
            {/* <div>
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    Technology Stack
                  </label>

                  <p className="mt-0.5 text-xs text-gray-400">
                    Select all technologies used in this project.
                  </p>
                </div>

                {techStack.length > 0 && (
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                    {techStack.length} selected
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4">
                {techOptions.map((tech) => {
                  const selected = techStack.includes(tech);

                  return (
                    <label
                      key={tech}
                      className={`flex cursor-pointer items-center gap-2.5 rounded-xl border px-3 py-2.5 text-xs font-medium transition-all duration-200 ${
                        selected
                          ? "border-blue-200 bg-blue-50 text-blue-700 shadow-sm"
                          : "border-gray-200 bg-gray-50 text-gray-600 hover:border-gray-300 hover:bg-white"
                      }`}
                    >
                      <input
                        type="checkbox"
                        value={tech}
                        checked={selected}
                        onChange={handleTechChange}
                        className="sr-only"
                      />

                      <span
                        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-all ${
                          selected
                            ? "border-blue-600 bg-blue-600 text-white"
                            : "border-gray-300 bg-white"
                        }`}
                      >
                        {selected && <Check size={11} strokeWidth={3} />}
                      </span>

                      <span className="truncate">{tech}</span>
                    </label>
                  );
                })}
              </div>
            </div> */}

            {/* Links */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {/* GitHub */}
              {/* <div>
                <label
                  htmlFor="github"
                  className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-800"
                >
                  <Github size={16} className="text-gray-700" />
                  GitHub Repository
                </label>

                <input
                  id="github"
                  type="url"
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
                  placeholder="https://github.com/your-repo"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  required
                />
              </div> */}

              {/* Live Demo */}
              <div>
                <label
                  htmlFor="liveDemo"
                  className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-800"
                >
                  <ExternalLink size={16} className="text-blue-600" />
                  Live Demo
                </label>

                <input
                  id="liveDemo"
                  type="url"
                  value={liveDemo}
                  onChange={(e) => setLiveDemo(e.target.value)}
                  placeholder="https://yourprojectdemo.com"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  required
                />
              </div>
            </div>
          </div>

          {/* Footer / Submit */}
          <div className="flex flex-col gap-3 border-t border-gray-100 bg-gray-50/70 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <p className="text-xs text-gray-400">
              Make sure all project information is correct before submitting.
            </p>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {loading ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Adding...
                </>
              ) : (
                <>
                  <FolderPlus size={16} />
                  Add Project
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddProject;
