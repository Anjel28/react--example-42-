import React, { useReducer, useState } from 'react';

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

type State = Task[];

type TaskAction = 
| {type: 'ADD_TASK'; payload: string}
| {type: 'TOGGLE_TASK'; payload: number}
| {type: 'REMOVE_TASK'; payload: number}

const taskReducer = (state: Task[], action: TaskAction): Task[] => {
    switch(action.type){
        case 'ADD_TASK':
            const newTask: Task = {
                id: Date.now(),
                title: action.payload,
                completed: false,
            };
            return [...state, newTask];
            case 'TOGGLE_TASK':
                return state.map(task =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
        case 'REMOVE_TASK': 
        return state.filter(task => task.id !== action.payload);
        default:
            return state;
            }
            
}

const TaskManager: React.FC = () => {
    const [tasks, dispatch] = useReducer(taskReducer, []);
    const [input,setInput] = useState(' ');

     const handleAdd = () => {
    if (input.trim()) {
      dispatch({ type: 'ADD_TASK', payload: input });
      setInput('');
    }
}
return(
    <div>
        <h2>Task List</h2>
        <input type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Enter task"/>
        <button  onClick={handleAdd}>Add task</button>

        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <span
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              onClick={() => dispatch({ type: 'TOGGLE_TASK', payload: task.id })}
            >
              {task.title}
            </span>
              <button onClick={() => dispatch({ type: 'REMOVE_TASK', payload: task.id })}>Remove Task </button>
                </li>
            ))}
        </ul>
    </div>
)
}

export default TaskManager;