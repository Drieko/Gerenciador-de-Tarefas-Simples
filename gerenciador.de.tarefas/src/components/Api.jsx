// fé
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://gerenciador-de-tarefas-back.onrender.com/api",
});

const ToDoApi = {
    'getTasks': () => axiosInstance.get('/'),
    'getTask': (id) => axiosInstance.get(`/${id}`),
    'createTask': (task) => axiosInstance.post('/create/', task),
    'updateTask': (id, task) => axiosInstance.put(`/${id}`, task),
    'deleteTask': (id) => axiosInstance.delete(`/${id}`)
}

export default ToDoApi