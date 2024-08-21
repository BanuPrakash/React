import { useReducer } from "react";
import countReducer from "../reducer/countReducer";

const initialState = {
    count : 0
}

export default function ReducerComponent() {
    let [state, dispatch] = useReducer(countReducer, initialState);

    return <div>
        Count: {state.count} <br />
        <button type="button" onClick={() => dispatch({type:'INCREMENT', payload: 10})}>Increment</button> 
        <button type="button" onClick={() => dispatch({type:'DECREMENT'})}>Decrement</button> 
        <button type="button" onClick={() => dispatch({type:'RESET'})}>CLEAR</button> 
    </div>
}

