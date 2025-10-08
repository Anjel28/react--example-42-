import React, { useReducer } from 'react';

type State = {
    name: string;
    age: number;
}

type Action = 
| {type: 'SET_NAME'; payload: string}
| {type: 'SET_AGE'; payload: number}

const userReducer = (state: State, action: Action): State => {
  switch(action.type){
    case 'SET_NAME':
        return{...state, name: action.payload};
        case 'SET_AGE':
            return{...state, age: action.payload};
            default:
                return state;

  }
}
const UserCard: React.FC = () => {
    const [state,dispatch] = useReducer(userReducer,{
        name: ' ',
        age: 0,
    })
    return(
        <div>
            <h2>{state.name}</h2>
            <p>Age: {state.age}</p>
            <input type="text"
            placeholder="Enter name"
            onChange={(e) => dispatch({type: 'SET_NAME', payload: e.target.value})}/>
            <input type="number"
            placeholder="Enter age"
            onChange={(e) => dispatch({type: 'SET_AGE', payload: Number(e.target.value)})}/>
        </div>
    )
}

export default UserCard;
