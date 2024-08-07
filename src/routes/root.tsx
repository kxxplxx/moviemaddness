import { Outlet } from "react-router-dom";
import Appbar from "../Components/Appbar";
import { useState, useEffect } from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'



export default function Root() {
  const [session, setSession] = useState(null)
  console.log(session)
  /**useEffect(() => {
     supabase.auth.getSession().then(({ data: { session } }) => {
       setSession(session)
     })
 
     const {
       data: { subscription },
     } = supabase.auth.onAuthStateChange((_event, session) => {
       setSession(session)
     })
 
     return () => subscription.unsubscribe()
   }, [])
   */


  return (<>
    <Appbar />
    <div id="detail">
      <Outlet context={[session, setSession]} />
    </div>
  </>)

  /** 
  return (
    <>
      <Appbar />
      <div id="detail">
        <Outlet />
      </div>
    </>
  );*/
}
