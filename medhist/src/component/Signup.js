import { auth,googleProvider } from "../firebase"
import { createUserWithEmailAndPassword, signInWithPopup,signOut} from "firebase/auth"
import { FcGoogle } from 'react-icons/fc';
import { useState } from "react"

const Signup = () => {
 const [email,setEmail] = useState('')
 const [password,setPassword] = useState('')
 const [emailError,setEmailError] = useState("")
 const [passwordError,setPasswordError] = useState("")

 const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z]).{8,}$/;


 console.log(auth?.currentUser?.email)

 const handleChangeEmail=(e)=>{
  const newEmail = e.target.value
  setEmail(newEmail)
  if(!emailRegex.test(newEmail)){
   setEmailError("Invalid email address")
  }else{
   setEmailError("")
  }

 }
  const handleChangePassword=(e)=>{
   const newPassword = e.target.value
   setPassword(newPassword)
   if(!passwordRegex.test(newPassword)){
    setPasswordError(
     "Password must be at least 8 characters long and contain a mix of lowercase and numbers."
    )
   }else {
      setPasswordError("");
    }
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
<main>
   <form>
    <h1>Sign In</h1>
    <input type="email" placeholder="Email" onChange={handleChangeEmail} value={email} />
    {emailError && <p>{emailError}</p>}

    <input type="password" placeholder="Password" onChange={handleChangePassword} value={password}/>
    {passwordError && <p>{passwordError}</p>}

    <button onClick={signin} disabled={emailError || passwordError}>Sign In with Email</button>
    <div>
     <FcGoogle /><button onClick={signinWithGoogle}>Sign In With Google</button>
    </div>
    <button onClick={logout}>Sign Out</button>
   </form>
</main>
  )
}
export default Signup