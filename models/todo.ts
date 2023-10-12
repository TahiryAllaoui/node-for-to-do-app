import { Mongoose } from "mongoose";
const mongoose: Mongoose = require("mongoose");
const Schema = mongoose.Schema;

export interface IToDo {
  content: string;
}

const pokemonSchema = new Schema<IToDo>(
  {
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const ToDoModel = mongoose.model<IToDo>("Pokemon", pokemonSchema);
export default ToDoModel;
