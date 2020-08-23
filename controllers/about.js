const About = require("../models/about");

exports.getAboutById = (req, res, next, id)=>{
    About.findById(id).exec((err, about)=>{
        if(err || !about){
            return res.status(400).json({
                error: "About not found"
            });
        }
        req.about = about;
        next();
    })
}

exports.createAbout = (req, res)=>{
    About.create(req.body,(err, about)=>{
        if(err){
            return res.status(400).json({
                error: "Can't create About"
            })
        }
        res.json({about});
    })
}

exports.getAbout = (req, res)=>{
    return res.json(req.about);
}

exports.updateAbout = (req, res)=>{
    const about = req.about;
    about.content = req.body.content;
    about.save((err, updatedAbout)=>{
        if(err){
            return res.status(400).json({
                error: "About not found"
            })
        }
        res.json(updatedAbout);
    })
}

