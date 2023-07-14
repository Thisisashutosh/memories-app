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
