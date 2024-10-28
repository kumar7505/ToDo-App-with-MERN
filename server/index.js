const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
PORT = process.env.PORT;

const app = express();
app.use(cors())
app.use(express.json());


app.listen(PORT, () => {
    console.log("Server is Running");
})