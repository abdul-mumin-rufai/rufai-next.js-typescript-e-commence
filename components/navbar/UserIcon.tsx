import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { currentUser } from '@clerk/nextjs/server';

async function UserIcon() {
  // grab user from clerk
  const user = await currentUser();
  // grab profileImage form the user
  const profileImage = user?.imageUrl;

  if (profileImage) {
    <img src={profileImage} className='w-6 h-6 rounded-full object-cover'/>
  }
  
  return (
    <FaUserCircle className='w-6 h-6 bg-primary rounded-full text-white'/>
  )
};

export default UserIcon;