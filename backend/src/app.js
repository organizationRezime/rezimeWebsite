import express from "express";
import cors from "cors";
const app = express();
import certificateRouter from "./routes/certificate.router.js";
import qeuryRouter from "./routes/query.router.js";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}));

app.use("/api/v1/certificate", certificateRouter);
app.use("/api/v1/qeury", qeuryRouter);

app.use(globalErrorHandler);

export default app;