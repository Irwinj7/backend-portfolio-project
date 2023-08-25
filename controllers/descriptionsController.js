const express = require("express");

const { getPost } = require("../queries/posts.js");
const descriptions = express.Router({ mergeParams: true });
const {
  getAllDescriptions,
  getDescription,
  newDescription,
  deleteDescription,
  updateDescription,
} = require("../queries/descriptions");

// INDEX
descriptions.get("/", async (req, res) => {
    const { postId } = req.params;

    try {
      const allDescriptions = await getAllDescriptions(postId);
      res.json(allDescriptions);
    } catch (err) {
      res.json(err);
    }
  });

// SHOW
descriptions.get("/:id", async (req, res) => {
  const { id } = req.params;
  const description = await getDescription(id);
  if (description) {
    res.json(description);
  } else {
    res.status(404).json({ error: "not found" });
  }
});

// UPDATE
descriptions.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedDescription = await updateDescription(id, req.body);
  if (updatedDescription.id) {
    res.status(200).json(updatedDescription);
  } else {
    res.status(404).json("Description not found");
  }
});

descriptions.post("/", async (req, res) => {
  const description = await newDescription(req.body);
  res.status(200).json(description);
});

// DELETE
descriptions.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const deletedDescription = await deleteDescription(id);
  if (deletedDescription.id) {
    res.status(200).json(deletedDescription);
  } else {
    res.status(404).json({ error: "Description not found" });
  }
});

// TEST JSON NEW
// {
//     "reviewer":"Lou",
//      "title": "Fryin Better",
//      "content": "With the great tips and tricks I found here",
//      "post_id": "2",
//      "rating": "4"
// }
module.exports = descriptions;