import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { getPosts } from "./actions/posts";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import Signup from "./components/SignUp/Signup";
import Home from "./components/Home/Home";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="h-full w-full flex-col items-start justify-center m-0 p-0">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
