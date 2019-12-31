const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');
// get movie router from routes
const movieRouter = require('./routes/movie-router');

const app = express();
const apiPort = 3033;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on('error', console.error.bind(console, 'MongoDB connection error: '));

app.get('/', (req, res) => {
    res.send('Hello world');
});

// Add middleware on route '/api'. The moddleware is movie router
app.use('/api', movieRouter);

app.listen(apiPort, () => { 
    console.log(`Server running on port ${apiPort}`) });