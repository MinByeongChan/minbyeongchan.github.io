import axios from 'axios';

const BASE_URL = 'https://35.72.112.44:443';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const getAxios = (url: string) => {
  return axios.get(BASE_URL + url, config);
};

export const postAxios = (url: string, data: any) => {
  return axios.post(BASE_URL + url, data, config);
};

export const putAxios = (url: string, data: any) => {
  return axios.put(BASE_URL + url, data, config);
};

export const deleteAxios = (url: string) => {
  return axios.delete(BASE_URL + url, config);
};
