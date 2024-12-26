import { createClient } from "@/lib/supabase/client"




export const onSignUp = async (formData:{email:string,password:string}) =>{
    const supabase = createClient()
    const {data,error} = await supabase.auth.signUp({
        email:formData.email,
        password:formData.password
    })
    if(error){
        console.log(error)
    }

    console.log(data || error)
}