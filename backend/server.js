import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

const app = express();
app.use(cors());

// Cloudinary Config
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

// API Route
app.get("/gallery", async (req, res) => {
    try {
        const result = await cloudinary.search
            .expression("folder:pes-gallery/*")
            .sort_by("created_at", "desc")
            .max_results(200)
            .execute();

        res.json(result.resources);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch images" });
    }
});

// Start server
app.listen(process.env.PORT, () =>
    console.log(`Server running on port ${process.env.PORT}`)
);