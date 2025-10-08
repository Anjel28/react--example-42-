import React, { useReducer } from 'react';

type FanState = {
    isOn: boolean;
};

type FanAction = 
| {type: 'TURN_ON'}
| {type: 'TURN_OFF'};

const fanReducer = (state:FanState, action: FanAction): FanState => {
    switch(action.type){
        case 'TURN_ON':
            return {isOn: true};
           case 'TURN_OFF':
            return {isOn: false};
            default:
                return state;
    }
};
const FanSwitch:React.FC = () => {
    const [state, dispatch] = useReducer(fanReducer, {isOn: false});
    return(
        <div>
            <h2>Fan is {state.isOn ? 'ON': 'OFF'}</h2>
           <button onClick={() => dispatch({ type: 'TURN_ON' })}>Turn ON</button>
      <button onClick={() => dispatch({ type: 'TURN_OFF' })}>Turn OFF</button>
        </div>
    )
}

export default FanSwitch;
