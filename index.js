const express = require('express');
const app = express();
const PORT = 8080;

// middleware
app.use(express.json());

// importing routes
const apiRoute = require('./routes/api');

// designating routes
app.use('/api', apiRoute);

app.listen(PORT, () => {
  console.log('server is running on port:', PORT)
});

// for testing
module.exports = app; 