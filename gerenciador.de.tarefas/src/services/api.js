import axios from "axios";

const api = axios.create({
    baseURL: "https://gerenciador-de-tarefas-back.onrender.com",
});

export default api;