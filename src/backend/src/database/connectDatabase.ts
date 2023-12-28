import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

const delayConnect = (): void => {
  setTimeout(() => {
    client
      .connect()
      .then(() => console.log('Connected to the database.'))
      .catch((err) => console.error('Failed to connect to the database:', err));
  }, 5000);
};

delayConnect();

export default client;
