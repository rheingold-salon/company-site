import { env } from "@/env"
import { drizzle } from 'drizzle-orm/node-postgres'

export const db = drizzle({
    connection: {
        connectionString: env.DATABASE_URL,
        ssl: false,
    }, casing: 'snake_case'
});

export * from './schema';
