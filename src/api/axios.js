import axios from 'axios';

export const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // 공통적인 에러 처리 추가
    if (error.response && error.response.status === 401) {
      // 인증 관련 에러 처리
    } else {
      console.error('다음 오류가 발생했습니다:', error);
    }
    return Promise.reject(error);
  },
);

export default api;
