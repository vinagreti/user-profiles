import { USER_LEVEL } from './../src/app/models/user';

export const API_DB = {
  users: {
    1: { id: 1, name: 'user 1', password: '1', role: USER_LEVEL.ADMIN },
    2: {
      id: 2,
      name: 'user 2',
      password: '2',
      role: USER_LEVEL.CUSTOMER_SUPPORT,
    },
    3: { id: 3, name: 'user 3', password: '3', role: USER_LEVEL.DEVOPS },
  },
};
