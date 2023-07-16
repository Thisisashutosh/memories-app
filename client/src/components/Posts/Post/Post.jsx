import moment from "moment";

const Post = ({ post }) => {
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
        <div class="text-sm px-6 pb-2">
          <p class="text-gray-900 font-semibold leading-none">{post.creator}</p>
          <p class="text-gray-600">{moment(post.createdAt).fromNow()}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
