import axios from 'axios';

export const API_SUFFIX = {
  BASE_URL: 'https://pay.hanum.us',
  BOOTH_PAYMENT_DETAIL: '/eoullim/booth/payment/detail',
};

export const instance = axios.create({
  baseURL: API_SUFFIX.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface APIResponse<T = unknown> {
  message: string;
  data: T;
}

export interface APIErrorResponse {
  message: string;
  data?: null;
}

export const setAccessToken = (token: string | null) => {
  console.log('setAccessToken', token);
  if (token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete instance.defaults.headers.common.Authorization;
  }
};
