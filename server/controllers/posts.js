import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const allPosts = await PostMessage.find();

    res.status(200).json(allPosts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const newPost = new PostMessage(req.body);
    await newPost.save();

    res.status(200).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  psot = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.staus(404).send("No post with that id");

  try {
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
      new: true,
    });
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
