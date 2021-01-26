const express = require('express');

const server = express();

server.use(express.static('public'));


const PORT = 8000;

server.get('/', (req, res) => {
  res.json(`yo`)
});

server.listen(PORT, () => console.log('Proxy Server is running...'));
