import * as dotenv from 'dotenv';
import type { Config } from 'drizzle-kit';

dotenv.config();

let connectionString: string;

if (process.env.NODE_ENV === 'development') {
    console.log('Current environment:', process.env.NODE_ENV);
    connectionString = process.env.DATABASE_URL_TEST as string;
} else {
    connectionString = process.env.DATABASE_URL as string;
}

if (!connectionString) {
  throw new Error('DATABASE_URL is not set in the environment variables');
}

export default {
    dialect: 'postgresql',
    dbCredentials: {
        url: connectionString,
    },
    schema: './src/database/schemas',
    out: "./src/database/migrations",
    breakpoints: true,
    verbose: true,
    strict: true,
} satisfies Config;