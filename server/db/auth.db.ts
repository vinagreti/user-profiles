import { USER_LEVEL } from './../../src/app/models/user';

export type AuthUser = {
  id: string;
  password: string;
  level: USER_LEVEL;
  token?: string;
};

export type AuthUserDb = {
  [key: string]: AuthUser;
};

const authUsers: AuthUserDb = {
  admin: {
    id: 'admin',
    password:
      '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918',
    level: USER_LEVEL.ADMIN,
  },
};

export default authUsers;
