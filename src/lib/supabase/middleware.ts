import { NextResponse, type NextRequest } from "next/server"
import { createServerClient } from "@supabase/ssr"
export async function updateSession(request: NextRequest) {
  // Create a Supabase client with cookies handling
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            request.cookies.set(name, value) // Ensure correct cookie options
          })
        },
      },
    }
  )

  // Get the current user from Supabase
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Create the response object
  let supabaseResponse = NextResponse.next({ request })

  

  // If user is not authenticated, redirect to the home page (if not already there)
  if (!user && !request.nextUrl.pathname.startsWith("/")) {
    console.log("not authenticated")
    const url = request.nextUrl.clone()
    url.pathname = "/"
    console.log("redirecting to", url.pathname)

    return NextResponse.redirect(url)
  }

  // If user is authenticated, redirect to /chat (if not already there)
  console.log(request.nextUrl.pathname)
  if (user && !request.nextUrl.pathname.startsWith("/home")) {
    console.log("is authenticated")

    const url = request.nextUrl.clone()
    url.pathname = "/home"
    console.log("redirecting to", url.pathname)
    
    return NextResponse.redirect(url)
  }


  return supabaseResponse
}
 
// export async function updateSession(request: NextRequest) {
//   let supabaseResponse = NextResponse.next({
//     request,
//   })
 
//   // Create a Supabase client
//   const supabase = createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         getAll() {
//           return request.cookies.getAll()
//         },
//         setAll(cookiesToSet) {
//           cookiesToSet.forEach(({ name, value, options }) =>
//             request.cookies.set(name, value)
//           )
//           supabaseResponse = NextResponse.next({
//             request,
//           })
//           cookiesToSet.forEach(({ name, value, options }) =>
//             supabaseResponse.cookies.set(name, value, options)
//           )
//         },
//       },
//     }
//   )
 
//   // Get the current user from Supabase
//   const {
//     data: { user },
//   } = await supabase.auth.getUser()
 

//   // Redirect unauthenticated users to sign-in page
//   if (
//     !user &&
//     !request.nextUrl.pathname.startsWith("/chat")
//   ) {
//     const url = request.nextUrl.clone()
//     url.pathname = "/"
//     url.searchParams.set("next", request.nextUrl.pathname)
//     return NextResponse.redirect(url)
//   }
 
//   // Redirect authenticated users attempting to access the sign-in page to the home page
//   if (user && request.nextUrl.pathname.startsWith("/")) {
//     const url = request.nextUrl.clone()
//     url.pathname = "/chat"
//     return NextResponse.redirect(url)
//   }
 
//   return supabaseResponse
// }