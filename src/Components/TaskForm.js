import React, {useState, useEffect, useRef} from 'react';

function TaskForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const [priority, setPriority] = useState(props.edit ? props.edit.priority : 'low');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });


    const handleChange = e => {
        setInput(e.target.value);
    }

    const handlePriority = e => {
        setPriority(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

         props.onSubmit({
             id: Math.floor(Math.random() * 10000),
             text: input,
             priority: priority
         });

         setInput('');
         setPriority('low');
    };


  return (
    <form className="task-form" onSubmit={handleSubmit}>
        {props.edit ? (
        <>
        <input 
        type="text" 
        placeholder="Update your task" 
        value={input} 
        name="text" 
        className="task-input edit" 
        onChange = {handleChange}
        ref={inputRef}
        />
        <select
        value={priority}
        onChange={handlePriority}
        className="priority-select edit"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>



        <button className="task-button edit" type="submit">Update</button>
        </>
        ) : 
        (
          <>
        <input 
          type="text" 
          placeholder="Add a task" 
          value={input} 
          name="text" 
          className="task-input" 
          onChange = {handleChange}
          ref={inputRef}
          />
          <button className="task-button" type="submit">Add Task</button>
          </>
          )
          }

        
    </form>
  );
}

export default TaskForm;