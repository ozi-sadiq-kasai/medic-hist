import { BrowserRouter, Routes, Route,Link} from "react-router-dom"
import Signup from "./component/Signup"
import Login from "./component/Login"
import Register from "./component/Register"
import Customer from "./component/Customer"





const App = () => {

  return (
   <BrowserRouter>
    <main>
     <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="customer" element={<Customer/>}/>
      
     </Routes>
    </main>
   </BrowserRouter>
   
  )
}
export default App
