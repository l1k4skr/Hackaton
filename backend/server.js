import express from "express";
import router from "./router/routers.js";
import axios from "axios";
import cors from "cors";
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/", router);

app.get("/api/ia", router);


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
