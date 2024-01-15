import "./TodoEditor.css";
import {useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {faCircle} from "@fortawesome/free-regular-svg-icons";

const TodoEditor = ({ onCreate, mockTodo }) => {
    const [content, setContent] = useState("");
    const inputRef = useRef();
    const [inputbtn, setInputbtn] = useState(false);
    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onInput = () => {
        setInputbtn(!inputbtn);
    }
    const onSubmit = () => {
        if (!content) {
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    };
    const onKeyDown = (e) => {
        if(e.keyCode === 13){
            onSubmit();
        }
    }
    return (
        <div className="TodoEditor">
            <div className="editor_wrapper">
                {inputbtn ? <input
                    ref={inputRef}
                    value={content}
                    onChange={onChangeContent}
                    onKeyDown={onKeyDown}
                    placeholder="새로운 Todo..."/> : null}
                <button  onClick={onInput}>+</button>
            </div>
        </div>
    );
};

export default TodoEditor;
