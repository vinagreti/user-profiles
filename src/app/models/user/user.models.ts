export interface User {
  id: string;
  name: string;
  age: string;
  level: USER_LEVEL;
}

export enum USER_LEVEL {
  DEVOPS = 'DEVOPS',
  ADMIN = 'ADMIN',
  CUSTOMER_SUPPORT = 'CUSTOMER_SUPPORT',
}
