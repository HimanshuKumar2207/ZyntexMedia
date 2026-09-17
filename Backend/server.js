import express from "express";
import cors from "cors";
import "dotenv/config.js";
import connectDB from "./config/mongodb.js";
import adminRouter from "./routes/adminRoutes.js";
// import blogRouter from "./routes/blogRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import inquiryRoutes from "./routes/inquiryRoutes.js";

const app = express();
const PORT = process.env.PORT || 4000;
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Working");
});

app.use("/api/admin", adminRouter);
app.use("/api/projects", projectRoutes);
app.use("/api/inquiries", inquiryRoutes);

app.listen(PORT, () => console.log("Server Started on PORT:" + PORT));

export default app;
