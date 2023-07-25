import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AuthComponent from "./authComponent/AuthComponent";
import { useDispatch } from "react-redux";
import { signin, signup } from "../../actions/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [isSignup, setisSignup] = useState(false); //This is true means we are currently inside the signup isSignup
  //false means we are inside the signin isSignup and render the texts accordingly
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    isSignup ? signin() : signup();
  };

  const handleemail = (e) => {
    setData({ ...data, email: e.target.value });
  };

  const handlepassword = (e) => {
    setData({ ...data, password: e.target.value });
  };

  const switchmode = () => {
    setisSignup((prev) => !prev);
    console.log("yes");
  };

  useEffect(() => {
    setData({ ...data, email: "", password: "" });
    user ? setisSignup(false) : setisSignup(true);
  }, [location]);

  return (
    <div>
      <AuthComponent
        isSignup={isSignup}
        data={data}
        handleSubmit={handleSubmit}
        handleemail={handleemail}
        handlepassword={handlepassword}
        switchmode={switchmode}
      />
    </div>
  );
};

export default Signup;
