import Post from "./Post/Post";
// import { useSelector } from "react-redux";
import Loader from "../loader/Loader";
import axios from "axios";
import { useEffect, useState } from "react";

const Posts = () => {
  // const posts = useSelector((state) => {
  //   state.posts;
  // });
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  async function getUserData() {
    setLoading(true);

    try {
      const response = await axios.get("http://localhost:8000/posts");
      setPosts(response.data.reverse());
      console.log(response);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  return loading ? (
    <div className="flex justify-center items-center">
      <Loader />
    </div>
  ) : (
    <>
      <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </>
  );
};

export default Posts;
