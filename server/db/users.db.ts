import { User } from './../../src/app/models/user';

export type UserDb = {
  [key: string]: User;
};

const users: UserDb = {
  admin: {
    id: 'admin',
    name: 'admin',
    email: 'admin@admin.com',
  },
};

export default users;
