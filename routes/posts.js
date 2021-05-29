const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/all", async (req, res) => {
  const post = await Post.findAll();
  res.send(posts);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const foundUser = await Post.findByPk(+id);
  res.send(foundUser);
});

router.patch("/content?", async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  const affectedPost = await User.update({ content }, { where: { id } });
  affectedRows
    ? res.send(`The number of rows affected is ${affectedPost}`)
    : res.send("None row was affected");
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const editPost = await Post.update(req.body, { where: { id } });
  editPost
    ? res.send(`The row affected is ${editPost}`)
    : res.send("Now rows affected");
});

router.post("/insert", async (req, res) => {
  const createdPost = await Post.create(req.body);
  res.send(createdPost.toJSON());
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const destroyPost = await Post.destroy({ where: { id } });
  destroyPost
    ? res.send(`The row deleted is ${destroyPost}`)
    : res.send("Now rows are deleted");
});

module.exports = router;
