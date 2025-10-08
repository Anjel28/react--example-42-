import React, { useReducer } from 'react';

type State = {
    email: string;
    password: string;
}

type Action  = 
| {type: 'SET_EMAIL'; payload: string}
| {type: 'SET_PASSWORD'; payload: string}

const loginReducer = (state: State, action: Action): State => {
    switch (action.type){
        case 'SET_EMAIL':
            return {...state, email: action.payload};
            case 'SET_PASSWORD':
                return {...state, password: action.payload};
                default:
                    return state;
    }
}
const Login: React.FC = () => {
    const [state,dispatch] = useReducer(loginReducer, {
        email: ' ',
        password: ' ',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Login date: ', state);
    }
    return(
        
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email"
                    value={state.email}
                    onChange={(e) => dispatch ({type: 'SET_EMAIL', payload: e.target.value})}/>
                </label>
                <br/>
                <label>
                    Password:
                    <input type="password"
                    value={state.password}
                    onChange={(e) => dispatch ({type: 'SET_PASSWORD', payload: e.target.value})}/>
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
    )
}

export default Login;