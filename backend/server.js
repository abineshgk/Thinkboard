
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import notesRoutes from "./src/routes/notesRoutes.js";
import { connectDB } from "./src/config/db.js";
import rateLimiter from "./src/middleware/ratelimiter.js";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001

app.use(
    cors({
        origin: "http://localhost:5173",
    }))
app.use(express.json());
app.use(rateLimiter);


// app.use((req,res,next) => {
//     console.log("We just got a new req")
//     next();
// });

app.use("/api/notes",notesRoutes);

connectDB().then(() => {
app.listen(PORT, () => {
    console.log("Server started on PORT:",PORT);
    
});
})





















