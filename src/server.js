import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to BIM API" }, { status: 200 });
});

app.listen(8000, (err) => {
  if (err) return console.log(err);
  console.log("Server is running on 8080");
});
