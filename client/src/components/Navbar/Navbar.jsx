import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [isLogged, setIsLogged] = useState(false);
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    setUser(null);
    setIsLogged(false);
  };

  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem("profile")));
    user ? setIsLogged(true) : setIsLogged(false);
  }, []);
  return (
    <div>
      <nav className="w-auto h-fit m-5 p-5 rounded-xl bg-[#f3eeee] flex items-center justify-between drop-shadow-2xl">
        <h1 className="font-semibold text-2xl">MEMORIES</h1>
        <div className="flex items-center justify-center gap-7">
          <div className="rounded-full bg-transparent text-white w-10 h-10 font-bold flex items-center justify-center overflow-hidden">
            {user ? (
              <>
                <img
                  className="object-contain overflow-hidden"
                  src={user?.result.picture}
                  alt={user?.result.name.charAt(0)}
                />
              </>
            ) : (
              <></>
            )}
          </div>
          <h1>
            {user?.result.name} {user?.result.family_name}
          </h1>
          <button
            className="rounded bg-red-500 text-white pt-2 pb-2 pl-5 pr-5"
            onClick={user ? logout : () => navigate("/auth")}
          >
            {isLogged ? "Logout" : "SignIn"}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
