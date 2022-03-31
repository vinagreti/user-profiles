import * as express from 'express';
import { Request } from 'express';
import { authService } from './../services/auth';

const userRoutes = express.Router();

userRoutes.get('/current', (req, res) => {
  const user = authService.current(req);
  if (user) {
    res.send(user);
  } else {
    res.status(401).send();
  }
});

userRoutes.post('/login', (req: Request, res) => {
  const email = req.body['email'];
  const password = req.body['password'];
  const authMetadata = {
    userAgent: req.get('User-Agent')!,
  };
  if (email && password) {
    const loggedUser = authService.login(email, password, authMetadata);

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
