import { Router } from "express";
import pkg from "cors";
import jwt from "jsonwebtoken";
import makeResponse from "../src/api/googleIA.js";

const router = Router();
const { cors } = pkg;

router.get("/", (req, res) => {
    res.send("Hello, world!");
})

router.post("/api/ia", async (req, res) => { 
    try {
        const response = await makeResponse(req.body);
        res.send(response);
    } catch (error) {
        res.send({ error: error.message });
    }
});
export default router;
