import { User } from './../user';

export interface AuthUser {
  id: string;
  password: string;
  token?: string;
}

export interface AuthMetadata {
  userAgent: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}
