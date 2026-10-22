import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js"
import rateLimiter from "./middleware/rateLimiter.js";



dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({
    origin: "http://localhost:5173",
}));
// Middleware to parse JSON request bodies
app.use(express.json());
app.use(rateLimiter); // Apply rate limiter middleware to all routes

// Custom middleware to log request method and URL
// app.use((req, res, next) => {
//     console.log(`Request method is ${req.method} & Request URL is ${req.url}`);
// })

app.use("/api/notes", notesRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})

