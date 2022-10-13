import {Add, Remove} from "../store/tkReducer/counterSlice";
import {useDispatch} from "react-redux";

function Function() {
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => {dispatch(Add({amount:10}))}}>Add</button>
            <button onClick={() => {dispatch(Remove({amount:20}))}}>Remove</button>
        </div>
    );
}

export default Function;