import api from "./api";

export const getTodos = () => api.get("/todos");

export const addTodoItem = (todoItem) => api.post("/todos", todoItem);

export const updateTodo = (id, done) => api.put(`/todos/${id}`, { done: done })

export const deleteTodo = (id) => api.delete(`/todos/${id}`)