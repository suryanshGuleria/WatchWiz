import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";

//configure env
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json()); //as body parser
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);

//rest api
app.get("/", (req, res) => {
  res.send({
    message: "welcome to watchwiz app",
  });
});

//PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server running in ${process.env.DEV_MODE} on port:${PORT}`);
});
