const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
PORT = process.env.PORT;
Mongo_PORT = process.env.Mongo_PORT;

const app = express();
app.use(cors())
app.use(express.json());

mongoose.connect(`${Mongo_PORT}/test`);

app.post('/add', (req, res, next) => {
    const task = req.body.task;
})

app.listen(PORT, () => {
    console.log("Server is Running");
})