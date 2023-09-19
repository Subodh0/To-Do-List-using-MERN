import { getAllTodos } from "../redux/actions/index";
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';

import TODO from "./todo";
import Tabs from "./tabs";


const Todos = () =>{
    const dispatch = useDispatch();
    const todo = useSelector(state => state.todos);
    const currentTab = useSelector(state => state.currentTab);

    useEffect(() =>{
        dispatch(getAllTodos());
    }, [])

    return (
            <article>
                <div>
                    <Tabs 
                        currentTab={currentTab}
                    />
                </div>
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