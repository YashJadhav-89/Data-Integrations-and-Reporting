const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  leadId: String,
  name: String,
  email: String,
  source: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Lead', leadSchema);
