import { useState } from "react"
import { db } from "../firebase"
import { collection,addDoc } from "firebase/firestore"


const Register = () => {
 const [newFName,setNewFName] = useState("")
 const [newLName,setNewLName] = useState("")
 const [newAge,setAge] = useState(0)
 const [newPhone,setNewPhone] = useState(0)
 const [newAddy,setNewAddy] = useState('')
 const [kFName,setKFName] = useState('')
 const [kLName,setKLName] = useState('')
 const [KPhone,setKPhone] = useState(0)

 const usersCollectionRef = collection(db,"users")
 const createUser= async (e) =>{
  e.preventDefault()
  await addDoc(usersCollectionRef,{firstName:newFName,lastName:newLName})
 }
  return (
    <div>
     <h1>Let's Get to Know You...</h1>
     <form onSubmit={createUser}>
       <label htmlFor="fname">First Name<input type="text" name="fname" required onChange={(e)=>{setNewFName(e.target.value)}} /></label>
       <label htmlFor="lname">Last Name<input type="text" name="lname" required onChange={(e)=>{setNewLName(e.target.value)}}/></label>
       <label htmlFor="age">Age<input type="number" name="age" required onChange={(e)=>{setAge(e.target.value)}}/></label>
       <label htmlFor="tel">Phone Number<input type="tel" name="tel" required onChange={(e)=>{setNewPhone(e.target.value)}}/></label>
       <label htmlFor="addy">Address<input  type="text" name="addy" required onChange={(e)=>{setNewAddy(e.target.value)}}/></label>
       <h2>Next of Kin details</h2>
       <label htmlFor="kfname">First Name<input type="text" name="kfname" required onChange={(e)=>{setKFName(e.target.value)}}/></label>
       <label htmlFor="lname">Last Name<input type="text" name="lname" required onChange={(e)=>{setKLName(e.target.value)}} /></label>
       <label htmlFor="tel">Phone Number<input type="tel" name="tel" required onChange={(e)=>{setKPhone(e.target.value)}} /></label> 
       <button type="submit">Submit</button>
     </form>
    </div>
  )
}
export default Register