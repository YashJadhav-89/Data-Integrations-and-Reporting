const axios = require('axios');

const fetchLeadData = async () => {
  
  return [
    { leadId: 'L001', name: 'John Doe', email: 'john@example.com', source: 'Google' },
    { leadId: 'L002', name: 'Jane Doe', email: 'jane@example.com', source: 'Facebook' }
  ];
};

const fetchCampaignData = async () => {
 
  return [
    { campaignId: 'C001', name: 'Summer Sale', platform: 'Google Ads', budget: 500 },
    { campaignId: 'C002', name: 'Winter Sale', platform: 'Facebook Ads', budget: 300 }
  ];
};

module.exports = { fetchLeadData, fetchCampaignData };
