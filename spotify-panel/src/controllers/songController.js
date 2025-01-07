import { v2 as cloudinary } from 'cloudinary'
import SongModel from '../models/songModel.js';

const addSong = async (req, res) => {
    try {
        const name = req.body.name;
        const description = req.body.description;
        const album = req.body.album;
        const audioFile = req.files.audio[0];
        const imageFile = req.files.image[0];  // to save these files, cloudinary uploader will be used

        // these uploads the files to cloudinary
        const audioUpload = await cloudinary.uploader.upload(audioFile.path, { resource_type: "video" });
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });

        const duration = `${Math.floor(audioUpload.duration/60)}:${Math.floor(audioUpload.duration%60)}`;

        const songData = {
            name,
            description,
            album,
            image: imageUpload.secure_url,
            file: audioUpload.secure_url,
            duration,
        }

        const song = SongModel(songData);
        await song.save(); // This will save the song to the database

        res.json({success: true, message: "Song added."});

    } catch (error) {
        res.json({success: false});
    }
}

const listSong = async (req, res) => {
    try {
        const allSongs = await SongModel.find({});
        res.json({success: true, songs: allSongs});
    } catch (error) {
        res.json({sucess: false});
    }
}

const removeSong = async (req, res) => {
    try {
        await SongModel.findByIdAndDelete(req.body.id); // this will delete the album in the DB
        res.json({success: true, message: "Song removed."});

    } catch (error) {
        res.json({success: false});
    }
}

export {addSong, listSong, removeSong}