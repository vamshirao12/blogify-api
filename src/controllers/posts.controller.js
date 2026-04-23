// src/controllers/posts.controller.js

// 1. Refactor getAllPosts
export const getAllPosts = async (req, res) => {
    try {
        // In a real app, you'd fetch from a DB here. 
        // For now, we send a successful standardized response.
        res.status(200).json({
            success: true,
            message: 'All posts fetched successfully'
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// 2. Refactor getPostById
export const getPostById = async (req, res) => {
    try {
        const { postId } = req.params;
        
        // Standardized response with the dynamic data wrapped in 'data'
        res.status(200).json({
            success: true,
            data: { postId: postId }
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};