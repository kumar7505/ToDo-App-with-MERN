import React from "react";
import "./Create.css";
import {useState} from 'react';
import axios from 'axios';

const Create = () => {
  const PORT = 3001;
  const [task, setTask] = useState('');
  const handleAdd = () => {
    axios.post(`http://127.0.0.1:${PORT}/add`, {task: document.getElementById('taskInput').value})
      .then(result => console.log(result))
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
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button type="button" onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Create;
