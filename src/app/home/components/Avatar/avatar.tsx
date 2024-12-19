import React, { useEffect } from 'react'
import Image from 'next/image'
import { createClient } from '@/lib/supabase/client'
const Avatar = ({img}:{img?:string}) => {
  const [userImage, setUserImage] = React.useState<string | null>(null)
  const supabase = createClient()
  useEffect(() => {
    const fetchUserImage = async () => {
      const { data, error } = await supabase.auth.getUser()
      if (error) {
        console.log(error)
      }else{
        setUserImage(data.user?.user_metadata.avatar_url)
      }
    }
    fetchUserImage().catch((error) => console.log(error))
    
  },[])
  return (
    <div className='w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full shadow-md hover:cursor-pointer hover:opacity-80 transition-all duration-300'>
        {
            userImage ? <Image src={userImage} width={100} height={100} alt='avatar'/> :
            <Image src='/assets/default-avatar.png' width={100} height={100} alt='avatar' priority/>
        }
    </div>
  )
}

export default Avatar