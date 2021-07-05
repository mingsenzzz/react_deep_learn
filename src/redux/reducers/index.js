import { combineReducers } from "redux";
import todos from "./todo.js";
import others from "./others.js";
export default combineReducers({ todos, others });
