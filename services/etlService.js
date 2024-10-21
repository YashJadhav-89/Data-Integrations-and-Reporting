const Lead = require('../models/Lead');
const Campaign = require('../models/Campaign');
const { fetchLeadData, fetchCampaignData } = require('./integrationService');

const runETL = async () => {
  const leads = await fetchLeadData();
  const campaigns = await fetchCampaignData();

  await Lead.insertMany(leads);
  await Campaign.insertMany(campaigns);

  console.log('ETL process completed');
};

module.exports = { runETL };
