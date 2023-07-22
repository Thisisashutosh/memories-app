import React, { useEffect, useState } from "react";
import AuthComponent from "./authComponent/AuthComponent";

const Signup = () => {
  const handleSubmit = () => {};
  const handleemail = (e) => {
    setData({ ...data, email: e.target.value });
  };
  const [isSignup, setisSignup] = useState(true); //This is true means we are currently inside the signup isSignup
  //false means we are inside the signin isSignup and render the texts accordingly
  const handlepassword = (e) => {
    setData({ ...data, password: e.target.value });
  };
  const switchmode = () => {
    setisSignup((prev) => !prev);
    console.log("yes");
  };
  // useEffect(() => {
  //   setData({ ...data, email: "", password: "" });
  // }, [isSignup]);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  return (
    <div>
      <AuthComponent
        isSignup={isSignup}
        handleSubmit={handleSubmit}
        handleemail={handleemail}
        handlepassword={handlepassword}
        switchmode={switchmode}
      />
    </div>
  );
};

export default Signup;
