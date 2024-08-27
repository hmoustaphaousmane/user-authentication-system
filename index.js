const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listning on port ' + listener.address().port);
});
