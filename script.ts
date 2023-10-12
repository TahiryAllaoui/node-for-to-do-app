import { Response, Request } from "express";
import { Express } from "express";
import { Mongoose } from "mongoose";

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

// GET all pokemons
app.get("/", async (req: Request, res: Response) => {
  try {
  } catch (e) {
    res.send(e).status(404);
  }
});

// GET one pokemon by Id
app.get("/:id", async (req: Request, res: Response) => {
  const idToGet = req.params.id;
});

// POST one pokemon to db
app.post("/", async (req: Request, res: Response) => {});
