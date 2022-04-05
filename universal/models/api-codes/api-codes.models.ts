export enum API_CODES {
  // ERROR
  CREATE_USER__USER_EXISTS = 'CREATE_USER__USER_EXISTS',
}

export const API_CODE_MESSAGES: Record<API_CODES, string> = {
  [API_CODES.CREATE_USER__USER_EXISTS]: 'User already exists',
};
