import * as cors from 'cors';
import * as express from 'express';
import { Express } from 'express';
import { default as authApi } from './src/auth';
import { default as userApi } from './src/users';

export default function createApp(): Express {
  const app = express();
  app.use(cors());
  app.use(express.json());

  // API ENABLED ROUTES
  app.use((req, res, next) => {
    console.log('AUTHENTICATED');
    next();
  });

  app.use('/auth', authApi);
  app.use('/user', userApi);

  return app;
}
