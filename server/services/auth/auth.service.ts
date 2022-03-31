import { Request } from 'express';
import { User, USER_LEVEL } from './../../../src/app/models/user';
import { API_DB } from './../../db';
import { AuthMetadata } from './auth.service.models';

const crypto = require('crypto');

const auth = API_DB.auth;

const users = API_DB.users;

class AuthService {
  user?: User;

  create(id: string, password: string, level: USER_LEVEL) {
    auth[id] = {
      id,
      password: this.getToken(password),
      level,
    };
  }

  login(email: string, password: string, authMetadata: AuthMetadata) {
    const userIdByToken = Object.keys(users).find(
      (key) => users[key].email === email
    );
    if (userIdByToken) {
      const userAuthData = auth[userIdByToken];
      const passwordMatch = userAuthData?.password === this.getToken(password);
      if (passwordMatch) {
        const authTokens = this.getAuthTokens(authMetadata);
        userAuthData.token = authTokens.privateToken;
        return authTokens.publicToken;
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
    const publicToken = req.headers.authorization;
    if (publicToken) {
      const userAgent = req.get('User-Agent')!;
      const authTokens = this.getAuthTokens({ userAgent }, publicToken);
      const userIdByToken = Object.keys(auth).find(
        (key) => auth[key].token === authTokens.privateToken
      );
      return auth[userIdByToken!];
    } else {
      return undefined;
    }
  }

  private getAuthTokens(
    authMetadata: AuthMetadata,
    publicToken: string = this.getRandomToken()
  ) {
    const agentToken = this.getToken(authMetadata.userAgent);
    const privateToken = `${publicToken}${agentToken}`;
    return {
      privateToken,
      publicToken,
    };
  }

  private getToken(uid: string) {
    return crypto.createHash('sha256').update(uid).digest('hex');
  }

  private getRandomToken() {
    return crypto.randomBytes(16).toString('hex');
  }
}

export const authService = new AuthService();
