import 'dotenv/config';
import { PrismaClient } from '@/lib/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import pg from 'pg';
import * as fs from 'fs';
import * as path from 'path';

const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('Missing DATABASE_URL or DIRECT_URL. Add them to your .env file before running the seed.');
}

const pool = new pg.Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Parsing products.json records...');

  const filePath = path.resolve(process.cwd(), 'prisma/products.json');
  const rawData = fs.readFileSync(filePath, 'utf-8');
  const products = JSON.parse(rawData);

  console.log(`Seeding ${products.length} products into Supabase...`);

  await prisma.product.deleteMany();

  for (const product of products) {
    await prisma.product.create({
      data: {
        ...product,
      },
    });
  }

  console.log('Seeding successfully completed!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
    await pool.end();
  })
  .catch(async (e) => {
    console.error('Seeding failed with error:', e);
    await prisma.$disconnect();
    await pool.end();
    process.exit(1);
  });