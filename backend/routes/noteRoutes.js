const express = require("express");
const {
  getNoteById,
  getNotes,
  CreateNote,
  DeleteNote,
  UpdateNote,
} = require("../controllers/noteController.js");
const router = express.Router();
const { protect } = require("../middlewares/authMiddleware.js");

router.route("/").get(protect, getNotes);
router
  .route("/:id")
  .get(getNoteById)
  .delete(protect, DeleteNote)
  .put(protect, UpdateNote);
router.route("/create").post(protect, CreateNote);

module.exports = router;

// const express = require("express");
// const {
//   getNotes,
//   createNote,
//   getNoteById,
//   UpdateNote,
//   DeleteNote,
// } = require("../controllers/noteController");
// const { protect } = require("../middlewares/authMiddleware");

// const router = express.Router();
