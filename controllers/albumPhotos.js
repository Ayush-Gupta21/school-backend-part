const AlbumPhoto = require("../models/albumPhotos");

exports.getAlbumPhotoById = (req, res, next, id)=>{
    AlbumPhoto.findById(id).exec((err, albumPhoto)=>{
        if(err || !albumPhoto){
            return res.status(400).json({
                error: "AlbumPhoto not found"
            });
        }
        req.albumPhoto = albumPhoto;
        next();
    })
}

exports.createAlbumPhoto = (req, res)=>{
    AlbumPhoto.create(req.body,(err, albumPhoto)=>{
        if(err){
            return res.status(400).json({
                error: "Can't create AlbumPhoto"
            })
        }
        res.json({albumPhoto});
    })
}

exports.getAlbumPhoto = (req, res)=>{
    return res.json(req.albumPhoto);
}

exports.getAllAlbumPhotos = (req, res)=>{
    AlbumPhoto.find().exec((err, albumPhotos)=>{
        if(err){
            return res.status(400).json({
                error: "No AlbumPhoto found"
            })
        }
        res.json(albumPhotos)
    })
}

exports.updateAlbumPhoto = (req, res)=>{
    const albumPhoto = req.albumPhoto;
    albumPhoto.photoURL = req.body.photoURL;
    albumPhoto.album = req.body.album;
    AlbumPhoto.save((err, updatedAlbumPhoto)=>{
        if(err){
            return res.status(400).json({
                error: "AlbumPhoto not found"
            })
        }
        res.json(updatedAlbumPhoto);
    })
}

exports.deleteAlbumPhoto = (req, res)=>{
    AlbumPhoto.findByIdAndRemove(
        {_id: req.albumPhoto._id},
        {useFindAndModify:true},
        (err)=>{
            if(err){
                return res.json({
                    error: "AlbumPhoto can't be deleted"
                })
            }
             res.json({
                 message: "AlbumPhoto Successfully deleted"
             })
        }
    )
}