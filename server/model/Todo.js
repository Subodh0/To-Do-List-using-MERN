import mongoose from "mongoose";

const todoSchema = ({
    data: {
        type: String,
        required: true
    },
    done: {
        type : Boolean,
        default : false
    },
    createdAt: {
        type: Date,
        default : Date.now()
    }
})

const todo = mongoose.model('todo', todoSchema);

export default todo;