import transporter from "../utils/mailer.js";
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



        await transporter.sendMail({

            from: process.env.EMAIL_USER,

            to: process.env.EMAIL_USER,

            subject: `Localio Support • ${requestType}`,

            html: `
                <div style="font-family:Arial;padding:20px">

                    <h2 style="color:#2563eb">
                        📩 New Support Request
                    </h2>

                    <hr>

                    <p><b>Name:</b> ${name}</p>

                    <p><b>Email:</b> ${email}</p>

                    <p><b>Request Type:</b> ${requestType}</p>

                    <p><b>Subject:</b> ${subject}</p>

                    <p><b>Message:</b></p>

                    <div style="
                        padding:15px;
                        background:#f5f5f5;
                        border-radius:8px;
                    ">
                        ${message}
                    </div>

                    <br>

                    <hr>

                    <p style="color:gray">
                        Sent from Localio
                    </p>

                </div>
            `,

        });

        res.status(200).json({

            success: true,

            message: "Message sent successfully.",

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message,

        });

    }

};