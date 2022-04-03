export interface User {
  id: string;
  name: string;
  email: string;
  level: USER_LEVEL;
}

export type NewUser = Omit<User, 'id'> & { password: string };

export enum USER_LEVEL {
  DEVOPS = 'DEVOPS',
  ADMIN = 'ADMIN',
  CUSTOMER_SUPPORT = 'CUSTOMER_SUPPORT',
}
