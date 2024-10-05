import express from "express";
import router from "./router/routers.js";

const app = express();

app.use("/", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
