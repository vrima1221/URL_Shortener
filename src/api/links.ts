import { URL } from '../types/URL';
import { client } from './fetchClient';

export const getLinkById = (id: number) => {
  return client.get(`/Get?id=${id}`);
};

export const getAll = () => {
  return client.get('/GetAll');
};

export const postOrPatchLink = (url: URL) => {
  return client.post('/CreateEdit', { ...url });
};

export const deleteLink = (id: number) => {
  return client.delete(`/Delete?id=${id}`);
};
