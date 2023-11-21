export interface Response<T> {
  errors: [];
  success: boolean;
  data: T;
  status: number;
}
