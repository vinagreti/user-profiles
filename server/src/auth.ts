import * as express from 'express';
import { Request } from 'express';
import { authService } from './../services/auth';

const userRoutes = express.Router();

userRoutes.post('/login', (req: Request, res) => {
  const user = req.body['user'];
  const password = req.body['pass'];
  const authMetadata = {
    userAgent: req.get('User-Agent')!,
  };
  if (user && password) {
    const loggedUser = authService.login(user, password, authMetadata);

    if (loggedUser) {
      res.status(201).send(loggedUser);
    } else {
      res
        .status(401)
        .send({ error: 401, message: 'Invalid username or password' });
    }
  } else {
    res
      .status(401)
      .send({ error: 401, message: 'Username or password not provided' });
  }
});

userRoutes.get('/logout', (req, res) => {
  if (authService.logout(req)) {
    res.status(201).send();
  } else {
    res.status(401).send({ error: 401, message: 'User not authorized' });
  }
});

export default userRoutes;
