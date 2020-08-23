const Album = require("../models/album");

exports.getAlbumById = (req, res, next, id)=>{
    Album.findById(id).exec((err, album)=>{
        if(err || !album){
            return res.status(400).json({
                error: "Album not found"
            });
        }
        req.album = album;
        next();
    })
}

exports.createAlbum = (req, res)=>{

    Album.create(req.body,(err, album)=>{
        if(err){
            return res.status(400).json({
                error: "Can't create Album"
            })
        }
        res.json({album});
    })
}

exports.getAlbum = (req, res)=>{
    return res.json(req.album);
}

exports.getAllAlbums = (req, res)=>{
    Album.find().exec((err, albums)=>{
        if(err){
            return res.status(400).json({
                error: "No Album found"
            })
        }
        res.json(albums)
    })
}

exports.updateAlbum = (req, res)=>{
    const album = req.album;
    album.name = req.body.name;
    album.save((err, updatedAlbum)=>{
        if(err){
            return res.status(400).json({
                error: "Album not found"
            })
        }
        res.json(updatedAlbum);
    })
}

exports.deleteAlbum = (req, res)=>{
    Album.findByIdAndRemove(
        {_id: req.album._id},
        {useFindAndModify:true},
        (err)=>{
            if(err){
                return res.json({
                    error: "Album can't be deleted"
                })
            }
             res.json({
                 message: "Album Successfully deleted"
             })
        }
    )
}