const db = require("../db/dbConfig.js");

const getAllOffers = async (post_id) => {
    try {
    const allOffers = await db.any(
    "SELECT * FROM offers WHERE post_id=$1",
    post_id
    );
    return allOffers;
    } catch (err) {
    return err;
    }};

const getOffer = async (id) => {
  try {
    const oneOffer = await db.one("SELECT * FROM offers WHERE id=$1", id);
    return oneOffer;
  } catch (error) {
    return error;
  }
};

const newOffer = async (offer) => {
  try {
    const newOffer = await db.one(
      "INSERT INTO offers (author, title, price, content, post_id) VALUES($1, $2, $3, $4, $5) RETURNING *",
      [
        offer.author,
        offer.title,
        offer.price,
        offer.content,
        offer.post_id,
      ]
    );
    return newOffer;
  } catch (error) {
    return error;
  }
};

const deleteOffer = async (id) => {
  try {
    const deletedOffer = await db.one(
      "DELETE FROM offers WHERE id = $1 RETURNING *",
      id
    );
    return deletedOffer;
  } catch (error) {
    return error;
  }
};

const updateOffer = async (id, offer) => {
  try {
    const updatedOffer = await db.one(
      "UPDATE offers SET author=$1, title=$2, price=$3, content=$4, post_id=$5 where id=$6 RETURNING *",
      [
        offer.author,
        offer.title,
        offer.price,
        offer.content,
        offer.post_id,
        id,
      ]
    );
    return updatedOffer;
  } catch (error) {
    return error;
  }
};
module.exports = {
  getAllOffers,
  getOffer,
  newOffer,
  deleteOffer,
  updateOffer,
};