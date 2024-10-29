import {useState, useEffect} from 'react';
import React from 'react'
import Create from './Create'
import './Home.css'
import axios from 'axios';
import {BsFillCheckCircleFill, BsCircleFill, BsFillTrashFill} from 'react-icons/bs';

const Home = () => {
  const [todos, setTodos] = useState([]);  
  useEffect(() => {
    axios.get('http://localhost:3001/get')
     .then(result => setTodos(result.data))
     .catch(err => console.log(err))
  }, []);
  
  const handleEdit = (id) => {
    axios.put(`http://localhost:3001/update/${id}`)
    .then(result => {
      // Toggle the `done` status in the local state without reloading
      setTodos(prevTodos => 
        prevTodos.map(todo =>
          todo._id === id ? { ...todo, done: !todo.done } : todo
        )
      );
    })
    .catch(err => console.log(err))
  }

  const handleDelete = (id) => {
    const newTodos = todos.filter(todo => todo._id !== id); // Remove from UI immediately
    setTodos(newTodos);

    axios.delete(`http://localhost:3001/delete/${id}`, true)
    .then(result => console.log(result))
    .catch(err => console.log(err))
  }
  return (
    <div className='home'>
      <h1>To-Do List</h1>
      <Create />
      {
        todos.length === 0 
        ?
        <h3>No Record</h3>
        :
        todos.map(todo => (
          <div className='task'>
            <div className="checkBox" onClick={() => handleEdit(todo._id)}>
              {todo.done ? 
                <BsFillCheckCircleFill className='icon'></BsFillCheckCircleFill>
               : <BsCircleFill className='icon'></BsCircleFill>
              }
              <p className={todo.done ? "line-through" : ""}>
                {todo.task}
              </p>
            </div>
            <div>
              <span>
                <BsFillTrashFill className='icon' onClick={() => handleDelete(todo._id)}/>
              </span>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Home