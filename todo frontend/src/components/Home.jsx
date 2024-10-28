import {useState, useEffect} from 'react';
import React from 'react'
import Create from './Create'
import './Home.css'
import axios from 'axios';

const Home = () => {
  const [todos, setTodos] = useState([]);  
  useEffect(() => {
    axios.get('http://localhost:3001/get')
     .then(result => setTodos(result.data))
     .catch(err => console.log(err))
  }, []);
  
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
          <div>
            {todo.task}
          </div>
        ))
      }
    </div>
  )
}

export default Home