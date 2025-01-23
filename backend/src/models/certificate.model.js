import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema({
    certificateId: {
        type: String,
        required: true,
        index: true,
        lowercase: true,
        trim: true,
        unique: true
    },
    studentName: {
        type: String,
        required: true,
        trim: true,
    },
    internshipStartDate: {
        type: Date,
        required: true,
    },
    internshipEndDate: {
        type: Date,
        required: true,
    },
    position: {
        type: String,
        required: true,
    }
}, {timestamps: true});
export const Certificate = mongoose.model("Certificate", certificateSchema);