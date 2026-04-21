import Post from '../models/post.model.js';

export const findAllPosts = async () => {
    return await Post.find().populate('author', 'username');
};

export const createNewPost = async (postData) => {
    return await Post.create(postData);
};

export const findPostById = async (id) => {
    return await Post.findById(id).populate('author', 'username');
};
