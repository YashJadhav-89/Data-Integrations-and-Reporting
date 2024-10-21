const express = require('express');
const router = express.Router();
const { sendAlertEmail } = require('../services/alertService'); // Import the sendAlertEmail function

// Route to trigger the alert email
router.post('/', async (req, res) => {
  const { condition } = req.body;

  try {
    // Call the sendAlertEmail function and pass the condition
    await sendAlertEmail(condition);

    res.status(200).json({ success: 'Alert email sent successfully' });
  } catch (err) {
    console.error('Error sending alert email:', err);
    res.status(500).json({ error: 'Failed to send alert email' });
  }
});

module.exports = router;
