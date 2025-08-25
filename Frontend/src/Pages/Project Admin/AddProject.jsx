import { useState } from "react";
import { assets } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

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

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleTechChange = (e) => {
    const value = e.target.value;
    setTechStack((prev) =>
      prev.includes(value) ? prev.filter((t) => t !== value) : [...prev, value]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !image ||
      !title ||
      !description ||
      techStack.length === 0 ||
      !github ||
      !liveDemo
    ) {
      toast.error("All fields are required.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("techStack", JSON.stringify(techStack));
      formData.append("github", github);
      formData.append("liveDemo", liveDemo);
      formData.append("image", image);

      const { data } = await axios.post("/api/projects/add-project", formData);

      if (data.success) {
        toast.success("Project added successfully!");
        // Reset form
        setTitle("");
        setDescription("");
        setTechStack([]);
        setGithub("");
        setLiveDemo("");
        setImage(null);
      } else {
        toast.error(data.message || "Failed to add project.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Try again.");
    }
  };

  return (
    <form
      className="flex-1 bg-blue-50 text-gray-700 h-full overflow-scroll"
      onSubmit={handleSubmit}
    >
      <div className="bg-white w-full max-w-3xl p-6 md:p-10 sm:m-10 shadow-lg rounded-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Add New Project</h2>

        {/* Thumbnail Upload */}
        <label className="block mb-2 font-medium">Upload Thumbnail</label>
        <label htmlFor="image">
          <img
            src={image ? URL.createObjectURL(image) : assets.upload_area}
            alt="Upload"
            className="mt-2 h-20 w-32 object-cover border border-dashed rounded cursor-pointer"
          />
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            hidden
            required
          />
        </label>

        {/* Project Title */}
        <label className="block mt-6 font-medium">Project Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Type here"
          className="w-full mt-2 p-2 border border-gray-300 rounded outline-none"
          required
        />

        {/* Description */}
        <label className="block mt-6 font-medium">Project Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write description"
          className="w-full mt-2 p-2 border border-gray-300 rounded outline-none h-28 resize-none"
          required
        />

        {/* Tech Stack */}
        <label className="block mt-6 font-medium">Tech Stack</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
          {techOptions.map((tech, index) => (
            <label key={index} className="flex items-center space-x-2 text-sm">
              <input
                type="checkbox"
                value={tech}
                checked={techStack.includes(tech)}
                onChange={handleTechChange}
              />
              <span>{tech}</span>
            </label>
          ))}
        </div>

        {/* GitHub Link */}
        <label className="block mt-6 font-medium">GitHub Repository Link</label>
        <input
          type="url"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
          placeholder="https://github.com/your-repo"
          className="w-full mt-2 p-2 border border-gray-300 rounded outline-none"
          required
        />

        {/* Live Demo Link */}
        <label className="block mt-6 font-medium">Live Demo Link</label>
        <input
          type="url"
          value={liveDemo}
          onChange={(e) => setLiveDemo(e.target.value)}
          placeholder="https://yourprojectdemo.com"
          className="w-full mt-2 p-2 border border-gray-300 rounded outline-none"
          required
        />

        <button
          type="submit"
          className="mt-8 w-40 h-10 bg-primary text-white rounded cursor-pointer text-sm hover:opacity-90"
        >
          Add Project
        </button>
      </div>
    </form>
  );
};

export default AddProject;
