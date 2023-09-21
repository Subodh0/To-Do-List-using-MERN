import { deleteTodo, getAllTodos } from "../redux/actions/index";
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { ALL_TODO, ACTIVE_TODO, DONE_TODO } from "../redux/actions/type";
import TODO from "./todo";
import Tabs from "./tabs";


const Todos = () =>{
    const dispatch = useDispatch();
    const todo = useSelector(state => state.todos);
    const currentTab = useSelector(state => state.currentTab);

    useEffect(() =>{
        dispatch(getAllTodos());
    }, [])

    const getTodo = () =>{
        if (currentTab === ALL_TODO) {
            return todo;
        }
        else if (currentTab === ACTIVE_TODO) {
            return todo.filter(todo => todo.done === false);
        }
        else if (currentTab === DONE_TODO) {
            return todo.filter(todo => todo.done === true);
        }
    }

    const deleteDoneTodo = () =>{
        todo.forEach(({done, _id}) =>{
            if(done){
                dispatch(deleteTodo(_id));
            }
        })
    }

    return (
            <article>
                <div>
                    <Tabs 
                        currentTab={currentTab}
                    />

                    {
                        todo.some(todo => todo.done) ? (
                            <button
                                onClick={deleteDoneTodo}
                                className="button clear"
                            >Delete Done Todo</button>
                        ) : null
                    }
                </div>
                <ul>
                    {
                        getTodo().map(todo =>(
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