import { API_FLAGS_URL } from './constants';
import { User } from './types';

export const filterByName = (name?: string) => (user: User) => {
  if (!name) {
    return true;
  }

  return `${user.name.first} ${user.name.last}`
    .toLowerCase()
    .includes(name.toLowerCase());
};

export const getUserFlag = (user: User) =>
  `${API_FLAGS_URL}/${user.nat}/shiny/64.png`;
