const express = require("express");
const {
  getAllTasks,
  createTask,
  getTask,
  DeleteTask,
  UpdateTask,
} = require("../controller/tasks");

const router = express.Router();

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(UpdateTask).delete(DeleteTask);

module.exports = router;
