import * as cors from 'cors';
import * as express from 'express';
import { Express, Request, Response } from 'express';
import * as path from 'path'; // < -- add this
import { API_DB } from './db';

const clientPath = '../../public';

export default function createApp(): Express {
  const app = express();
  app.use(cors());
  const clientDir = path.join(__dirname, clientPath); // <-- add this
  app.use(express.static(clientDir)); // <-- and add this

  app.get('/api/:name', async (req: Request, res: Response) => {
    const name = req.params['name'];
    const greeting = { greeting: `Hello, ${name}` };
    res.send(greeting);
  });

  app.get('/user', async (req: Request, res: Response) => {
    res.send(API_DB.users[1]);
  });

  // handle everything else
  app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, `${clientPath}/index.html`));
  });

  return app;
}
