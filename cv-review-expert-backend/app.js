const express = require("express");
const pdfRoutes = require("./routes/pdfRoutes");
const atsRoutes = require("./routes/atsRoutes");
const cvWritingRoutes = require("./routes/cvWritingRoutes");
const path = require("path");
const cors = require("cors");


const app = express();
//cors
app.use(cors({
    origin: [
        "http://localhost:3000",
        "https://www.cvreviewexpert.com"
    ]
}));

// API routes
app.use("/api", pdfRoutes);
app.use("/api/ats", atsRoutes);
app.use("/api/cv-writing", cvWritingRoutes);

// Serve static files (optional)
app.use(express.static(path.join(__dirname, "../public")));

module.exports = app;
