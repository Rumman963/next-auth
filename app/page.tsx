// "use client"
// import { SessionProvider, signIn, signOut, useSession } from "next-auth/react"
import { getServerSession } from "next-auth";


export default async function HomeOne() {

  const session = await getServerSession()

  return (
  
  <div>
       {JSON.stringify(session)}
  </div>
  )
}














// function RealHome(){
// 
// 
  //  const session = useSession();
// 
// 
  // return <div>
    {/* {session.status === "authenticated" && <button onClick={()=> signOut()}>Logout</button>} */}
    {/* {session.status === "unauthenticated" && <button onClick={()=> signIn()}>Sign In</button>} */}
{/*  */}
    {/* </div> */}
// }
// 
// 
// 
// export default function Home() {
  // 
// 
  // return <div>
     {/* <SessionProvider> */}
       {/* <RealHome /> */}
     {/* </SessionProvider> */}
    {/* </div> */}
// 
// }
// 
// 
// 
// 
// 
// 
// 



;






