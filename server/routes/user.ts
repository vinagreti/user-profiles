import * as express from 'express';
import { Request, Response } from 'express';
import { API_DB } from './../db';
import { userService } from './../services/user';

const userRoutes = express.Router();

userRoutes.get('/', (req: Request, res: Response) => {
  res.send(Object.values(API_DB.users));
});

userRoutes.post('/', (req: Request, res: Response) => {
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
});

userRoutes.get('/:id', (req: Request, res: Response) => {
  const userId: string = req.params['id'];
  const user = API_DB.users[userId];
  res.send(user);
});

export default userRoutes;
