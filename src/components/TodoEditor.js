import "./TodoEditor.css";
import {useRef, useState} from "react";

const TodoEditor = ({ onCreate, mockTodo }) => {
    const [btnclick, setBtnclick] = useState(false);
    const [content, setContent] = useState("");
    const inputRef = useRef();
    const onChangeContent = (e) => {
        setContent(e.target.value);
    }
    const onKeyDown = (e) => {
        if(e.keyCode === 13){
            onSubmit();
        }
    }
    const onSubmit = () => {
        if (!content) {
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
        setBtnclick(false);
    };

    const onInput = () => {
        setBtnclick(!btnclick);
    }

    return (
        <div className="TodoEditor">
                    { btnclick ? (
                        <div className="editor_wrapper">
                        <input
                        ref={inputRef}
                        value={content}
                        onChange={onChangeContent}
                        onKeyDown={onKeyDown}
                        placeholder="새로운 Todo..."/>
                    <button onClick={onSubmit}>추가</button>
                        </div>) : (<div className="editor_wrapper_input">
                            <button onClick={onInput}>+</button>
                        </div>
                    )}

        </div>
    );
};
export default TodoEditor;
