const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// Upload folder
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);
app.use("/uploads", express.static(uploadDir));

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/videoDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Schema
const VideoSchema = new mongoose.Schema({
  name: String,
  status: String,
  uploadedAt: { type: Date, default: Date.now }
});
const Video = mongoose.model("Video", VideoSchema);

// Multer setup
const storage = multer.diskStorage({
  destination: uploadDir,
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  }
});
const upload = multer({ storage });

// Upload API
app.post("/upload", upload.single("video"), async (req, res) => {
  const video = new Video({
    name: req.file.filename,
    status: "Processing"
  });

  await video.save();

  setTimeout(async () => {
    video.status = "Safe";
    await video.save();
  }, 3000);

  res.json({ message: "Uploaded successfully", video });
});

// Get all videos
app.get("/videos", async (req, res) => {
  const videos = await Video.find().sort({ uploadedAt: -1 });
  res.json(videos);
});

// Start server
app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});