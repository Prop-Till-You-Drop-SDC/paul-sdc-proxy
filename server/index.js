const express = require('express');
const cors = require('cors');

const server = express();

server.use(express.static('public'));


const PORT = 8000;

server.get('/', cors(), (req, res) => {
  res.json(`yo`)
});

server.listen(PORT, () => console.log(`Proxy Server is running on port ${PORT}... `));
