import * as crypto from 'crypto';
import { NextFunction, Request, Response } from 'express';
import {
  API_CODES,
  API_CODE_MESSAGES,
} from './../../../universal/models/error/error.models';
import { User, USER_LEVEL } from './../../../universal/models/user';
import { API_DB } from './../../db';
import { authService } from './../../services/auth';

const usersDb = API_DB.users;

class UserService {
  user?: User;

  get(userId: string) {
    return usersDb[userId];
  }

  create(name: string, email: string, password: string, level: USER_LEVEL) {
    const userExists = this.getByEmail(email);
    if (userExists) {
      return {
        error: API_CODE_MESSAGES.CREATE_USER__USER_EXISTS,
        code: API_CODES.CREATE_USER__USER_EXISTS,
        data: { email },
      };
    } else {
      const id = crypto.randomBytes(16).toString('hex');
      const user = {
        id,
        name,
        email,
        level,
      };
      usersDb[id] = user;
      authService.create(id, password, level);
      return user;
    }
  }

  changeLevel(userId: string, level: USER_LEVEL) {
    const user = this.get(userId);
    user.level = level;
    return user;
  }

  getByEmail(email: string) {
    return Object.values(usersDb).find((user) => user.email === email);
  }
}

export const userService = new UserService();

export const identifyUserMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = authService.current(req);
  req.user = user;
  next();
};
