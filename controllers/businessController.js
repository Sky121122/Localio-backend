import Business from "../models/Business.js";

export const addBusiness = async (req, res) => {
    try {

        const business = await Business.create(req.body);

        res.status(201).json({
            success: true,
            message: "Business added successfully",
            business,
        });

    } catch (error) {

        console.log(error); // <-- ADD THIS

        res.status(500).json({
            success: false,
            message: error.message,
            error,
        });
    }
};
// Get All Businesses (Public)
export const getAllBusinesses = async (req, res) => {
    try {

        const businesses = await Business.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: businesses.length,
            businesses,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

// Get My Businesses
export const getMyBusinesses = async (req, res) => {
    try {

        const { ownerId } = req.params;

        const businesses = await Business.find({ ownerId });

        res.status(200).json({
            success: true,
            count: businesses.length,
            businesses,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

// Get Single Business
export const getBusinessById = async (req, res) => {
    try {

        const business = await Business.findById(req.params.id);

        if (!business) {
            return res.status(404).json({
                success: false,
                message: "Business not found.",
            });
        }

        res.status(200).json({
            success: true,
            business,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

// Update Business
export const updateBusiness = async (req, res) => {
    try {

        const business = await Business.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );

        if (!business) {
            return res.status(404).json({
                success: false,
                message: "Business not found.",
            });
        }

        res.status(200).json({
            success: true,
            message: "Business updated successfully.",
            business,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

// Delete Business
export const deleteBusiness = async (req, res) => {
    try {

        const business = await Business.findByIdAndDelete(req.params.id);

        if (!business) {
            return res.status(404).json({
                success: false,
                message: "Business not found.",
            });
        }

        res.status(200).json({
            success: true,
            message: "Business deleted successfully.",
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }
};

export const searchBusinesses = async (req, res) => {

    try {

        const { q, category, city } = req.query;

        const filter = {};

        if (q) {
            filter.$or = [
                { businessName: { $regex: q, $options: "i" } },
                { ownerName: { $regex: q, $options: "i" } },
                { category: { $regex: q, $options: "i" } },
                { city: { $regex: q, $options: "i" } },
            ];
        }

                    if (category) {
                    filter.category = {
                        $regex: category,
                        $options: "i",
                    };
                }

                if (city) {
                    filter.city = {
                        $regex: city,
                        $options: "i",
                    };
                }

        const businesses = await Business.find(filter);

        res.json({
            success: true,
            businesses,
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message,
        });

    }

};

export const increaseViews = async (req, res) => {

       console.log("View API Hit");
    console.log(req.params.id);

    try {

        const business = await Business.findByIdAndUpdate(

            req.params.id,

            {
                $inc: { views: 1 }
            },

            {
                new: true
            }

        );

        res.status(200).json({
            success: true,
            business
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};