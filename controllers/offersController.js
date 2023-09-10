const express = require("express");

const { getPost } = require("../queries/posts.js");
const offers = express.Router({ mergeParams: true });
const {
  getAllOffers,
  getOffer,
  newOffer,
  deleteOffer,
  updateOffer,
} = require("../queries/offers.js");

// INDEX
offers.get("/", async (req, res) => {
    const { postId } = req.params;

    try {
      const allOffers = await getAllOffers(postId);
      res.json(allOffers);
    } catch (err) {
      res.json(err);
    }
  });

// SHOW
offers.get("/:id", async (req, res) => {
  const { id } = req.params;
  const offer = await getOffer(id);
  if (offer) {
    res.json(offer);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// UPDATE
offers.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedOffer = await updateOffer(id, req.body);
  if (updatedOffer.id) {
    res.status(200).json(updatedOffer);
  } else {
    res.status(404).json("Offer not found");
  }
});

offers.post("/", async (req, res) => {
  const offer = await newOffer(req.body);
  res.status(200).json(offer);
});

// DELETE
offers.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const deletedOffer = await deleteOffer(id);
  if (deletedOffer.id) {
    res.status(200).json(deletedOffer);
  } else {
    res.status(404).json({ error: "Offer not found" });
  }
});

// TEST JSON NEW
// {
//     "author":"Lou",
//      "title": "Fryin Better",
//      "content": "With the great tips and tricks I found here",
//      "post_id": "2",
//      "rating": "4"
// }
module.exports = offers;