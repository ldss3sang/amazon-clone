import express from "express";
import dotenv from "dotenv";
import "./db";

dotenv.config();

const port = process.env.PORT;

const app = express();

app.listen(port, () => {
  console.log("Server is running on ", port);
});
