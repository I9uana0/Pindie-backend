const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { usersRouter, gamesRouter, categoriesRouter } = require('./routes');

const connectToDatabase = require('./database/connect');
const cors = require('./cors');

const app = express();
const PORT = 3000;

connectToDatabase();

app.use(
    cors,
    bodyParser.json(),
    express.static(path.join(__dirname, 'public')),
    usersRouter,
    gamesRouter,
    categoriesRouter
);

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
});