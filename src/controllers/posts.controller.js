import * as postService from '../services/posts.service.js';

export const getAllPosts = async (req, res) => {
    try {
        const posts = await postService.findAllPosts();
        res.status(200).json({ success: true, data: posts });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const createPost = async (req, res) => {
    try {
        const post = await postService.createNewPost(req.body);
        res.status(201).json({ success: true, data: post });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};