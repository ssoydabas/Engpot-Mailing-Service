import "./util/setEnv";

import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";

import setHeaders from "./util/setHeaders";

import routes from "./routes";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(setHeaders);

app.use(routes);

mongoose.connect(`${process.env.MONGO_DB_URL}`).then(() => {
  app.listen(PORT);
  console.log(`Listening on port: ${PORT}`);
});
