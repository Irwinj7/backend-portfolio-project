const express = require("express");
const posts = express.Router();

const {
  getAllPosts,
  getPost,
  createPost,
  deletePost,
  updatePost,
} = require("../queries/posts");
const { checkName, checkBoolean, validateURL } = require("../validations/checkPosts.js");
const descriptionsController = require("./descriptionsController.js");
posts.use("/:postId/descriptions", descriptionsController);

// INDEX
posts.get("/", async (req, res) => {
    const allPosts = await getAllPosts();
    if (allPosts[0]) {
      res.status(200).json(allPosts);
    } else {
      res.status(500).json({ error: "server error" });
    }
});

// SHOW
posts.get("/:id", async (req, res) => {
  const id = req.params.id;
  const post = await getPost(id);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// CREATE
posts.post("/", checkName, checkBoolean, validateURL, async (req, res) => {
  try {
    const post = await createPost(req.body);
    res.json(post);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

// DELETE
posts.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedPost = await deletePost(id);
  if (deletedPost.id) {
    res.status(200).json(deletedPost);
  } else {
    res.status(404).json("Post not found");
  }
});

// UPDATE
posts.put("/:id", checkName, checkBoolean, validateURL, async (req, res) => {
  const { id } = req.params;
  const updatedPost = await updatePost(id, req.body);
  res.status(200).json(updatedPost);
});

module.exports = posts;