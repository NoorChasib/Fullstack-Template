import express, { Request, Response } from 'express';
import cors from 'cors';
import client from '@/database/connectDatabase';

type TimeRow = {
  now: string; // Adjusting the type to match the expected database response
};

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Hello World!');
});

// Route to check database connection and fetch the current time
app.get('/api/db-check', (_req: Request, res: Response) => {
  client
    .query<TimeRow>('SELECT NOW()')
    .then((dbResponse) => {
      const currentTime = dbResponse.rows[0].now;
      res.json({
        message: 'Database connection successful',
        time: currentTime,
      });
    })
    .catch((error: Error) => {
      console.error('Database query failed:', error);
      res.status(500).json({
        message: 'Database query failed',
        error: error.message,
      });
    });
});

app.listen(Number(port), '::', () =>
  console.log(`Server listening on [::]:${port}`),
);
