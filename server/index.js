const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const TodoModel = require('./models/Todo.js');


PORT = process.env.PORT;
Mongo_PORT = process.env.Mongo_PORT;

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(result => {
    console.log('Task connected:'); // Log the created task
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

app.get('/get', (req, res) => {
    TodoModel.find()
    .then(result => {
        res.json(result);
    })
    .catch(err => res.json(err))
});

app.put('/update/:id', (req, res) => {
    const {id} = req.params;
    // TodoModel.findByIdAndUpdate({_id: id}, {done: true})
    // .then(result => res.json(result))
    // .catch(err => res.json(err))\
    console.log(78);
    TodoModel.findById(id)
    .then(todo => {
        if (!todo) {
            return res.json({ message: 'Todo not found' });
        }

        // Toggle the 'done' status
        todo.done = !todo.done; // Change the value to its inverse

        // Save the updated Todo item
        return todo.save();
    })
    .then(updatedTodo => res.json(updatedTodo)) // Send the updated Todo back as a response
    .catch(err => {
        console.error(err);
        res.status(500).json(err); // Handle any errors
    });
});

app.delete('/delete/:id', (req, res) => {
    console.log(98);
    const {id} = req.params;
    TodoModel.findByIdAndDelete({_id: id})
    .then(result => {res.json(result);
    })
    .catch(err => res.json(err))
})

app.post('/add', (req, res, next) => {
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