import React from 'react'
import db from '@/utils/db';

async function AboutPage() {
  const user = await db.prisma.testProfile.create({
    data: {
      name: 'Rufai with supabase and prisma',
    },
  });

  const users = await db.prisma.testProfile.findMany();
  return (
    <div>
      {users.map((user) => {
        return (
          <h2 key={user.id} className='text-2xl font-black'>{user.name }</h2>
        )
      })}
    </div>
  )
};

export default AboutPage;