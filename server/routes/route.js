import express from "express";
import { newTodo, getAllTodos, toggleToDoDone, updateTodo, deleteTodo  } from "../controller/controller.js";


const route = express.Router();

route.post('/todos', newTodo);
route.get('/todos', getAllTodos);
route.get('/todos/:id', toggleToDoDone);
route.put('/todos/:id', updateTodo);
route.delete('/todos/:id', deleteTodo);

export default route;