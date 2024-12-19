"use client"
import Avatar from '../Avatar/avatar'
import Logo from '../Logo/logo';
import DropdownMenu from './dropDownMenu';
import { useNavigation } from '@/Context/Navigation/navigationContext';
const Navbar = () => {
  const {isNavbarOpen, toggleNavbar} = useNavigation()
  return (
    <div className='bg-primary h-navbar max-h-navbar flex justify-between items-center px-4 py-2'>
        <Logo />
        <div onClick={toggleNavbar} className='flex  gap-2 items-center hover:cursor-pointer'>
        <Avatar />
        <DropdownMenu  isOpen={isNavbarOpen}/>
        </div>
    </div>
  )
}

export default Navbar