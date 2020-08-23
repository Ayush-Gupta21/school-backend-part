const Admission = require("../models/admission");

exports.getAdmissionById = (req, res, next, id)=>{
    Admission.findById(id).exec((err, admission)=>{
        if(err || !admission){
            return res.status(400).json({
                error: "Admission not found"
            });
        }
        req.admission = admission;
        next();
    })
}

exports.createAdmission = (req, res)=>{

    Admission.create(req.body,(err, admission)=>{
        if(err){
            return res.status(400).json({
                error: "Can't create Admission"
            })
        }
        res.json({admission});
    })
}

exports.getAdmission = (req, res)=>{
    return res.json(req.admission);
}

exports.updateAdmission = (req, res)=>{
    console.log(req.body);
    console.log(req.body.content);
    const admission = req.admission;
    admission.content = req.body.content;
    admission.save((err, updatedAdmission)=>{
        if(err){
            return res.status(400).json({
                error: "Admission not found"
            })
        }
        res.json(updatedAdmission);
    })
}

