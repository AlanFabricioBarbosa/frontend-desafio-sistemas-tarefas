import axios from "axios";

const api = axios.create({
  baseURL:
    "https://back-end-desafio-sistema-tarefa-production.up.railway.app/api/tasks",
});

export const getTasks = () => api.get("/");
export const createTask = (task) => api.post("/", task);
export const updateTask = (id, updatedTask) => api.put(`/${id}`, updatedTask);
export const deleteTask = (id) => api.delete(`/${id}`);
