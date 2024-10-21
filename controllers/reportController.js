const json2csv = require('json2csv').parse;
const PDFDocument = require('pdfkit');
const Lead = require('../models/Lead');

const generateCSVReport = async (req, res) => {
  const leads = await Lead.find();
  const csv = json2csv(leads);
  res.header('Content-Type', 'text/csv');
  res.attachment('report.csv');
  res.send(csv);
};

const generatePDFReport = async (req, res) => {
  const leads = await Lead.find();
  const doc = new PDFDocument();
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=report.pdf');
  doc.pipe(res);
  leads.forEach(lead => doc.text(`${lead.name} (${lead.email})`));
  doc.end();
};

module.exports = { generateCSVReport, generatePDFReport };
