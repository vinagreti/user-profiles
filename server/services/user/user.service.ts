import * as crypto from 'crypto';
import { Request } from 'express';
import { User, USER_LEVEL } from './../../../src/app/models/user';
import { API_DB } from './../../db';
import { authService } from './../auth';

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

  current(req: Request) {
    const authUser = authService.getAuthUserByToken(req);
    return authUser ? usersDb[authUser.id] : undefined;
  }
}

export const userService = new UserService();
