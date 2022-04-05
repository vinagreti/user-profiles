import * as express from 'express';
import { Request, Response } from 'express';
import { APP_ACTION } from './../../universal/models/permission/permission.models';
import { API_DB } from './../db';
import { userService } from './../services/user';

const userRoutes = express.Router();

userRoutes.get('/', (req: Request, res: Response) => {
  const userPermissions = req.userPermissions;

  if (userPermissions?.includes(APP_ACTION.READ_USER)) {
    res.send(Object.values(API_DB.users));
  } else {
    res.status(405).send("User don't have permission to run this operation");
  }
});

userRoutes.post('/', (req: Request, res: Response) => {
  const userPermissions = req.userPermissions;

  if (userPermissions?.includes(APP_ACTION.CREATE_USER)) {
    const name = req.body['name'];
    const email = req.body['email'];
    const password = req.body['password'];
    const level = req.body['level'];
    const newUser = userService.create(name, email, password, level);
    if (newUser) {
      res.send(newUser);
    } else {
      res.status(400).send('Problems creating user');
    }
  } else {
    res.status(405).send("User don't have permission to run this operation");
  }
});

userRoutes.get('/:id', (req: Request, res: Response) => {
  const userPermissions = req.userPermissions;

  if (userPermissions?.includes(APP_ACTION.READ_USER)) {
    const userId: string = req.params['id'];
    const user = API_DB.users[userId];
    res.send(user);
  } else {
    res.status(405).send("User don't have permission to run this operation");
  }
});

export default userRoutes;
