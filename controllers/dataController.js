const { fetchLeadData, fetchCampaignData } = require('../services/integrationService');

const getLeads = async (req, res) => {
  try {
    const leads = await fetchLeadData();
    res.json(leads);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching lead data' });
  }
};

const getCampaigns = async (req, res) => {
  try {
    const campaigns = await fetchCampaignData();
    res.json(campaigns);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching campaign data' });
  }
};

module.exports = { getLeads, getCampaigns };
