import User from "../models/User.js";


export const createUser = async (req, res)=>{

    try {

        const {firebaseUID, name, email, mobile} = req.body;


        const existingUser = await User.findOne({firebaseUID});

        if(existingUser){
            return res.status(200).json({success: false, message: "User already exists", user: existingUser});
        }

        const user = await User.create({
            firebaseUID, name, email, mobile
        });

        res.status(201).json({success: true, message:"User created", user})

    } catch (error) {
         res.status(500).json({
      success: false,
      message: error.message,
    });
    }

};

// Get User Profile
export const getUserProfile = async (req, res) => {
    try {

        const { firebaseUID } = req.params;

        const user = await User.findOne({ firebaseUID });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        res.status(200).json({
            success: true,
            user,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};


// Update User Profile
export const updateUserProfile = async (req, res) => {

    try {

        const { firebaseUID } = req.params;

        const user = await User.findOneAndUpdate(
            { firebaseUID },
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "Profile Updated Successfully",
            user,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};