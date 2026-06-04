import 'dotenv/config';
import { PrismaClient } from './lib/generated/prisma/client/index.js';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';

const { Pool } = pg;
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

try {
  const count = await prisma.product.count();
  console.log('COUNT', count);
} finally {
  await prisma.$disconnect();
  await pool.end();
}
