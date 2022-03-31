import { User, USER_LEVEL } from './../../universal/models/user/user.models';
export type UserDb = {
  [key: string]: User;
};

const users: UserDb = {
  admin: {
    id: 'admin',
    name: 'admin',
    email: 'admin@admin.com',
    level: USER_LEVEL.ADMIN,
  },
};

export default users;
