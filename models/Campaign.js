const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  campaignId: String,
  name: String,
  platform: String,
  budget: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Campaign', campaignSchema);
