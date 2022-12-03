const express = require('express');
const traineeRoutes = require('./routes/traineeRoutes')
const companyRoutes = require('./routes/companyRoutes')
const seasonRoutes = require('./routes/seasonRoutes')
const bodyParser = require('body-parser')
var cors = require('cors')

const app = express();
const PORT = 5000;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());
app.use(traineeRoutes);
app.use(companyRoutes);
app.use(seasonRoutes);
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})