const LetsGetInspired = require("../models/letsGetInspired");

exports.getLetsGetInspiredById = (req, res, next, id)=>{
    LetsGetInspired.findById(id).exec((err, letsGetInspired)=>{
        if(err || !letsGetInspired){
            return res.status(400).json({
                error: "LetsGetInspired not found"
            });
        }
        req.letsGetInspired = letsGetInspired;
        next();
    })
}

exports.createLetsGetInspired = (req, res)=>{

    LetsGetInspired.create(req.body,(err, letsGetInspired)=>{
        if(err){
            return res.status(400).json({
                error: "Can't create LetsGetInspired"
            })
        }
        res.json({letsGetInspired});
    })
}

exports.getLetsGetInspired = (req, res)=>{
    return res.json(req.letsGetInspired);
}

exports.getAllLetsGetInspired = (req, res)=>{
    LetsGetInspired.find().exec((err, letsGetInspired)=>{
        if(err){
            return res.status(400).json({
                error: "No LetsGetInspired found"
            })
        }
        res.json(letsGetInspired)
    })
}

//Hitesh update method
exports.updateLetsGetInspired = (req, res)=>{
    const letsGetInspired = req.letsGetInspired;
    letsGetInspired.quote = req.body.quote;
    letsGetInspired.author = req.body.author;
    letsGetInspired.save((err, updatedLetsGetInspired)=>{
        if(err){
            return res.status(400).json({
                error: "LetsGetInspired not found"
            })
        }
        res.json(updatedLetsGetInspired);
    })
}

exports.deleteLetsGetInspired = (req, res)=>{
    LetsGetInspired.findByIdAndRemove(
        {_id: req.letsGetInspired._id},
        {useFindAndModify:true},
        (err)=>{
            if(err){
                return res.json({
                    error: "LetsGetInspired can't be deleted"
                })
            }
             res.json({
                 message: "Successfully deleted"
             })
        }
    )
}