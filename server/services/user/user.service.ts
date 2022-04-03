import * as crypto from 'crypto';
import { NextFunction, Request, Response } from 'express';
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
    const id = crypto.randomBytes(16).toString('hex');
    authService.create(id, password, level);
    const user = {
      id,
      name,
      email,
      level,
    };
    usersDb[id] = user;
    return user;
  }

  changeLevel(userId: string, level: USER_LEVEL) {
    const user = this.get(userId);
    user.level = level;
    return user;
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
