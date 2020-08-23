const Academic = require("../models/academic");

exports.getAcademicById = (req, res, next, id)=>{
    Academic.findById(id).exec((err, academic)=>{
        if(err || !academic){
            return res.status(400).json({
                error: "Academic not found"
            });
        }
        req.academic = academic;
        next();
    })
}

exports.createAcademic = (req, res)=>{
    Academic.create(req.body,(err, academic)=>{
        if(err){
            return res.status(400).json({
                error: "Can't create Academic"
            })
        }
        res.json({academic});
    })
}

exports.getAcademic = (req, res)=>{
    return res.json(req.academic);
}

exports.updateAcademic = (req, res)=>{
    const academic = req.academic;
    academic.content = req.body.content;
    academic.save((err, updatedAcademic)=>{
        if(err){
            return res.status(400).json({
                error: "Academic not found"
            })
        }
        res.json(updatedAcademic);
    })
}

