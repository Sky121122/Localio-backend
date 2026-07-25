import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import connectDB from "./config/db.js"


connectDB();

console.log("EMAIL_USER =", process.env.EMAIL_USER);
console.log("EMAIL_PASS =", process.env.EMAIL_PASS ? "FOUND" : "NOT FOUND");
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log("App Server is running");
   
})