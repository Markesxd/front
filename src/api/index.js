import axios from 'axios';

const api = axios.create({ baseURL: 'https://clinica-application.herokuapp.com' });

export default api;
