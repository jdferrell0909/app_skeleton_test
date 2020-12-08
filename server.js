const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.NODE_ENV || 5000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
  console.log('server running...');
});