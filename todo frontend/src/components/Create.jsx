import React from "react";
import "./Create.css";

const Create = () => {
  const PORT = process.env.PORT;
  const [task, setTask] = useState();
  const handleAdd = () => {
    axios.post(`http://localhost:${PORT}/add`, {task: task})
      .then(result => console.log(result))
      .catch(err => console.log(error));
  };
  return (
    <div className="create_form">
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button type="button">Add</button>
    </div>
  );
};

export default Create;
