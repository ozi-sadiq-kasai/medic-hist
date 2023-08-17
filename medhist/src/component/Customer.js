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
  }
  getCustomers()
 },[])

  return (
    <div>
     <h1>Customer Details</h1>   
     {customer.map((customer) =>{
      const{fname,lname,age,phone,addy,kfName,klName,kphone}=customer
      return<>
      <p>{fname}</p>
      <p>{lname}</p>
      <p>{age}</p>
      <p>{phone}</p>
      <p>{addy}</p>
      <p>{kfName}</p>
      <p>{klName}</p>
      <p>{kphone}</p>
      </>
     })}

    </div>
  )
}
export default Customer