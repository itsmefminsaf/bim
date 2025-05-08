import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import buildingRoute from "./routes/building.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to BIM API" });
});

app.use("/api/buildings", buildingRoute);

app.listen(8000, (err) => {
  if (err) return console.log(err);
  console.log("Server is running on 8080");
});
