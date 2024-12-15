import React from 'react'
import Image from 'next/image'
const Avatar = ({img, toggleMenu}:{img?:string, toggleMenu?:() => void}) => {
  return (
    <div onClick={toggleMenu} className='w-10 h-10 overflow-hidden rounded-full shadow-md hover:cursor-pointer hover:opacity-80 transition-all duration-300'>
        {
            img ? <Image src={img} width={100} height={100} alt='avatar'/> :
            <Image src='/assets/default-avatar.png' width={100} height={100} alt='avatar' priority/>
        }
    </div>
  )
}

export default Avatar