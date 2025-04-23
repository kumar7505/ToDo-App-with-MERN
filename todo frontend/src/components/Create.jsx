import React from "react";
import "./Create.css";
import {useState} from 'react';
import axios from 'axios';

const Create = () => {
  const handleKeyDown = (event) => {
    console.log("add");
    if(event.key == "Enter")
      handleAdd();
  };

  const REACT_APP_API_PORT = import.meta.env.VITE_REACT_APP_API_PORT;

  const [task, setTask] = useState('');
  const handleAdd = () => {
    axios.post(`http://127.0.0.1:${REACT_APP_API_PORT}/add`, {task: document.getElementById('taskInput').value})
      .then(result => {
        location.reload();
      })
      .catch(err => {
        console.error("Error details:", err);
        console.log("Response data:", err.response ? err.response.data : "No response");
      });
      
  };
  return (
    <div className="create_form">
      <input
        type="text"
        id="taskInput"
        placeholder="Enter a Task..."
        onChange={(e) => {
          setTask(e.target.value);
        }}
        onKeyDown={handleKeyDown}
      />
      <button type="button" onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Create;
