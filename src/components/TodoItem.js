import "./TodoItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({ id, content, isDone, createdDate, onUpdate, onDelete}) => {
    const [check, setCheck] = useState(false);
    const onClickCheckbox = () => {
        onUpdate(id);
        setCheck(!check);
    };

    const onClickDelete = () => {
        onDelete(id);
    }

    return (
        <div className="TodoItem">
            <div className="checkbox_col" onClick={onClickCheckbox}
                 checked={isDone}>
                {check ? (<FontAwesomeIcon icon={faCheck} style={{color: "#526be0",}} />) :(<FontAwesomeIcon icon={faCircle} style={{color: "#526be0",}} />)}
            </div>
            <div className="title_col">{ content }</div>
            <div className="date_col">{new Date().toLocaleDateString()}</div>
            <div className="btn_col">
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    );
};
export default TodoItem;
