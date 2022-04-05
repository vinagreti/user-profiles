import { APP_ACTION } from '@models/permission';
import { User } from './../../../universal/models/user/user.models';

declare global {
  namespace Express {
    interface Request {
      user: User | undefined;
      userPermissions: APP_ACTION[];
    }
  }
}
