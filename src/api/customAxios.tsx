import axios from 'axios';

export const getAxios = (url: string) => {
  axios.get(url);
};

export const postAxios = (url: string, data: any) => {
  axios.post(url, data);
};

export const putAxios = (url: string, data: any) => {
  axios.put(url, data);
};

export const deleteAxios = (url: string) => {
  axios.delete(url);
};
