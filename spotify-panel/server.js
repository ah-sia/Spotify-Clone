import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import songRouter from './src/routes/songRoute.js';
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';
import albumRouter from './src/routes/albumRoute.js';

// app config
const app = express();
const port = process.env.port || 4000;
connectDB();
connectCloudinary();

// middlewares
app.use(express.json()); // this middleware is used to parse requests using json method
app.use(cors()); // cors allows frontend to connect with backend

// initializing routes
app.use("/api/song", songRouter)
app.use("/api/album", albumRouter);

app.get('/', (req, res) => res.send("API is working."))

app.listen(port,() => console.log(`Server started on ${port}`)); // () is callback function