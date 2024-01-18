import React, {useRef, useState} from 'react';

const Inputbtn = ({onCreate}) => {
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
    };

    return (
        <div>
            <input
                ref={inputRef}
                value={content}
                onChange={onChangeContent}
                onKeyDown={onKeyDown}
                placeholder="새로운 Todo..."/>
            <button onClick={onSubmit}></button>
        </div>
    )
}

export default Inputbtn;
