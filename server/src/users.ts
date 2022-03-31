import * as express from 'express';
import { API_DB } from './../db';
import { userService } from './../services/user';

const userRoutes = express.Router();

userRoutes.use((req, res, next) => {
  console.log('AUTHENTICATED');
  next();
});

userRoutes.get('/', (req, res) => {
  res.send(Object.values(API_DB.users));
});

userRoutes.post('/', (req, res) => {
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

userRoutes.get('/:id', (req, res) => {
  const userId: string = req.params['id'];
  const user = API_DB.users[userId];
  res.send(user);
});

export default userRoutes;
