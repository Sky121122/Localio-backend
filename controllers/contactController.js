import Support from "../models/Support.js";

export const sendContactMail = async (req, res) => {
    try {

        const {
            userId,
            name,
            email,
            requestType,
            subject,
            message,
        } = req.body;

        await Support.create({
            userId,
            name,
            email,
            requestType,
            subject,
            message,
        });

        return res.status(200).json({
            success: true,
            message:
                "Your request has been submitted successfully. Our team will review it within 24 hours.",
        });

    } catch (error) {

        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong. Please try again.",
        });

    }
};