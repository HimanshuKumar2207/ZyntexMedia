import { useEffect, useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTrash } from "react-icons/fa";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const ListProjects = () => {
  const { axios } = useAppContext();
  const [projects, setProjects] = useState([]);

  // Fetch projects from backend
  const fetchProjects = async () => {
    try {
      const res = await axios.get("/api/projects/list-project");
      if (res.data.success) {
        setProjects(res.data.projects);
      } else {
        toast.error("Failed to load projects");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Handle delete project
  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`/api/projects/list-project/${id}`);
      if (res.data.success) {
        toast.success("Project deleted");
        setProjects(projects.filter((p) => p._id !== id));
      } else {
        toast.error(res.data.message || "Delete failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete project");
    }
  };

  return (
    <div className="h-full w-full bg-blue-50 py-10 px-4 overflow-scroll sm:px-8">
      <div className="mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-left">
          📋 Project Management
        </h1>

        {projects.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            No projects available.
          </p>
        ) : (
          <div className="space-y-6 max-w-5xl">
            {projects.map((project) => (
              <div
                key={project._id}
                className="flex items-start bg-white rounded-xl shadow-xl hover:shadow-2xl transition p-4 sm:p-6 border border-gray-200"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-28 h-20 object-cover rounded-md border border-gray-300 mr-5"
                />

                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-4 text-sm text-gray-700">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 hover:text-black transition"
                    >
                      <FaGithub className="text-base" /> GitHub
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-700 hover:text-blue-900 transition"
                    >
                      <FaExternalLinkAlt className="text-base" /> Live
                    </a>
                  </div>
                </div>

                <div className="ml-4 sm:ml-6">
                  <button
                    onClick={() => handleDelete(project._id)}
                    className="bg-red-500 text-white px-3 py-1.5 text-xs rounded-md hover:bg-red-600 flex items-center gap-2"
                    title="Delete Project"
                  >
                    <FaTrash />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListProjects;
