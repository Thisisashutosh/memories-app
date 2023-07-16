import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import { getPosts } from "./actions/posts";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="h-full w-full flex-col items-start justify-center m-0 p-0">
      <nav className="w-auto h-fit m-5 p-5 rounded-xl bg-[#f3eeee] flex items-center justify-between drop-shadow-2xl">
        <h1 className="font-semibold text-2xl">MEMORIES</h1>
        <div className="flex items-center justify-center gap-7">
          <div className="rounded-full bg-purple-700 text-white w-6 flex items-center justify-center">
            J
          </div>
          <h1>Ashutosh Dubey</h1>
          <button className="rounded bg-red-500 text-white pt-2 pb-2 pl-5 pr-5">
            Logout
          </button>
        </div>
      </nav>

      <div className="flex-initial w-auto h-fit m-5 mb-0 pb-0 p-5 rounded-xl bg-white flex items-center justify-between">
        <div className="posts w-4/5 flex items-center justify-center flex-wrap">
          <Posts />
        </div>
        <div className="form w-1/5 h-fit">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
