import React from 'react'
import Avatar from '../Avatar/avatar'
import { HiDotsVertical } from "react-icons/hi";
import Logo from '../Logo/logo';
const Navbar = () => {
  return (
    <div className='bg-primary h-16 flex justify-between items-center px-4'>
        <Logo />
        <div className='flex  gap-2 items-center'>
        <Avatar />
        <HiDotsVertical className='text-3xl text-white' />
        </div>
    </div>
  )
}

export default Navbar