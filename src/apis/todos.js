import api from "./api";

export const getTodos = () => api.get("/todos");

export const addTodoItem = (todoItem) => api.post("/todos", todoItem);

export const updateTodo = (id, todoItem) => api.put(`/todos/${id}`, todoItem)

export const deleteTodo = (id) => api.delete(`/todos/${id}`)