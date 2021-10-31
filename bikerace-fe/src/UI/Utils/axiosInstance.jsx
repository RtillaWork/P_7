// Coomon axios config

import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: `${process.env.API_HOST}:${process.env.API_PORT}`,
  // baseURL: 'http://localhost:3001',
  baseURL: `${process.env.REACT_APP_API_HOST}:${process.env.REACT_APP_API_PORT}`,
  timeout: 1000,
  headers: {'Content-Type': 'application/json'}
});

export default axiosInstance;