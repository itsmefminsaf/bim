import express from "express";
import { GET, POST, PUT, DELETE } from "../handlers/building.js";

const router = express.Router();

router.route("/").get(GET).post(POST);
router.route("/:id").put(PUT).delete(DELETE);

export default router;
