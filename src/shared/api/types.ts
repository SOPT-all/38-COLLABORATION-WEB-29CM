export type ApiResponse<TData> = {
  code: string;
  success: boolean;
  message: string;
  data: TData;
};
