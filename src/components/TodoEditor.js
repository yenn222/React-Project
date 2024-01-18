import "./TodoEditor.css";
import {useRef, useState} from "react";
import Inputbtn from "./Inputbtn";

const TodoEditor = ({ onCreate, mockTodo }) => {
    const [btnclick, setBtnclick] = useState(false);

    const onInput = () => {
        setBtnclick(!btnclick);
    }

    return (
        <div className="TodoEditor">
            <div className="editor_wrapper">
                {btnclick ? <Inputbtn />: null}
                <button  onClick={onInput}>+</button>
            </div>
        </div>
    );
};
export default TodoEditor;
