export interface User {
  id: string;
  name: string;
  email: string;
}

export enum USER_LEVEL {
  DEVOPS = 'DEVOPS',
  ADMIN = 'ADMIN',
  CUSTOMER_SUPPORT = 'CUSTOMER_SUPPORT',
}
