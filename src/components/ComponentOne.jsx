import {useSelector} from "react-redux";


function ComponentOne(props) {
    const state = useSelector((state) => state)

    return (
        <div>
            {state.cake}
        </div>
    );
}

export default ComponentOne;