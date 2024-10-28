const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const TodoModel = require('./models/Todo.js');


PORT = process.env.PORT || 3001;
Mongo_PORT = process.env.Mongo_PORT || 'mongodb://127.0.0.1:27017/test';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(result => {
    console.log('Task created:'); // Log the created task
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

app.post('/add', (req, res, next) => {
    console.log('Received request body:', req.body.task); 
    const task = req.body.task;
    TodoModel.create({
        task: task
    }).then(result => res.json(result))
    .catch(err => {
        console.error('Error creating task:', err); // Log the error
        res.status(500).json({ error: 'Failed to create task' }); // Send a user-friendly error response
      });
});

app.listen(PORT, () => {
    console.log("Server is Running");
});