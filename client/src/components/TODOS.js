import { getAllTodos } from "../redux/actions/index";
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import TODO from "./todo";




const Todos = () =>{
    const dispatch = useDispatch();
    const todo = useSelector(state => state.todos);

    useEffect(() =>{
        dispatch(getAllTodos());
    }, [])

    return (
            <article>
                <ul>
                    {
                        todo.map(todo =>(
                            <TODO 
                                key={todo._id}
                                todo={todo}
                            />
                        ))
                    }
                </ul>
            </article>
    )
}

export default Todos;