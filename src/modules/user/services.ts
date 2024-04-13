import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { USER_API_URL as baseURL, USER_API_SEED as seed } from './constants';
import { GetUserRes } from './types';

const client = axios.create({
  baseURL,
});

export type GetUsersParams = {
  page: number;
  limit: number;
  seed: string;
};

const defaultGetUserParams: GetUsersParams = {
  limit: 100,
  page: 1,
  seed,
};

export const fetchUsers = async (fetchParams?: Partial<GetUsersParams>) => {
  const queryParams = { ...defaultGetUserParams, ...fetchParams };
  const params = new URLSearchParams([
    ['results', String(queryParams.limit)],
    // Note: randomuser.me API supports pagination
    ['page', String(queryParams.page)],
    ['seed', queryParams.seed],
  ]);

  try {
    const response = await client.get<GetUserRes>('/', { params });
    return response.data.results;
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    throw error;
  }
};

export const useUsers = (reqParams?: Partial<GetUsersParams>) => {
  return useQuery({
    queryKey: ['users', reqParams],
    queryFn: () => fetchUsers(reqParams),
  });
};
