import { auth,googleProvider } from "../firebase"
import { createUserWithEmailAndPassword, signInWithPopup,signOut} from "firebase/auth"
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
   <div>
    <h1>Sign In</h1>
    <label htmlFor="email">Email<input type="email" name="email" onChange={handleChangeEmail}/></label>
    <label htmlFor="password">Password<input type="password" name="password" onChange={handleChangePassword}/></label>
    <button onClick={signin}>Sign In</button> 
    <button onClick={signinWithGoogle}>Sign In With Google</button> 
    <button onClick={logout}>Sign Out</button> 
   </div>
  )
}
export default Signup