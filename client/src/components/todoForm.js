import { useState } from "react"
import { useDispatch } from 'react-redux';

import { addNewtodo } from "../redux/actions";

const ToDoForm =()=>{
    const [text, settext] = useState("")
    const dispatch = useDispatch();
    const onFormSubmit = (e) =>{
        e.preventDefault();
        dispatch(addNewtodo(text));
        settext('');
    }

    const onInputChange = (e) =>{
       settext(e.target.value)
    }


    return(
        <form className="form" onSubmit={onFormSubmit}>
            <input 
                className="input"
                placeholder="Enter a todo task..."
                onChange={onInputChange}
                value={text}
            />
        </form>
    )
}
export default ToDoForm;