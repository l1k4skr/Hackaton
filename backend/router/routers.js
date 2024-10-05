import { Router } from "express";
import pkg from "cors";
import jwt from "jsonwebtoken";

const router = Router();
const { cors } = pkg;

router.get("/", (req, res) => {
    res.send("Hello, world!");
});

export default router;
