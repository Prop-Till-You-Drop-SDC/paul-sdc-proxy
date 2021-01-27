require('dotenv').config();

var head= document.getElementsByTagName('head')[0];
var script= document.createElement('script');
script.type= 'text/javascript';
script.src= process.env.REN_MODULE;
head.appendChild(script);