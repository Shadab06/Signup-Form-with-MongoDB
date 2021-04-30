const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const routeUlrs = require('./router/route')
const cors = require('cors');
const app = express();

dotenv.config();

mongoose.connect(process.env.DATABASR_ACCESS, () => console.log('database connected'));

app.use(express.json());
app.use(cors());
app.use('/app', routeUlrs);
app.listen(4000, () => console.log('server is up an running'));