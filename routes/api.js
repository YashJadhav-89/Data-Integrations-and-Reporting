const express = require('express');
const { getLeads, getCampaigns } = require('../controllers/dataController');
const router = express.Router();

router.get('/leads', getLeads);
router.get('/campaigns', getCampaigns);

module.exports = router;
