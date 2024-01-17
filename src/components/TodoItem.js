import "./TodoItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
// import { faCheck } from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({ id, content, isDone, createdDate, onUpdate, onDelete }) => {
    const [check, setCheck] = useState(isDone);

    const onClickCheckbox = () => {
        onUpdate(id);
        setCheck(!check);
    };

    const onClickDelete = () => {
        onDelete(id);
    };

    return (
        <div className={`TodoItem`}>
            <div className={`checkbox_col ${check ? 'active' : ''}`} onClick={onClickCheckbox}>
                {check && <FontAwesomeIcon icon={faCheck} />}
            </div>
            <div className="title_col">{check ? <p className="animated-text">{content}</p> : <p>{content}</p>}</div>
            <div className="date_col">{new Date(createdDate).toLocaleDateString()}</div>
            <div className="btn_col">
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    );
};

export default TodoItem;
