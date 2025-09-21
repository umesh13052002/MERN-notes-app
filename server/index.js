import express from "express";
const app = express();
import { connectToMongoDB } from "./db/db.js";
import authRouter from "./routes/auth.js";
import cors from "cors";

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRouter);
app.listen(5000, () => {
  connectToMongoDB();
  console.log("Server started on port 5000");
});