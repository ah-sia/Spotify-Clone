import { addSong, listSong, removeSong } from "../controllers/songController.js";
import express from 'express'
import upload from "../middleware/multer.js";

const songRouter = express.Router(); // using the router, you can create multiple APIs

songRouter.post('/add', upload.fields([{name: 'image', maxCount:1}, {name: 'audio', maxCount:1}]), addSong);
// The uploads.fields() will save an image file or audio file into the req.file objects in songController

songRouter.get('/list', listSong)

songRouter.post('/remove', removeSong)

export default songRouter