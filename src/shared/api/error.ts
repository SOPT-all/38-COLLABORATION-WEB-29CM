import type { AxiosError } from 'axios';
import axios from 'axios';

export const isAxiosStatusError = (
  error: unknown,
  status: number,
): error is AxiosError => {
  return axios.isAxiosError(error) && error.response?.status === status;
};
