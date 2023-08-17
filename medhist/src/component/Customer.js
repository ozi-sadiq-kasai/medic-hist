import { useState,useEffect } from "react"
import { db } from "../firebase"
import { collection,getDocs } from "firebase/firestore"

const Customer = () => {
 const [customer,setCustomer] = useState([])
 // make refrence to the collection to be queried
 const usersCollectionRef = collection(db,"users")

 // query from the database
 useEffect(()=>{
  const getCustomers= async()=>{
   const data = await getDocs(usersCollectionRef)
   setCustomer(data.docs.map((doc) =>({...doc.data(), id:doc.id})))
   console.log(data)
  }
  getCustomers()
 },[])

  return (
    <div>
     <h1>Customer Details</h1>
     {customer.map((customer) =>{
      return<>
      <p>{customer.age}</p>
      <p>{customer.firstName}</p>
      <p>{customer.address}</p>
      <p>{customer.kinFirstName}</p>
      <p>{customer.kinLastName}</p>
      <p>{customer.kinPhoneNumber}</p>
      <p>{customer.lastName}</p>
      </>
     })}
    </div>
  )
}
export default Customer