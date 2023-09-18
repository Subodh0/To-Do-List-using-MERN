import express from "express";
import { newTodo, getAllTodos, toggleToDoDone  } from "../controller/controller.js";


const route = express.Router();

route.post('/todos', newTodo);
route.get('/todos', getAllTodos);
route.get('/todos/:id', toggleToDoDone);

export default route;