const express = require('express');
const router = express.Router();
const { Parser } = require('json2csv');
const PDFDocument = require('pdfkit');

// Dummy data for reports
const data = [
  { name: "John Doe", email: "john@example.com", age: 28 },
  { name: "Jane Smith", email: "jane@example.com", age: 34 }
];

// Route to generate CSV
router.get('/csv', (req, res) => {
  try {
    const json2csvParser = new Parser();
    const csv = json2csvParser.parse(data);

    // Set headers for CSV download
    res.header('Content-Type', 'text/csv');
    res.attachment('report.csv');
    return res.send(csv);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to generate CSV report' });
  }
});

// Route to generate PDF
router.get('/pdf', (req, res) => {
  try {
    const doc = new PDFDocument();
    
    // Set headers for PDF download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=report.pdf');

    // Pipe the PDF document to the response
    doc.pipe(res);

    // Add content to the PDF (e.g., title, table)
    doc.fontSize(18).text('User Report', { align: 'center' });
    doc.moveDown();
    
    data.forEach((user) => {
      doc.fontSize(12).text(`Name: ${user.name}, Email: ${user.email}, Age: ${user.age}`);
      doc.moveDown();
    });

    // Finalize the PDF and end the stream
    doc.end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to generate PDF report' });
  }
});

module.exports = router;
