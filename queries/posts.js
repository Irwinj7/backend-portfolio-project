const db = require("../db/dbConfig.js");

// ALL Posts
const getAllPosts = async () => {
    try {
      const allPosts = await db.any("SELECT * FROM posts");
      return allPosts;
    } catch (error) {
      return error;
    }
};

// ONE Post
const getPost = async (id) => {
  try {
    const onePost = await db.one("SELECT * FROM posts WHERE id=$1", id);
    return onePost;
  } catch (error) {
    return error;
  }
};

// CREATE
const createPost = async (post) => {
  try {
    const newPost = await db.one(
      "INSERT INTO posts (name, url, category, is_favorite) VALUES($1, $2, $3, $4) RETURNING *",
      [post.name, post.url, post.category, post.is_favorite]
    );
    return newPost;
  } catch (error) {
    return error;
  }
};

// DELETE
const deletePost = async (id) => {
  try {
    const deletedPost = await db.one(
      "DELETE FROM posts WHERE id = $1 RETURNING *",
      id
    );
    return deletedPost;
  } catch (error) {
    return error;
  }
};

// UPDATE
const updatePost = async (id, post) => {
  try {
    const updatedPost = await db.one(
      "UPDATE posts SET name=$1, url=$2, category=$3, is_favorite=$4 where id=$5 RETURNING *",
      [post.name, post.url, post.category, post.is_favorite, id]
    );
    return updatedPost;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllPosts,
  getPost,
  createPost,
  deletePost,
  updatePost
};