import * as cors from 'cors';
import * as express from 'express';
import { Express } from 'express';
import { default as authApi } from './routes/auth';
import { default as permissionApi } from './routes/permission';
import { default as userApi } from './routes/user';
import { identifyUserMiddleware } from './services/user';

export default function createApp(): Express {
  // SETUP EXPRESS APP
  const app = express();
  app.use(cors());
  app.use(express.json());
  // IDENTIFY USER

  // API ENABLED ROUTES
  app.use('/auth', identifyUserMiddleware, authApi);
  app.use('/permission', identifyUserMiddleware, permissionApi);
  app.use('/user', identifyUserMiddleware, userApi);

  return app;
}
