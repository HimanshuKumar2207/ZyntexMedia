import fs from "fs";
import path from "path";
import Project from "../models/Project.js";
import imagekit from "../config/imageKit.js";

// export const addProject = async (req, res) => {
//   try {
//     const { title, description, github, liveDemo } = req.body;

//     // Parse techStack (sent as JSON string)
//     let techStack;
//     try {
//       techStack = JSON.parse(req.body.techStack);
//       if (!Array.isArray(techStack) || techStack.length === 0) {
//         return res.status(400).json({
//           success: false,
//           message: "Invalid tech stack",
//         });
//       }
//     } catch (err) {
//       return res.status(400).json({
//         success: false,
//         message: "Invalid tech stack format",
//       });
//     }

//     // Image must be uploaded
//     if (!req.file || !req.file.filename) {
//       return res.status(400).json({
//         success: false,
//         message: "Image is required",
//       });
//     }

//     const image = req.file.filename;

//     const newProject = new Project({
//       title,
//       description,
//       techStack,
//       github,
//       liveDemo,
//       image,
//     });

//     await newProject.save();

//     res.status(201).json({
//       success: true,
//       message: "Project added successfully",
//       project: newProject,
//     });
//   } catch (error) {
//     console.error("❌ Error in addProject:", error);
//     res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//       error: error.message,
//     });
//   }
// };

// export const addProject = async (req, res) => {
//   try {
//     const { title, description, github, liveDemo } = req.body;

//     // Parse techStack
//     let techStack;
//     try {
//       techStack = JSON.parse(req.body.techStack);
//       if (!Array.isArray(techStack) || techStack.length === 0) {
//         return res.status(400).json({ success: false, message: "Invalid tech stack" });
//       }
//     } catch (err) {
//       return res.status(400).json({ success: false, message: "Invalid tech stack format" });
//     }

//     if (!req.file) {
//       return res.status(400).json({ success: false, message: "Image is required" });
//     }

//     // Upload to ImageKit
//     const uploadedImage = await imagekit.upload({
//       file: req.file.buffer, // image buffer
//       fileName: req.file.originalname,
//       folder: "projects", // optional folder in ImageKit
//     });

//     const newProject = new Project({
//       title,
//       description,
//       techStack,
//       github,
//       liveDemo,
//       image: uploadedImage.url, // Save ImageKit image URL
//     });

//     await newProject.save();

//     res.status(201).json({
//       success: true,
//       message: "Project added successfully",
//       project: newProject,
//     });
//   } catch (error) {
//     console.error("❌ Error in addProject:", error);
//     res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//       error: error.message,
//     });
//   }
// };

export const addProject = async (req, res) => {
  try {
    const { title, description, github, liveDemo } = req.body;

    // Parse tech stack
    let techStack = JSON.parse(req.body.techStack);
    if (!Array.isArray(techStack) || techStack.length === 0) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid tech stack" });
    }

    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "Image is required" });
    }

    // Upload to ImageKit
    const uploadResponse = await imagekit.upload({
      file: req.file.buffer,
      fileName: req.file.originalname,
    });

    const newProject = new Project({
      title,
      description,
      techStack,
      github,
      liveDemo,
      image: uploadResponse.url, // Save URL instead of filename
    });

    await newProject.save();

    res.status(201).json({
      success: true,
      message: "Project added successfully",
      project: newProject,
    });
  } catch (error) {
    console.error("❌ Error in addProject:", error);
    res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, projects });
  } catch (error) {
    console.error("❌ Error in getAllProjects:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    // Delete image if exists
    if (project.image) {
      const imagePath = path.join("uploads", project.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await project.deleteOne();

    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    console.error("❌ Error in deleteProject:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
