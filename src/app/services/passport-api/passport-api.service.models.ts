export type PassportApiServiceOptions = {
  path: string;
  payload?: any;
  httpHeaders?: { [key: string]: string };
  errorTitle?: string;
  errorMessage?: string;
  successTitle?: string;
  successMessage?: string;
};
