import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firebaseUID:{
        type:  String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    mobile:{
        type: String,
        required: true,
        trim: true,
    },
     photo:{
        type:String,
        default:""
    },

    bio:{
        type:String,
        default:""
    },

    location:{
        type:String,
        default:""
    },
    selectedCity: {
    type: String,
    default: "",
},
favorites: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Business"
}],
},
    {
        timestamps: true,
    },
);


export default mongoose.model("User", userSchema);