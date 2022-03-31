import { USER_LEVEL } from '@models/user';

export type AppPermisisonsMap = { [key in USER_LEVEL]: APP_ACTION[] };

export enum APP_ACTION {}

export const APP_PERMISSIONS: AppPermisisonsMap = {
  [USER_LEVEL.ADMIN]: [],
  [USER_LEVEL.CUSTOMER_SUPPORT]: [],
  [USER_LEVEL.DEVOPS]: [],
};
