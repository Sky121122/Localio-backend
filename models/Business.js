import mongoose from "mongoose"

const businessSchema = new mongoose.Schema({
    ownerId:{
        type: String,
        required: true,
    },
    businessName:{
        type: String,
        required: true,
        trim: true
    },
    businessTagline:{
        type: String,
        trim: true
    },
    ownerName:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    businessType:{
        type: String,
    },
    phone:{
        type: String,
        required: true,
    },
    whatsapp:{
        type: String,
    },

    email:{
        type: String,
        required: true,
    },

    website: String,

    gstNumber: String,

    address:{
        type: String,
        required: true
    },

    city:{
        type: String,
        required: true
    },

    state: {
        type: String,
        required: true
    },

    pincode: {
        type: String,
        required: true,
    },

    openingTime: String,
    closingTime: String,

    description:{
        type: String,
        required: true
    },

    logo:{
        type: String,
        default:""
    },

    banner:{
        type: String,
        default:""
    },

    facebook: String,

    instagram: String,

    linkedin: String,

    youtube: String,

    status:{
        type: String,
        default: "Active"
    },
    isFeatured: {
    type: Boolean,
    default: false,
},
    views: {
    type: Number,
    default: 0
},
},
{
    timestamps: true
}

);


export default mongoose.model("Business", businessSchema);