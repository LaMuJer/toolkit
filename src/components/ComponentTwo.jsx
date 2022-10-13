import {useDispatch} from "react-redux";
import {Add,Remove} from "../store/action/cakeAction";

function ComponentTwo(props) {
    const dispatch = useDispatch()

    return (
        <div>
            <button onClick={() => Add(dispatch, 10)}>Plus</button>
            <button onClick={() => Remove(dispatch, 10)}>Minus</button>
        </div>
    );
}

export default ComponentTwo;