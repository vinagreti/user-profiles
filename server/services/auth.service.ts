import { Request } from 'express';
import { User, USER_LEVEL } from './../../src/app/models/user';
import { API_DB } from './../db';

var crypto = require('crypto');

var hash = crypto.createHash('sha256');

const authUsersDb = API_DB.authUsers;
const usersDb = API_DB.users;

class AuthService {
  user?: User;

  create(id: string, password: string, level: USER_LEVEL) {
    const passwdHash = this.getPasswdHash(password);
    console.log('passwdHash', passwdHash);
    authUsersDb[id] = {
      id,
      password: passwdHash,
      level,
    };
  }

  login(email: string, password: string) {
    const userIdByToken = Object.keys(usersDb).find(
      (key) => usersDb[key].email === email
    );
    if (userIdByToken) {
      console.log('userIdByToken', userIdByToken);
      const userAuthData = authUsersDb[userIdByToken];
      const passwordHash = this.getPasswdHash(password);

      const passwordMatch = userAuthData.password === passwordHash;
      if (passwordMatch) {
        const token = crypto.randomBytes(16).toString('hex');
        userAuthData.token = token;
        return token;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  logout(req: Request) {
    const authUser = this.getAuthUserByToken(req);
    if (!!authUser) {
      authUser.token = undefined;
      return true;
    } else {
      return false;
    }
  }

  isAuthenticated(req: Request) {
    return !!this.getAuthUserByToken(req);
  }

  getAuthUserByToken(req: Request) {
    const authorization = req.headers.authorization;
    if (authorization) {
      const userIdByToken = Object.keys(authUsersDb).find(
        (key) => authUsersDb[key].token === authorization
      );
      return authUsersDb[userIdByToken!];
    } else {
      return undefined;
    }
  }

  private getPasswdHash(password: string) {
    return crypto.createHash('sha256').update(password).digest('hex');
  }
}

export const authService = new AuthService();
