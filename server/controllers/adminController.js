import validator from "validator";
import bcrypt from "bcrypt";
import { v2 as cloudinary } from "cloudinary";
import doctorModel from "../models/doctorModel.js";
import jwt from "jsonwebtoken";

const addDoctor = async (req, res) => {
    try {
        const { name, email, password, specialty, degree, experience, about, fees, address } = req.body;
        const imageFile = req.file;

        // Validate required fields
        if (!name || !email || !password || !specialty || !degree || !experience || !about || !fees || !address) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        // Validate email
        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: "Invalid email format" });
        }

        // Validate Password
        if (password.length < 8) {
            return res.status(400).json({ success: false, message: "Password must be at least 8 characters" });
        }

        // Validate Image
        if (!imageFile) {
            return res.status(400).json({ success: false, message: "Profile image is required" });
        }

        // Upload Image to Cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
            resource_type: "image",
            folder: "doctors",
        });

        const hashedPassword = await bcrypt.hash(password, 10);

        const doctorData = {
            name,
            email,
            password: hashedPassword,
            specialty,
            degree,
            experience,
            about,
            fees,
            address: JSON.parse(address),
            image: imageUpload.secure_url,
            date: Date.now(),
        };

        await new doctorModel(doctorData).save();
        return res.status(201).json({ success: true, message: "Doctor added successfully" });
    } catch (error) {
        console.error("Error adding doctor:", error);
        return res.status(500).json({ success: false, message: "Server error", error: error.message });
    }
};

const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password, process.env.JWT_SECRET);
            return res.status(200).json({ success: true, message: "Login successful", token });
        }

        return res.status(401).json({ success: false, message: "Invalid credentials" });
    } catch (error) {
        return res.status(500).json({ success: false, message: error.message });
    }
};

export { addDoctor, loginAdmin };
