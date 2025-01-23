import express from "express";
const router = express.Router();
import { createCertificate, getCertificate } from "../controllers/certificate.controllers.js";

router.get("/get/:certificateId",  getCertificate);
router.post("/create", createCertificate);

export default router;