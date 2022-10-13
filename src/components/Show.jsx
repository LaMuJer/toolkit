import {useSelector} from "react-redux";
import {Add,Remove} from "../store/tkReducer/counterSlice";

function Show({count}) {


    const state = useSelector((state) => state)
    console.log(state)

    return (
        <div>
            {state.counter.value}
        </div>
    );
}

export default Show;