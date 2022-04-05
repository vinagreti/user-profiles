import * as express from 'express';
import { Request, Response } from 'express';
import { APP_ACTION } from './../../universal/models/permission/permission.models';
import { USER_LEVEL } from './../../universal/models/user/user.models';
import { userService } from './../services/user';

const permissionRoutes = express.Router();

permissionRoutes.post('/userLevel', (req: Request, res: Response) => {
  const currentUserPermissions = req.userPermissions;

  if (currentUserPermissions?.includes(APP_ACTION.UPDATE_USER)) {
    const userId = req.body['userId'];
    const level = req.body['level'];
    if (req.user?.level === USER_LEVEL.ADMIN) {
      userService.changeLevel(userId, level);
      const user = userService.get(userId);
      res.send(user);
    } else {
      res.status(405).send();
    }
  } else {
    res.status(405).send("User don't have permission to run this operation");
  }
});

export default permissionRoutes;
