import mongoose from "mongoose";

const SongSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: {type: String, required: true},
    album: {type: String, required: true},
    image: {type: String, required: true},
    file: {type: String, required: true},
    duration: {type: String, required: true}
})

const SongModel = mongoose.models.song || mongoose.model("song", SongSchema);

export default SongModel;