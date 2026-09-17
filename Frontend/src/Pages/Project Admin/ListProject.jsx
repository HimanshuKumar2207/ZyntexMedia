import React, { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTrash } from "react-icons/fa";
import {
  FolderKanban,
  Plus,
  Trash2,
  ExternalLink,
  Github,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const ListProjects = () => {
  const { axios } = useAppContext();

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  // Fetch projects
  const fetchProjects = async () => {
    try {
      setLoading(true);

      const res = await axios.get("/api/projects/list-project");

      if (res.data.success) {
        setProjects(res.data.projects || []);
      } else {
        toast.error(res.data.message || "Failed to load projects.");
      }
    } catch (err) {
      console.error("Error fetching projects:", err);

      toast.error(
        err?.response?.data?.message ||
          "Something went wrong while loading projects.",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Delete project
  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this project?",
    );

    if (!confirmed) return;

    try {
      setDeletingId(id);

      const res = await axios.delete(`/api/projects/list-project/${id}`);

      if (res.data.success) {
        toast.success("Project deleted successfully.");

        setProjects((prev) => prev.filter((project) => project._id !== id));
      } else {
        toast.error(res.data.message || "Delete failed.");
      }
    } catch (err) {
      console.error("Error deleting project:", err);

      toast.error(err?.response?.data?.message || "Failed to delete project.");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="h- w-full overflow-y-auto bg-gray-50 text-gray-700">
      <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/20">
              <FolderKanban size={21} />
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                Project Management
              </h1>

              <p className="mt-0.5 text-xs text-gray-500 sm:text-sm">
                Manage and organize your ZyntexMedia projects.
              </p>
            </div>
          </div>

          {/* Project Count */}
          {!loading && (
            <div className="flex w-fit items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 shadow-sm">
              <span className="text-xs text-gray-500">Total Projects</span>

              <span className="rounded-lg bg-blue-50 px-2.5 py-1 text-sm font-bold text-blue-600">
                {projects.length}
              </span>
            </div>
          )}
        </div>

        {/* ================= CONTENT CARD ================= */}
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
          {/* Card Header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4 sm:px-6">
            <div>
              <h2 className="text-sm font-semibold text-gray-900">
                All Projects
              </h2>

              <p className="mt-1 text-xs text-gray-400">
                View, manage and remove projects from your portfolio.
              </p>
            </div>

            <div className="hidden h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600 sm:flex">
              <FolderKanban size={17} />
            </div>
          </div>

          {/* ================= LOADING ================= */}
          {loading ? (
            <div className="flex min-h-[350px] flex-col items-center justify-center px-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Loader2 size={23} className="animate-spin" />
              </div>

              <p className="mt-4 text-sm font-medium text-gray-700">
                Loading projects...
              </p>

              <p className="mt-1 text-xs text-gray-400">
                Please wait while we fetch your projects.
              </p>
            </div>
          ) : projects.length === 0 ? (
            /* ================= EMPTY STATE ================= */
            <div className="flex min-h-[350px] flex-col items-center justify-center px-5 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-100 text-gray-400">
                <FolderKanban size={25} />
              </div>

              <h3 className="mt-4 text-base font-semibold text-gray-800">
                No Projects Found
              </h3>

              <p className="mt-1 max-w-sm text-xs leading-5 text-gray-400">
                You haven't added any projects yet. Add your first project to
                display it on your portfolio.
              </p>
            </div>
          ) : (
            /* ================= PROJECT LIST ================= */
            <div className="divide-y divide-gray-100">
              {projects.map((project, index) => (
                <div
                  key={project._id}
                  className="group p-4 transition-colors duration-200 hover:bg-gray-50/70 sm:p-5"
                >
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                    {/* Project Image */}
                    <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-gray-100 sm:h-48 lg:h-28 lg:w-44">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      {/* Number */}
                      <span className="absolute left-2.5 top-2.5 rounded-md bg-black/60 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur-sm">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Project Information */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="text-base font-bold text-gray-900 transition-colors duration-200 group-hover:text-blue-600">
                            {project.title}
                          </h3>

                          <p className="mt-1 line-clamp-2 max-w-3xl text-xs leading-5 text-gray-500">
                            {project.description}
                          </p>
                        </div>
                      </div>

                      {/* Tech Stack */}
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {project.techStack?.map((tech, i) => (
                          <span
                            key={i}
                            className="rounded-md border border-blue-100 bg-blue-50 px-2 py-1 text-[10px] font-medium text-blue-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="mt-3 flex flex-wrap items-center gap-2">
                        {/* GitHub */}
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-[11px] font-medium text-gray-600 transition-all duration-200 hover:border-gray-300 hover:bg-gray-900 hover:text-white"
                          >
                            <Github size={13} />
                            GitHub
                          </a>
                        )}

                        {/* Live Demo */}
                        {project.liveDemo && (
                          <a
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50 px-3 py-1.5 text-[11px] font-medium text-blue-600 transition-all duration-200 hover:bg-blue-600 hover:text-white"
                          >
                            <ExternalLink size={13} />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Delete */}
                    <div className="flex shrink-0 lg:ml-3">
                      <button
                        type="button"
                        onClick={() => handleDelete(project._id)}
                        disabled={deletingId === project._id}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-red-100 bg-red-50 px-4 py-2.5 text-xs font-semibold text-red-500 transition-all duration-200 hover:border-red-200 hover:bg-red-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-50 lg:w-auto"
                        title="Delete Project"
                      >
                        {deletingId === project._id ? (
                          <>
                            <Loader2 size={14} className="animate-spin" />
                            Deleting...
                          </>
                        ) : (
                          <>
                            <Trash2 size={14} />
                            Delete
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* ================= FOOTER ================= */}
          {!loading && projects.length > 0 && (
            <div className="border-t border-gray-100 bg-gray-50/60 px-5 py-3.5 sm:px-6">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <AlertCircle size={13} />

                <span>
                  {projects.length}{" "}
                  {projects.length === 1 ? "project" : "projects"} currently
                  available in your portfolio.
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListProjects;
