
const express = require('express');
const colors = require('colors');

const app = express();

const PORT = 7878;

app.listen(PORT, () => {

    console.log(`Serer running on http://localhost:${PORT}`.bgRed);
})