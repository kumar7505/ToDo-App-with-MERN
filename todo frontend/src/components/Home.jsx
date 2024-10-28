import {useState} from 'react';
import React from 'react'
import Create from './Create'
import './Home.css'

const Home = () => {
  const [todos, setTodos] = useState([]);  return (
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
            {todo}
          </div>
        ))
      }
    </div>
  )
}

export default Home