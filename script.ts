import { Response, Request } from "express";
import { Express } from "express";
import { Mongoose } from "mongoose";
import ToDoModel from "./models/todo";

const mongoose: Mongoose = require("mongoose");
const express = require("express");
const app: Express = express();
const cors = require("cors");

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const dataBaseURI: string = "mongodb://0.0.0.0:27017/todo";
mongoose
  .connect(dataBaseURI)
  .then((res) => app.listen(3000))
  .catch((err: any) => console.log(err));

app.use(express.json());

// GET all todos
app.get("/", (req: Request, res: Response) => {
  ToDoModel.find()
    .then((result) => res.send(result).sendStatus(200))
    .catch((err) => res.send(err).sendStatus(404).end());
});

// GET one todo by Id
app.get("/:id", (req: Request, res: Response) => {
  // const idToGet = req.params.id;
  ToDoModel.findOne({ _id: req.params.id })
    .then((result) => {
      res.send(result).sendStatus(200);
    })
    .catch((err) => res.send(err).sendStatus(404).end());
});

// POST one pokemon to db
app.post("/", (req: Request, res: Response) => {
  const todoToAdd = new ToDoModel({
    content: req.body.content,
  });
  todoToAdd.save().then((_r) => console.log("ToDO added!"));
  res.send(todoToAdd).sendStatus(201);
});

app.delete("/:id", (req: Request, res: Response) => {
  ToDoModel.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.sendStatus(404).end();
      console.log("Err: " + err);
    });
});
