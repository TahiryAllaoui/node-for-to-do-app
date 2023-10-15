import { Mongoose } from "mongoose";
const mongoose: Mongoose = require("mongoose");
const Schema = mongoose.Schema;

export interface IToDo {
  content: string;
}

const todoSchema = new Schema<IToDo>(
  {
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const ToDoModel = mongoose.model<IToDo>("ToDo", todoSchema);
export default ToDoModel;
