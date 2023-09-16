import todo from "../model/Todo.js";

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
