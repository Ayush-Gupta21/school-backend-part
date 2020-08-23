const AlbumVideo = require("../models/albumVideos");

exports.getAlbumVideosById = (req, res, next, id)=>{
    AlbumVideo.findById(id).exec((err, albumVideo)=>{
        if(err || !albumVideo){
            return res.status(400).json({
                error: "AlbumVideo not found"
            });
        }
        req.albumVideo = albumVideo;
        next();
    })
}

exports.createAlbumVideo = (req, res)=>{
    AlbumVideo.create(req.body,(err, albumVideo)=>{
        if(err){
            return res.status(400).json({
                error: "Can't create AlbumVideo"
            })
        }
        res.json({albumVideo});
    })
}

exports.getAlbumVideo = (req, res)=>{
    return res.json(req.albumVideo);
}

exports.getAllAlbumVideos = (req, res)=>{
    AlbumVideo.find().exec((err, albumVideos)=>{
        if(err){
            return res.status(400).json({
                error: "No AlbumVideos found"
            })
        }
        res.json(albumVideos)
    })
}

exports.updateAlbumVideo = (req, res)=>{
    const albumVideo = req.albumVideo;
    albumVideo.videoURL = req.body.videoURL;
    albumVideo.album = req.body.album;
    AlbumVideo.save((err, updatedAlbumVideo)=>{
        if(err){
            return res.status(400).json({
                error: "AlbumVideo not found"
            })
        }
        res.json(updatedAlbumVideo);
    })
}

exports.deleteAlbumVideo = (req, res)=>{
    AlbumVideo.findByIdAndRemove(
        {_id: req.albumVideo._id},
        {useFindAndModify:true},
        (err)=>{
            if(err){
                return res.json({
                    error: "AlbumVideo can't be deleted"
                })
            }
             res.json({
                 message: "AlbumVideo Successfully deleted"
             })
        }
    )
}