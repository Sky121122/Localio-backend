import mongoose from "mongoose";

const supportSchema = new mongoose.Schema({

    userId: {
        type: String,
        required: true,
    },

    name: {
        type: String,
        required: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        trim: true,
    },

    requestType: {
        type: String,
        required: true,
    },

    subject: {
        type: String,
        required: true,
        trim: true,
    },

    message: {
        type: String,
        required: true,
        trim: true,
    },

    status: {
        type: String,
        enum: ["Pending", "Resolved"],
        default: "Pending",
    },

},
{
    timestamps: true,
});

export default mongoose.model("Support", supportSchema);