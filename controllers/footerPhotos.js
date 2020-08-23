const FooterPhoto = require("../models/footerPhotos");

exports.getFooterPhotoById = (req, res, next, id)=>{
    FooterPhoto.findById(id).exec((err, footerPhoto)=>{
        if(err || !footerPhoto){
            return res.status(400).json({
                error: "FooterPhoto not found"
            });
        }
        req.footerPhoto = footerPhoto;
        next();
    })
}

exports.createFooterPhoto = (req, res)=>{
    FooterPhoto.create(req.body,(err, footerPhoto)=>{
        if(err){
            return res.status(400).json({
                error: "Can't create FooterPhoto"
            })
        }
        res.json({footerPhoto});
    })
}

exports.getFooterPhoto = (req, res)=>{
    return res.json(req.footerPhoto);
}

exports.getAllFooterPhotos = (req, res)=>{
    FooterPhoto.find().exec((err, footerPhoto)=>{
        if(err){
            return res.status(400).json({
                error: "No FooterPhoto found"
            })
        }
        res.json(footerPhoto)
    })
}

exports.deleteFooterPhoto = (req, res)=>{
    FooterPhoto.findByIdAndRemove(
        {_id: req.footerPhoto._id},
        {useFindAndModify:true},
        (err)=>{
            if(err){
                return res.json({
                    error: "FooterPhoto can't be deleted"
                })
            }
             res.json({
                 message: "FooterPhoto Successfully deleted"
             })
        }
    )
}