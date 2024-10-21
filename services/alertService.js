const nodemailer = require('nodemailer');

const sendAlertEmail = async (condition) => {
  if (condition) {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: process.env.EMAIL, pass: process.env.PASSWORD }
    });

    let info = await transporter.sendMail({
      from: '"EzyMetrics" <no-reply@ezymetrics.com>',
      to: 'user@example.com',
      subject: 'Alert: Condition met',
      text: 'An important condition has been met in your data.'
    });

    console.log('Alert email sent:', info.response);
  }
};

module.exports = { sendAlertEmail };
