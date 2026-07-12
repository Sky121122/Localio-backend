import express from "express";
import cors from "cors";

import userRoutes from "./routes/userRoutes.js"
import bussinessRoutes from "./routes/businessRoutes.js"
import uplaodRoutes from "./routes/uploadRoutes.js"
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res)=>{
    res.send("Localio Backend in Runnnig")
})

app.use("/api/users", userRoutes);
app.use("/api/businesses", bussinessRoutes);
app.use("/api/upload", uplaodRoutes);
app.use("/api/contact", contactRoutes);


export default app;