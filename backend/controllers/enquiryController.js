import enquiryModel from "../models/enquiryModel.js";
import nodemailer from "nodemailer";

const addEnquiry = async (req, res) => {
    try {
        const { name, email, message } = req.body;
console.log(req.body)
        if (!name || !email || !message) {
            return res.json({ success: false, message: "All fields are required" });
        }


        const newEnquiry = new enquiryModel({ name, email, message });
        await newEnquiry.save();


        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });


        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: "New Contact Enquiry",
            html: `
        <h3>New Enquiry Received</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        };


        await transporter.sendMail(mailOptions);
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "We Received Your Message",
            html: `<p>Hi ${name}, thank you for contacting us. We will reply soon.</p>`
        });

        res.json({ success: true, message: "Form Submitted Successfully" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

export { addEnquiry };
