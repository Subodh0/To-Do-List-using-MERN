import todo from "../model/Todo.js";
// Correct import statement


export const newTodo = async (request, response)=>{
    try {
        const addTodo = await todo.create({
            data: request.body.data,
            createdAt : Date.now()
        })

        await addTodo.save();
        return response.status(200).json(addTodo);
    }catch(error){
        return response.status(500).json(error.message)
    }
}

export const getAllTodos = async(request, response) =>{
    try {
        const todos = await todo.find({}).sort({'createdAt': -1})
        return response.status(200).json(todos);
    }catch(error){
        return response.status(500).json(error.message)
    }
}

export const toggleToDoDone = async(request, response) =>{
    try {
        const todoRef = await todo.findById(request.params.id)

        const todo_ = await todo.findOneAndUpdate(
            { _id: request.params.id },
            { done: !todoRef.done } 
        )
        await todo_.save();
        return response.status(200).json(todo_);
    }catch(error){
        return response.status(500).json(error.message)
    }
}
export const updateTodo = async(request, response) =>{
    try {
        await todo.findOneAndUpdate(
            { _id: request.params.id },
            { data: request.body.data }
        )
        const todo_ = await todo.findById(request.params.id)
        return response.status(200).json(todo_);
    }catch(error){
        return response.status(500).json(error.message)
    }
}
