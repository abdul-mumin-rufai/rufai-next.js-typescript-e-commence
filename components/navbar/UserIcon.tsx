'use client'
import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { useUser } from '@clerk/nextjs';

function UserIcon() {
  // grab user from clerk
const  {user} = useUser();
  // grab profileImage form the user
  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <img
        src={profileImage}
        alt='profile image'
        className='w-6 h-6 bg-primary rounded-full text-white object-cover'
      />
    );
  }

  return (
    <FaUserCircle className='w-6 h-6 bg-primary rounded-full text-white'/>
  )
};

export default UserIcon;