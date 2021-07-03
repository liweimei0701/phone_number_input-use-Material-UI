import React from "react";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/material.css'

const App = () => {
  const [phone,setPhone] = React.useState("");
  React.useEffect(()=>{
    console.log("phone",phone);
  },[phone]);

 
  return (
    <>
      <div style={{width:"300px",margin:"200px auto"}}>
      <PhoneInput
        country='au'
        specialLabel="Business Phone Number"
        inputStyle={{width:400}}
        value={phone}
        onChange={(phone)=>setPhone(phone)}
        // isValid={false}
        defaultErrorMessage={"number is invalid"}
      />
      </div>
    </>
  );
}

export default App;
