import { USER_LEVEL } from './../user';

export enum APP_ACTION {
  CREATE_USER = 'CREATE_USER',
  READ_USER = 'READ_USER',
  UPDATE_USER = 'UPDATE_USER',
  DELETE_USER = 'DELETE_USER',
}

export type AppPermisisonsMap = { [key in USER_LEVEL]: APP_ACTION[] };

export const APP_PERMISSIONS: AppPermisisonsMap = {
  [USER_LEVEL.ADMIN]: [...Object.values(APP_ACTION)],
  [USER_LEVEL.CUSTOMER_SUPPORT]: [APP_ACTION.READ_USER],
  [USER_LEVEL.DEVOPS]: [APP_ACTION.READ_USER],
};
