import * as express from 'express';
import { Request } from 'express';
import { authService } from './../services/auth.service';

const userRoutes = express.Router();

userRoutes.post('/login', (req: Request, res) => {
  const user = req.body['user'];
  const pass = req.body['pass'];

  if (user && pass) {
    const loggedUser = authService.login(user, pass);
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
      .send({ error: 401, message: 'Invalid username or password' });
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
