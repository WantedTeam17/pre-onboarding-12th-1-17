import axios from 'axios';

export const BASE_URL = 'https://www.pre-onboarding-selection-task.shop/';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

//Axios 요청 인터셉터를 추가하여 Authorization 헤더에 JWT 토큰을 포함
api.interceptors.request.use(
  config => {
    const token = localStorage.getItem('access_token');

    // 토큰을 찾았다면, 요청의 Authorization 헤더에 추가
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// Axios 응답 인터셉터를 추가하여 응답과 에러를 전역적으로 처리
api.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    console.error('다음 오류가 발생했습니다:', error);
    return Promise.reject(error);
  },
);

export default api;
