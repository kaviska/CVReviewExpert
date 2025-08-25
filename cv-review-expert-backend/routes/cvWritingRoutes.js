const express = require('express');
const multer = require('multer');
const { rewriteCV } = require('../controllers/CvWritingController');

const router = express.Router();

// Configure multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB limit
  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed!'), false);
    }
  }
});

// CV Rewriting endpoint
router.post('/rewrite', upload.single('cv'), rewriteCV);

module.exports = router;
