import { Query } from "../models/query.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const createQuery = asyncHandler(async(req, res, next)=>{
    const {name , email , subject , message} = req.body;
    if (!(name && email && subject && message)) throw new ApiError(400, "Input field is required");

    const query = await Query.create({name , email , subject , message});
    if(!query) throw new ApiError(500, "Unable to submit query");

    res.status(201).json(new ApiResponse(201, query, "Submit successfully"));
});

const getQueries = asyncHandler(async(req, res, next)=>{
    const queries = await Query.find();
    if(!queries) throw new ApiError(500, "Unable to find");
    res.status(200).json(new ApiResponse(200, queries, "Queries are fecthed successfully"));
});

export {createQuery, getQueries}