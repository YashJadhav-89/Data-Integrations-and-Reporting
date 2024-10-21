const express = require('express');
const apiRoutes = require('./routes/api');
const reportRoutes = require('./routes/report');
const alertRoutes = require('./routes/alerts');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config(); 


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(express.json());
app.use('/api', apiRoutes);
app.use('/report', reportRoutes);
app.use('/alerts', alertRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
