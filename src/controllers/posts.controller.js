const getAllPosts = (req, res) => {
  res.status(200).json({
    message: 'Route handled by postController.getAllPosts'
  });
};

const getPostById = (req, res) => {
  // Access the :postId from the URL
  const { postId } = req.params;

  res.status(200).json({
    message: `Fetching data for post with ID: ${postId}`
  });
};

// Update your exports to include the new function
module.exports = {
  getAllPosts,
  getPostById,
};