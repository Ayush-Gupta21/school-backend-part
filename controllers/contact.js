const Contact = require("../models/contact");

exports.getContactById = (req, res, next, id)=>{
    Contact.findById(id).exec((err, contact)=>{
        if(err || !contact){
            return res.status(400).json({
                error: "Contact not found"
            });
        }
        req.contact = contact;
        next();
    })
}

exports.createContact = (req, res)=>{

    Contact.create(req.body,(err, contact)=>{
        if(err){
            return res.status(400).json({
                error: "Can't create Contact"
            })
        }
        res.json({contact});
    })
}

exports.getContact = (req, res)=>{
    return res.json(req.contact);
}

//Hitesh update method
exports.updateContact = (req, res)=>{
    const contact = req.contact;
    contact.email = req.body.email;
    contact.phone = req.body.phone;
    contact.address = req.body.address;
    contact.save((err, updatedContact)=>{
        if(err){
            return res.status(400).json({
                error: "Contact not found"
            })
        }
        res.json(updatedContact);
    })
}