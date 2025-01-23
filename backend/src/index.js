import dotenv from "dotenv";
dotenv.config({path: "../.env"});
import app from "./app.js";
import connectDB from './configs/db.config.js';

const PORT = process.env.PORT || 5000;

connectDB().then(
    ()=>{
        app.listen(PORT, ()=>{
            console.log("APP RUNNING ON ",PORT);
        })
    }
)
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
});