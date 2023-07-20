import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="w-auto h-fit m-5 p-5 rounded-xl bg-[#f3eeee] flex items-center justify-between drop-shadow-2xl">
        <h1 className="font-semibold text-2xl">MEMORIES</h1>
        <div className="flex items-center justify-center gap-7">
          <div className="rounded-full bg-purple-700 text-white w-10 h-10 font-bold flex items-center justify-center">
            J
          </div>
          <h1>Ashutosh Dubey</h1>
          <button
            className="rounded bg-red-500 text-white pt-2 pb-2 pl-5 pr-5"
            onClick={() => navigate("/signup")}
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
