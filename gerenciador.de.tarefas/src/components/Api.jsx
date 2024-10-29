import axios from 'axios';

const api = axios.create({
  baseURL 
});

api.get('/dados')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
const ToDoApi = {
    'getTasks': () => axiosInstance.get('/todos'),
    'getTask': (id) => axiosInstance.get(`/todos/${id}`),
    'createTask': (task) => axiosInstance.post('/todos', task),
    'updateTask': (id, task) => axiosInstance.put(`/todos/${id}`, task),
    'deleteTask': (id) => axiosInstance.delete(`/todos/${id}`)
}

export default ToDoApi