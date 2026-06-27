import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8080/api', // URL base do seu servidor Spring Boot
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor automático: Adiciona o Token JWT no cabeçalho se ele existir no navegador
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('@vendas-online:token');
  
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  return config;
}, (error) => {
  return Promise.reject(error);
});
