import { auth,googleProvider } from "../firebase"
import { createUserWithEmailAndPassword, signInWithPopup,signOut} from "firebase/auth"
import { FcGoogle } from 'react-icons/fc';
import { useState } from "react"

const Signup = () => {
 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('')

 console.log(auth?.currentUser?.email)

 const handleChangeEmail=(e)=>{
  setEmail(e.target.value)

 }
  const handleChangePassword=(e)=>{
  setPassword(e.target.value)
 }

 const signin = async() =>{
  try {
   await createUserWithEmailAndPassword(auth,email,password)
  
  } catch (error) {
   console.log(error)
  }
 }
 const signinWithGoogle= async() =>{
  try {
   await signInWithPopup(auth,googleProvider)
  
  } catch (error) {
   console.log(error)
  }
 }
  const logout= async() =>{
  try {
   await signOut(auth)
  
  } catch (error) {
   console.log(error)
  }
 }

  return (
<main className="w-screen h-screen flex justify-center items-center">
  <div className="border border-gray-100 w-4/5 p-4 flex flex-col items-center py-28 shadow-lg sm:w-screen lg:w-3/5">
    <h1 className="font-roboto font-bold text-3xl p-1 text-green-300">Sign In</h1>
    <input className="outline-0 mt-3 mb-4 border-b-2 border-gray-100 w-2/5" type="email" placeholder="Email" onChange={handleChangeEmail} />
    <input className="outline-0 mt-3 mb-4 border-b-2 border-gray-100 w-2/5" type="password" placeholder="Password" onChange={handleChangePassword} />

    <button className="outline-0 text-slate-300 py-1 px-14 border mb-7 mt-5"onClick={signin}>Sign In with Email</button>
    <div className="outline-0 flex items-center py-1 px-10 border text-slate-300">
     <FcGoogle /><button onClick={signinWithGoogle}>Sign In With Google</button>
    </div>
   

    <button className="outline-0 py-1 px-10 bg-red-700 mt-8 text-slate-300 rounded-sm"onClick={logout}>Sign Out</button>
  </div>
</main>
  )
}
export default Signup