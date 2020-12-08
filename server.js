const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 5000;

const test = (req, res, next) => {
  console.log('from the test');
  next();
}
app.use(express.static(path.join(__dirname, 'build')));
// app.get('*', (req, res) => {res.sendFile(path.join(__dirname + '/build/index.html'))});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './frontend/index.html'));
});

app.get('/api', test, (req, res) => {
  res.send('SERVER RESPONSE inside server.js');
});





app.listen(PORT, () => {
  console.log('server running...');
});