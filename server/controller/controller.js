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

        const todo = await todo.findOneAndUpdate(
            { _id: request.params.id },
            { done: !todoRef.done } 
        )
        await todo.save();
        return response.status(200).json(todo);
    }catch(error){
        return response.status(500).json(error.message)
    }
}
