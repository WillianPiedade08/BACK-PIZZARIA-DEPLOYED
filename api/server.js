// server.js
const express = require('express'); 
require('dotenv').config(); 
const cors = require('cors');

const port = process.env.PORT || 3000;
const routes = require('../src/routes/routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log('API executando em http://localhost:', port);
});
