import React from 'react'
import Image from 'next/image'
const Avatar = ({img}:{img?:string}) => {
  return (
    <div className='w-10 h-10 overflow-hidden rounded-full shadow-md hover:cursor-pointer hover:opacity-80 transition-all duration-300'>
        {
            img ? <Image src={img} width={100} height={100} alt='avatar'/> :
            <Image src='/assets/default-avatar.png' width={100} height={100} alt='avatar'/>
        }
    </div>
  )
}

export default Avatar