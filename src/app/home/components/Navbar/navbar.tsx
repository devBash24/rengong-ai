"use client"
import Avatar from '../Avatar/avatar'
import Logo from '../Logo/logo';
import DropdownMenu from './dropDownMenu';
import { useNavigation } from '@/Context/Navigation/navigationContext';
const Navbar = () => {
  const {isNavbarOpen, toggleNavbar} = useNavigation()
  return (
    <div className='bg-primary h-navbar flex justify-between items-center px-4'>
        <Logo />
        <div className='flex  gap-2 items-center hover:cursor-pointer'>
        <Avatar toggleMenu={toggleNavbar} />
        <DropdownMenu  isOpen={isNavbarOpen}/>
        </div>
    </div>
  )
}

export default Navbar