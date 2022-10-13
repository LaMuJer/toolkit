import toggleReducer from "./store/reducer/toggleReducer";
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";
import {useDispatch, useSelector} from "react-redux";
import {Toggle} from "./store/action/toggleAction";
import {useState} from "react";
import Show from "./components/Show";
import Function from "./components/Function";
import {toggle} from "./store/tkReducer/toggleSlice";

function App() {

    const state = useSelector(state => state)
    console.log(state)
    const dispatch = useDispatch()

  return (
    <div>
        <ComponentOne/>
        <ComponentTwo/>

        {state.toggle && (<h1>Welcome To Redux</h1>)}
        <button onClick={() => Toggle(dispatch)}>
            Toggle
        </button>

        <Show />
        <Function />

        {state.tkToggle && <h1>Hello World</h1>}
        <button onClick={() => {dispatch(toggle())}}>Toggle</button>
    </div>
  );
}

export default App;
