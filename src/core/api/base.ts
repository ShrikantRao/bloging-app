import {default as axios, AxiosRequestConfig} from 'axios';
import {API_URL as baseURL} from '@env';

export const apiFetch = async (apiRoute: string, init?: AxiosRequestConfig) => {
  const instance = axios.create({
    baseURL,
    timeout: 5000,
    headers: {
      Accept: 'application/vnd.api+json',
    },
  });

  const response = await instance.request({
    ...init,
    url: apiRoute,
  });
  return response;
};
