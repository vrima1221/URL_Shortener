import { dataFromServer, URL } from '../types/URL';
import { client } from './fetchClient';

export const getLinkById = (id: string | undefined) => {
  return client.get<dataFromServer>(`/Get?id=${id}`);
};

export const getAll = async () => {
  return client.get<any>('/GetAll');
};

export const postOrPatchLink = (url: URL) => {
  return client.post('/CreateEdit', { ...url });
};

export const deleteLink = (id: number) => {
  return client.delete(`/Delete?id=${id}`);
};
