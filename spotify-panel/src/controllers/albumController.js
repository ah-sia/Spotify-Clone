import { v2 as cloudinary } from 'cloudinary';
import AlbumModel from '../models/albumModel.js';

const addAlbum = async (req, res) => {
    try {
        
        const name = req.body.name;
        const description = req.body.description;
        const bgColor = req.body.bgColor;
        const imageFile = req.file;
        
        const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type: image}); // stores the image in the cloud

        // the properties needed in an album are defined here
        const albumData = {
            name,
            description,
            bgColor,
            image: imageUpload.secure_url
        }

        // store the album data on MongoDB
        const album = AlbumModel(albumData);
        await album.save();

        res.json({success: true, message: "Album added"})


    } catch (error) {
        res.json({success: false});
    }
}

const listAlbum = async (req, res) => {
    try {
        const allAlbums = await AlbumModel.find({});
        res.json({success: true, albums: allAlbums});

    } catch (error) {
        res.json({success: false});
    }
}

const removeAlbum = async (req, res) => {
    try {
        await AlbumModel.findByIdAndDelete(req.body.id); // this will delete the album in the DB
        res.json({success: true, message: "Song removed"}); // and this will show the response

    } catch (error) {
        res.json({success: false});
    }
}

export { addAlbum, listAlbum, removeAlbum } ;