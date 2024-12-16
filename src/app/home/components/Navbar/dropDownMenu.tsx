"use client"
import { motion } from 'framer-motion';
import { signOut } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

const DropdownMenu = ({isOpen}:{ isOpen:boolean}) => {
  const router = useRouter();
  const signOutUser = async() => {
    const {error} = await signOut();
    if(error){
      alert(error);
    }
    router.replace("/")
  }

  // Framer Motion animation variants
  const menuVariants = {
    open: {
      opacity: 1,
      scale: 1,
      y: 15,
      transition: { duration: 0.2, ease: 'easeInOut' },
    },
    closed: {
      opacity: 0,
      scale: 0.95,
      y: -10,
      transition: { duration: 0.2, ease: 'easeInOut' },
    },
  };

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Menu */}
      <motion.div
        initial="closed"
        style={{zIndex:10099}}
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-lg bg-blue shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div className="py-2">
          {/* Profile Settings */}
          <button
            className="block w-full px-4 py-2 text-sm text-text hover:bg-background-alt rounded-md"
            onClick={() => console.log('Navigate to Profile Settings')}
          >
            Profile Settings
          </button>
          {/* Logout */}
          <button
          onClick={signOutUser}
            className="block w-full px-4 py-2 text-sm text-text hover:bg-background-alt rounded-md"
          >
            Logout
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default DropdownMenu;
