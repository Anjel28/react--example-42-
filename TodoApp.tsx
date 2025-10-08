import React, { useReducer, useState } from 'react';

type Todo = {
    id: number;
    text: string;
}

type State = Todo[];

type Action = 
| {type: 'add';payload: string}
| {type: 'remove'; payload: number}
| {type: 'clear'};

function todoReducer(state: State, action: Action): State  {
    switch(action.type){
        case 'add':
            const newTodo: Todo ={
                id: Date.now(),
                text: action.payload,
            };
            return [...state, newTodo];
            case 'remove':
                return state.filter(todo => todo.id !== action.payload);
                case 'clear':
                    return[];
                    default:
                   return state;
     }
}
const TodoApp: React.FC = () => {
    const [state, dispatch] = useReducer(todoReducer ,[]);
    const [input, setInput] = useState(' ');


    const handleAdd = () => {
       if(input.trim()){
        dispatch({type: 'add', payload: input});
        setInput(' ');
       }
    }

    return(
        <div>
          <h2>Todo List</h2>
          <input  value={input}
          onChange={e => setInput(e.target.value)}
          placeholder ="Enter todo"/>
          <button onClick={handleAdd}>Add</button>
          <button onClick={() => dispatch({type: 'clear'})}>Clear All</button>
          <ul>
            {state.map(todo => (
                   <li key={todo.id}>
                    {todo.text}
                    <button onClick={() => dispatch({type: 'remove', payload: todo.id})}>
                        Remove
                    </button>
                </li>
            ))}
          </ul>

        </div>
    )
}

export default TodoApp;