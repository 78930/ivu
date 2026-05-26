import axios from 'axios';

// Prefer explicit VITE_API_URL, otherwise use backend default port 5000
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
