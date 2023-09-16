import express from "express";
import { newTodo } from "../controller/controller.js";

const route = express.Router();

route.post('/todos', newTodo);
export default route;