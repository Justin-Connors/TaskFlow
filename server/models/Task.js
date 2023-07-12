const mongoose = require("mongoose");

const { Schema } = mongoose;

const taskSchema = new Schema({
  taskName: {
    type: String,
    required: true,
    trim: true,
  },
  taskDescription: {
    type: String,
    required: true,
    trim: true,
  },
  taskDueDate: {
    type: String,
    trim: true,
  },
  taskStatus: [
    {
      type: String,
      required: true,
      options: ["Open", "In Progress", "Completed"],
    },
  ],
  taskPriority: [
    {
      type: String,
      required: true,
      options: ["Low", "Medium", "High"],
    },
  ],
  taskAssignedTo: {
    type: String,
    trim: true,
  },
  taskCreatedBy: {
    type: String,
    required: true,
    trim: true,
  },
  taskCreatedDate: {
    type: Date,
    default: Date.now,
  },
  taskUpdatedDate: {
    type: Date,
    default: Date.now,
  },
  taskUpdatedBy: {
    type: String,
    trim: true,
  },
  taskComments: {
    type: String,
  },
  taskLabels: [
    {
      type: String,
      required: true,
      options: ["Bug", "Feature", "Enhancement", "Documentation", "Other"],
    },
  ],
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
