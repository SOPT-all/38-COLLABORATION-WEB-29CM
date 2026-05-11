import type { AxiosRequestConfig } from 'axios';

import { axiosInstance } from './axios-instance';
import type { ApiResponse } from './types';

export const http = {
  get: async <TData>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<TData> => {
    const response = await axiosInstance.get<ApiResponse<TData>>(url, config);

    return response.data.data;
  },

  post: async <TData, TBody = unknown>(
    url: string,
    data?: TBody,
    config?: AxiosRequestConfig,
  ): Promise<TData> => {
    const response = await axiosInstance.post<ApiResponse<TData>>(
      url,
      data,
      config,
    );

    return response.data.data;
  },
};
