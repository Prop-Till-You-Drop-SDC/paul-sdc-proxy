const express = require('express');
const cors = require('cors');

const server = express();

server.use(express.static('public'));


const PORT = 8000;

server.get('/', cors(), (req, res) => {
  res.json(`yo`)
});


server.get('/bundleren', (req, res) => {
  const config = {
    method: 'get',
    url: 'http://ec2-52-87-237-8.compute-1.amazonaws.com:3001/bundle',
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
