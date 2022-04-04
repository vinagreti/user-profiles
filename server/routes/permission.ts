import * as express from 'express';
import { Request, Response } from 'express';
import { USER_LEVEL } from './../../universal/models/user/user.models';
import { userService } from './../services/user';

const permissionRoutes = express.Router();

permissionRoutes.post('/userLevel', (req: Request, res: Response) => {
  const userId = req.body['userId'];
  const level = req.body['level'];
  if (req.user?.level === USER_LEVEL.ADMIN) {
    userService.changeLevel(userId, level);
    const user = userService.get(userId);
    res.send(user);
  } else {
    res.status(405).send();
  }
});

export default permissionRoutes;
