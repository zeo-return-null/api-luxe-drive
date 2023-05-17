require('dotenv').config();
require('./config/database');
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const route = require('./routes/routes');
const app = express();
const port = process.env.PORT || 8000;
const host = process.env.HSOT || '0.0.0.0';

app.use(cors());
app.use(express.json());
app.use('/', route);
app.use(express.static('public'));

app.listen(port, host, () => console.log(`Server levantado en PUERTO ${port} en HOST ${host}`));