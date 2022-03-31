export enum USER_LEVEL {
  DEVOPS = 'DEVOPS',
  ADMIN = 'ADMIN',
  CUSTOMER_SUPPORT = 'CUSTOMER_SUPPORT',
}

export interface User {
  id: string;
  name: string;
  email: string;
  level: USER_LEVEL;
}
