const express = require("express");
const pdfRoutes = require("./routes/pdfRoutes");
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

// Serve static files (optional)
app.use(express.static(path.join(__dirname, "../public")));

module.exports = app;
