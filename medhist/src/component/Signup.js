import PinInput from 'react-pin-input';
import Headers from "./Headers";
import React, { useState, useRef } from 'react';


const Signup = () => {
  const [value, setValue] = useState("");
  const pinRef = useRef(null);

  const onChange = newValue => {
    setValue(newValue);
  };
    const onClear = () => {
    setValue("");
    if (pinRef.current) {
      pinRef.current.clear();
    }
  }
  return (
   <>
   <Headers text="Sign up"/>
    <form>
     <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <input type="number" placeholder="Enter Age" />
      <label htmlFor="tel">Telephone</label>
      <input type="tel" placeholder="08011111111" name="tel"/>
      <label>
       Residential Address:
       <textarea name="postContent" rows={2} cols={20} />
      </label>
      <label><input type="radio" name="sex" value="option1" /> Male</label>
      <label><input type="radio" name="sex" value="option1" /> Female</label>
       <label><input type="radio" name="sex" value="option1" /> Others</label>

      <h2>Next of Kin details</h2>
       <input type="text" placeholder="First Name" />
      <input type="text" placeholder="Last Name" />
      <label htmlFor="tel">Telephone</label>
      <input type="tel" placeholder="08011111111" name="tel"/>
       
      <h3>Create your 4 digit pin code</h3>
       <PinInput
        length={4}
        focus
        // disabled
        secret
        ref={pinRef}
        type="numeric"
        onChange={onChange}
      />
         <div>{value}</div>
      <button type="submit" onClick={onClear}>Sign Up</button>
    </form>
   </>
    
  )
}
export default Signup