const db = require("../db/dbConfig.js");

const getAllDescriptions = async (post_id) => {
    try {
    const allDescriptions = await db.any(
    "SELECT * FROM descriptions WHERE post_id=$1",
    post_id
    );
    return allDescriptions;
    } catch (err) {
    return err;
    }};

const getDescription = async (id) => {
  try {
    const oneDescription = await db.one("SELECT * FROM descriptions WHERE id=$1", id);
    return oneDescription;
  } catch (error) {
    return error;
  }
};



const newDescription = async (description) => {
  try {
    const newDescription = await db.one(
      "INSERT INTO descriptions (author, title, content, rating, post_id) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [
        description.author,
        description.title,
        description.content,
        description.rating,
        description.post_id,
      ]
    );
    return newDescription;
  } catch (error) {
    return error;
  }
};

const deleteDescription = async (id) => {
  try {
    const deletedDescription = await db.one(
      "DELETE FROM descriptions WHERE id = $1 RETURNING *",
      id
    );
    return deletedDescription;
  } catch (error) {
    return error;
  }
};

const updateDescription = async (id, description) => {
  try {
    const updatedDescription = await db.one(
      "UPDATE descriptions SET author=$1, title=$2, content=$3, rating=$4, post_id=$5 where id=$6 RETURNING *",
      [
        description.author,
        description.title,
        description.content,
        description.rating,
        description.post_id,
        id,
      ]
    );
    return updatedDescription;
  } catch (error) {
    return error;
  }
};
module.exports = {
  getAllDescriptions,
  getDescription,
  newDescription,
  deleteDescription,
  updateDescription,
};