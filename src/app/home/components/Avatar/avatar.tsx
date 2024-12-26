import Image from 'next/image'
import { useAuthContext } from '@/Context/Auth/authContext'
const Avatar = () => {
    const {user} = useAuthContext()
  return (
    <div className='w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full shadow-md hover:cursor-pointer hover:opacity-80 transition-all duration-300'>
        {
            user?.user_metadata.avatar_url ? <Image src={user?.user_metadata.avatar_url} width={100} height={100} alt='avatar'/> :
            <Image src='/assets/default-avatar.png' width={100} height={100} alt='avatar' priority/>
        }
    </div>
  )
}

export default Avatar