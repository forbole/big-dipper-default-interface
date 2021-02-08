/* eslint-disable */
import 'dotenv-defaults/config';
import express, { Request, Response } from 'express';
import next from 'next';
import cors from 'cors';

const dev = process.env.NODE_ENV !== 'production';
const app = next({
  dev,
});
const handle = app.getRequestHandler();
const port = process.env.PORT;

(async () => {
  try {
    await app.prepare();
    const server = express();

    server.use(cors());

    server.all('*', (req: Request, res: Response) => {
      return handle(req, res);
    });
    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log('> Blast Off Ready On:');
      console.log(`> URL: http://localhost:${process.env.PORT}`);
      console.log(`> ENV: ${process.env.NODE_ENV}`);
      console.log(`> PORT: ${process.env.PORT}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
