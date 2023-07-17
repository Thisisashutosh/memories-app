import moment from "moment";

const Post = ({ post, setcurrentID }) => {
  return (
    <div className="w-80 h-fit bg-white m-5 flex-col items-center justify-center rounded overflow-hidden drop-shadow-2xl">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src={post.selectedFile}
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{post.title}</div>
          <p className="text-gray-700 text-base">{post.message}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {post.tags.map((tag) => (
            <span
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              key={post._id}
            >{`#${tag} `}</span>
          ))}
        </div>
        <div className="text-sm px-6 pb-2 flex items-center justify-between">
          <div className="">
            <p className="text-gray-900 font-semibold leading-none">
              {post.creator}
            </p>
            <p className="text-gray-600">{moment(post.createdAt).fromNow()}</p>
          </div>
          <div className="">
            <button
              className="flex p-2.5 bg-gray-500 rounded-xl hover:rounded-3xl hover:bg-gray-700 transition-all duration-300 text-white"
              onClick={() => setcurrentID(post._id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
