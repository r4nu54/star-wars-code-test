import { PeoplesApi } from './api.vm';

export const getPeoples = async () => {
  const url = 'https://swapi.dev/api/people/';
  const response = await fetch(url);
  const data: PeoplesApi = await response.json();

  return data;
};
