import { useState } from "react"

const ToDoForm =()=>{
    const [text, settext] = useState("")

    const onFormSubmit = () =>{

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
            />
        </form>
    )
}
export default ToDoForm;