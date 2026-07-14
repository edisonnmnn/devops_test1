// Simple Express server

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serves files in web-client
app.use(express.static(path.join(__dirname, '..', '..', 'web-client')));

// API test
app.get('/api/banana', (req, res) => {
  res.json({message: 'Hello World from Express'});
});


app.listen(PORT, (error) => {
  if(!error) {
    console.log("Server is running and App is listening on port: " + PORT);
  } else {
    console.log("Error occured: ", error);
  }
});
