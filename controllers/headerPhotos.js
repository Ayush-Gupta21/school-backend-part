const HeaderPhoto = require("../models/headerPhotos");

exports.getHeaderPhotoById = (req, res, next, id)=>{
    HeaderPhoto.findById(id).exec((err, headerPhoto)=>{
        if(err || !headerPhoto){
            return res.status(400).json({
                error: "HeaderPhoto not found"
            });
        }
        req.headerPhoto = headerPhoto;
        next();
    })
}

exports.createHeaderPhoto = (req, res)=>{
    HeaderPhoto.create(req.body,(err, headerPhoto)=>{
        if(err){
            return res.status(400).json({
                error: "Can't create HeaderPhoto"
            })
        }
        res.json({headerPhoto});
    })
}

exports.getHeaderPhoto = (req, res)=>{
    return res.json(req.headerPhoto);
}

exports.getAllHeaderPhotos = (req, res)=>{
    HeaderPhoto.find().exec((err, headerPhoto)=>{
        if(err){
            return res.status(400).json({
                error: "No HeaderPhoto found"
            })
        }
        res.json(headerPhoto)
    })
}

exports.deleteHeaderPhoto = (req, res)=>{
    HeaderPhoto.findByIdAndRemove(
        {_id: req.headerPhoto._id},
        {useFindAndModify:true},
        (err)=>{
            if(err){
                return res.json({
                    error: "HeaderPhoto can't be deleted"
                })
            }
             res.json({
                 message: "HeaderPhoto Successfully deleted"
             })
        }
    )
}