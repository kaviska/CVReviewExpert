const pdfparse = require('pdf-parse');
const { fromBuffer } = require('pdf2pic');
const Tesseract = require('tesseract.js');

async function extractTextWithOCR(pdfBuffer) {
  // Convert the first page of PDF buffer to an image (png)
  const convert = fromBuffer(pdfBuffer, {
    density: 300,
    format: "png",
    width: 1200,
    height: 1600,
  });

  const pageToConvertAsImage = 1;
  const image = await convert(pageToConvertAsImage);
  
  // Run OCR on the image base64 data
  const { data: { text } } = await Tesseract.recognize(
    image.base64,
    'eng',
    { logger: m => console.log(m) }
  );

  return text;
}

async function uploadPdf(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // Try normal pdf-parse text extraction first
    const data = await pdfparse(req.file.buffer);

    if (data.text.trim().length < 200) {
      // If text is empty or too short, fallback to OCR
      console.log("Text extraction failed or too short, using OCR fallback...");
      const ocrText = await extractTextWithOCR(req.file.buffer);
      console.log("OCR Text:", ocrText);

      return res.json({
        text: ocrText,
        info: data.info,
        numpages: data.numpages,
        ocrUsed: true,
      });
    }

    console.log("PDF parsed successfully without ocr:", data.text);

    // If text extracted successfully
    res.json({
      text: data.text,
      info: data.info,
      numpages: data.numpages,
      ocrUsed: false,
    });
  } catch (error) {
    console.error("Error parsing PDF:", error);
    res.status(500).json({ error: "Failed to parse PDF" });
  }
}

module.exports = {
  uploadPDF: uploadPdf
};
