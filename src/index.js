const express = require('express');
const app = express();

app.use(express.json());

const postsRouter = require('./routes/posts.routes');
app.use('/api/v1', postsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});






