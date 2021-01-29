const express = require('express');
const cors = require('cors');
require('dotenv').config();
var compression = require('compression')
const server = express();

server.use(compression())
server.use(express.static('public'));
const axios = require('axios');


const PORT = 8000;

server.get('/', cors(), (req, res) => {
  res.json(`yo`)
});

server.get('/bundleash', (req, res) => {
  const config = {
    method: 'get',
    url: 'http://18.224.4.136:3000/bundle',
    headers: { },
  };

  axios(config)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(`An error occured ${error}`);
    });
});

server.get('/bundleren', (req, res) => {
  const config = {
    method: 'get',
    url: process.env.REN_MODULE,
    headers: { },
  };

  axios(config)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(`An error occured ${error}`);
    });
});

server.get('/bundlejavier', (req, res) => {
  const config = {
    method: 'get',
    url: 'http://13.52.77.176:3002/bundle',
    headers: { },
  };

  axios(config)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(`An error occured ${error}`);
    });
});


server.get('/bundlejosh', (req, res) => {
  const config = {
    method: 'get',
    url: 'http://18.221.87.209:3003/bundle',
    headers: { },
  };

  axios(config)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(`An error occured ${error}`);
    });
});

server.listen(PORT, () => console.log(`Proxy Server is running on port ${PORT}... `));
