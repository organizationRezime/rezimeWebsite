import { Certificate } from "../models/certificate.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const getCertificate = asyncHandler(async(req, res, next)=>{
        const {certificateId} = req.params;
        const certificate = await Certificate.findOne({certificateId});
        if(!certificate) throw new ApiError(400, "No certificate found");

        return res.status(200).json(new ApiResponse(200, certificate, "Certificate fetched successfully!"));
});

const createCertificate = asyncHandler(async(req, res, next)=>{
        const {certificateId, studentName, internshipStartDate, internshipEndDate, position} = req.body;
        if(!(certificateId && studentName && internshipStartDate && internshipEndDate && position)) throw new ApiError(400, "All the field is required");

        const certificate =  await Certificate.create({certificateId, studentName, internshipStartDate, internshipEndDate, position});
        if(!certificate) throw new ApiError(500, "Unable to create certificate");
        res.status(201).json(new ApiResponse(201, certificate, "Certificate created successfully"));
});

export {getCertificate, createCertificate};