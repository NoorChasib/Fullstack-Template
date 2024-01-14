import express, { Request, Response } from 'express';
import cors from 'cors';
import client from '@/database/connectDatabase';

type User = {
  id: number;
  username: string;
  email: string;
  password_hash: string;
  created_at: string;
};

const app = express();
const port = process.env.BACKEND_PORT;

app.use(express.json());
app.use(cors());

app.get('/', (_req: Request, res: Response) => {
  res.status(200).send('Hello World!');
});

// Route to check database connection and fetch test user
app.get('/api/db-check', (_req: Request, res: Response) => {
  client
    .query("SELECT * FROM users WHERE username = 'testuser'")
    .then((dbResponse) => {
      if (dbResponse.rows.length > 0) {
        const user: User = dbResponse.rows[0] as User;
        res.json({
          message: 'Database connection successful',
          user: user,
        });
      } else {
        res.status(404).json({ message: 'Test user not found' });
      }
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
  console.log(`Server listening on [::]${port}`),
);
