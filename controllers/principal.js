const Principal = require("../models/principal");

exports.getPrincipalById = (req, res, next, id)=>{
    Principal.findById(id).exec((err, principal)=>{
        if(err || !principal){
            return res.status(400).json({
                error: "Principal not found"
            });
        }
        req.principal = principal;
        next();
    })
}

exports.createPrincipal = (req, res)=>{
    Principal.create(req.body,(err, principal)=>{
        if(err){
            return res.status(400).json({
                error: "Can't create Principal"
            })
        }
        res.json({principal});
    })
}

exports.getPrincipal = (req, res)=>{
    return res.json(req.principal);
}

exports.updatePrincipal = (req, res)=>{
    const principal = req.principal;
    principal.principalphotoURL = req.body.principalphotoURL;
    principal.content = req.body.content;
    principal.save((err, updatedPrincipal)=>{
        if(err){
            return res.status(400).json({
                error: "Principal not found"
            })
        }
        res.json(updatedPrincipal);
    })
}