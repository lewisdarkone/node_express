const express = require('express');
const app = express();

app.get('/', function(req,res)  {
  res.send('Hello node');
});

app.listen(3000,() => {
  console.log('Server started in port 3000');
});