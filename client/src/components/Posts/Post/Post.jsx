const Post = () => {
  return (
    <div className="w-72 h-96 bg-white m-5 flex-col items-center justify-center rounded-2xl overflow-hidden drop-shadow-2xl">
      <div className="img relative">
        <img
          src="https://e0.pxfuel.com/wallpapers/26/275/desktop-wallpaper-anime-digital-art-cozy-anime.jpg"
          className="h-44"
          alt="image"
        />
        <div className="absolute top-0 left-0 p-3 text-white bg-black bg-opacity-40 w-72 h-44">
          <h1 className="font-normal text-2xl p-3 pb-0">Rome</h1>
          <p className="font-normal text-xl p-3 pt-0">6 hours ago</p>
        </div>
      </div>
      <div className="tags p-3 text-gray-500">#yes #no</div>
      <h1 className="text-black font-normal text-2xl p-3">This is title</h1>
      <div className="desc text-gray-500 p-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet illum
        libero architecto!
      </div>
    </div>
  );
};

export default Post;
