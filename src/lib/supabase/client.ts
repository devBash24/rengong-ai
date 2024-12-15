import "client-only"
 
import { createBrowserClient } from "@supabase/ssr"
 
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}


export const signOut =async () => await createClient().auth.signOut()