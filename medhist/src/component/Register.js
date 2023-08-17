const Register = () => {
  return (
    <div>
     <h1>Let's Get to Know You...</h1>
     <form action="#">
       <label htmlFor="fname">First Name<input type="text" name="fname" required /></label>
       <label htmlFor="lname">Last Name<input type="text" name="lname" required /></label>
       <label htmlFor="age">Age<input type="number" name="age" required /></label>
       <label htmlFor="tel">Phone Number<input type="tel" name="tel" required /></label>
       <label htmlFor="addy">Address<input  type="text" name="addy" required /></label>
       <h2>Next of Kin details</h2>
       <label htmlFor="fname">First Name<input type="text" name="fname" required /></label>
       <label htmlFor="lname">Last Name<input type="text" name="lname" required /></label>
       <label htmlFor="tel">Phone Number<input type="tel" name="tel" required /></label>
       <button>Submit</button>
     </form>
    </div>
  )
}
export default Register