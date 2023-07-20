import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Posts from "../Posts/Posts";
import Form from "../Form/Form"

const Home = () => {
  const [currentID, setcurrentID] = useState(0);
  return (
    <div>
      <Navbar />
      <div className="flex-initial w-auto h-fit m-5 mb-0 pb-0 p-5 rounded-xl bg-white flex items-center justify-between">
        <div className="posts w-4/5 flex items-center justify-center flex-wrap">
          <Posts setcurrentID={setcurrentID} />
        </div>
        <div className="form w-1/5 h-fit">
          <Form currentID={currentID} setcurrentID={setcurrentID} />
        </div>
      </div>
    </div>
  );
};

export default Home;
