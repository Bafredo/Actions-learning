import express from "express";
import cors from "cors";
import { projects } from "./data/projects.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Root route
app.get("/api/", (req, res) => {
  res.send({ message: "Welcome to Fredrick Muyoma’s Portfolio API 🚀" });
});
app.get("/api/another", (req, res) => {
  res.send({ message: "Welcome to Fredrick Muyoma’s Portfolio API 🚀" });
});

// Fetch all projects
app.get("/api/projects", (req, res) => {
  res.json(projects);
});

// Fetch a single project
app.get("/api/projects/:id", (req, res) => {
  const project = projects.find((p) => p.id === parseInt(req.params.id));
  if (!project) return res.status(404).json({ error: "Project not found" });
  res.json(project);
});

// Start server
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
