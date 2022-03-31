import * as crypto from 'crypto';
import { User, USER_LEVEL } from './../../../universal/models/user';
import { API_DB } from './../../db';
import { authService } from './../../services/auth';

const usersDb = API_DB.users;

class UserService {
  user?: User;

  create(name: string, email: string, password: string, level: USER_LEVEL) {
    const id = crypto.randomBytes(16).toString('hex');
    authService.create(id, password, level);
    const user = {
      id,
      name,
      email,
    };
    usersDb[id] = user;
    return user;
  }
}

export const userService = new UserService();
