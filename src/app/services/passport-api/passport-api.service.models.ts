export type PassportApiServiceOptions = {
  path: string;
  payload?: any;
  httpHeaders?: { [key: string]: string };
  errorMessage?: string;
  successMessage?: string;
};
