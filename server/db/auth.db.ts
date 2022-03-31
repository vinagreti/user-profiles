import { AuthUser } from './../../universal/models/auth/auth.models';

export type AuthUserDb = {
  [key: string]: AuthUser;
};

const authUsers: AuthUserDb = {
  admin: {
    id: 'admin',
    password:
      '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918',
  },
};

export default authUsers;
