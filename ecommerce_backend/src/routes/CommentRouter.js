const express = require("express");
const router = express.Router();
const commentController = require("../controllers/CommentController");
const {
  authUserMiddleWare,
  authMiddleWare,
} = require("../MiddleWare/authMiddleWare");

router.post("/create/:id", commentController.createComment);
router.get("/get-all-comment/:id", commentController.getAllCommentByIdPost);
router.delete(
  "/delete-comment/:id",
  authUserMiddleWare,
  commentController.deleteComment
);
module.exports = router;
