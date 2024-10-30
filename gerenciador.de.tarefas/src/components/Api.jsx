import axios from 'axios';

const ToDoApi = {
    'getTasks': () => axiosInstance.get('/todos'),
    'getTask': (id) => axiosInstance.get(`/todos/${id}`),
    'createTask': (task) => axiosInstance.post('/todos', task),
    'updateTask': (id, task) => axiosInstance.put(`/todos/${id}`, task),
    'deleteTask': (id) => axiosInstance.delete(`/todos/${id}`)
}

export default ToDoApi