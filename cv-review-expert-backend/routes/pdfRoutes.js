const express = require("express");
const multer = require("multer");
const { uploadPDF } = require("../controllers/pdfController");

const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();

router.post("/handle-cv", upload.single("cv"), uploadPDF);

module.exports = router;
