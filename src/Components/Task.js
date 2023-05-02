import React, {useState} from 'react'
import TaskForm from './TaskForm'
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { RiCheckboxCircleLine } from 'react-icons/ri';


function Task({ tasks, completeTask, removeTask, updateTask}) {
    const [timer, setTimer] = useState(0);

    const [intervalId, setIntervalId] = useState(null);

    /*
    const startTimer = () => {
        const id = setInterval(() => {
            setTimer(prev => prev + 1);
        }, 1000);
        setIntervalId(null);
    };

    const stopTimer = () => {
        clearInterval(intervalId);
        setTimer(0);
        setIntervalId(null);
    };

    const handleCompleteTask = id => {
        completeTask(id);
        stopTimer();
    };

    useEffect(() => {
        if (tasks.some(task => task.isComplete) && intervalId) {
            startTimer();
        } else if (tasks.every(task => !task.isComplete) && !intervalId) {
            startTimer();
        }
    }, [tasks, intervalId]);

    const formatTime = time => {
        const hours = Math.floor(time / 3600).toString().padStart(2, '0');
        const minutes = Math.floor((time % 3600) / 60).toString().padStart(2, '0');
        const seconds = (time % 60).toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

*/

    const [edit, setEdit] = useState({
        id: null,
        value: '',
        priority: 'low'
    });

    const [searchTerm, setSearchTerm] = useState('');

    const submitUpdate = value => {
        updateTask(edit.id, value);
        setEdit({
            id: null,
            value: '',
            priority: 'low'
        });
    };

    if (edit.id) {
        return <TaskForm edit={edit} onSubmit={submitUpdate} />;
    }

    const handlePriority = (e, id) => {
      const newTasks = tasks.map((task) => {
        if (task.id === id) {
          task.priority = e.target.value;
        }
        return task;
        });
        updateTask(id, newTasks.find((task) => task.id === id));
    }

    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
    }

    const filteredTasks = tasks.filter((task) => {
      return task.text.toLowerCase().includes(searchTerm.toLowerCase());
    });


    return (
      <div>
          <div className="search-bar">
              <input type="text" placeholder="Search tasks" onChange={handleSearch} />
          </div>
          {filteredTasks.map((task, index) => (
              <div className={task.isComplete ? 'task-row complete' : 'task-row'} key={index}>
                  <div key={task.id} onClick={() => completeTask(task.id)}>
                      {task.text}
                  </div>
                  <div className="icons">
                      <select
                          value={task.priority}
                          onChange={(e) => handlePriority(e, task.id)}
                          className="priority-select"
                      >
                          <option value="low">Low</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                      </select>
  
                      <RiCloseCircleLine
                          onClick={() => removeTask(task.id)}
                          className='delete-icon'
                      />
                      <TiEdit onClick={() => setEdit({id: task.id, value: task.text})}
                              className='edit-icon'
                      />
                      <RiCheckboxCircleLine onClick={() => completeTask(task.id)}
                      className='complete-icon'
                      />
                      

                  </div>
  
              </div>
          ))}
      </div>
    );
  }

export default Task