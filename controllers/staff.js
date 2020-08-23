const Staff = require("../models/staff");

exports.getStaffById = (req, res, next, id)=>{
    Staff.findById(id).exec((err, staff)=>{
        if(err || !staff){
            return res.status(400).json({
                error: "Staff not found"
            });
        }
        req.staff = staff;
        next();
    })
}

exports.createStaff = (req, res)=>{
    Staff.create(req.body,(err, staff)=>{
        if(err){
            return res.status(400).json({
                error: "Can't create Staff"
            })
        }
        res.json({staff});
    })
}

exports.getStaff = (req, res)=>{
    return res.json(req.staff);
}

exports.getAllStaffs = (req, res)=>{
    Staff.find().exec((err, staffs)=>{
        if(err){
            return res.status(400).json({
                error: "No Staff found"
            })
        }
        res.json(staffs)
    })
}

exports.updateStaff = (req, res)=>{
    const staff = req.staff;
    staff.staffphotoURL = req.body.staffphotoURL;
    staff.name = req.body.name;
    staff.description = req.body.description;
    staff.content = req.body.content;
    staff.save((err, updatedStaff)=>{
        if(err){
            return res.status(400).json({
                error: "Staff not found"
            })
        }
        res.json(updatedStaff);
    })
}

exports.deleteStaff = (req, res)=>{
    Staff.findByIdAndRemove(
        {_id: req.staff._id},
        {useFindAndModify:true},
        (err)=>{
            if(err){
                return res.json({
                    error: "Staff can't be deleted"
                })
            }
             res.json({
                 message: "Staff Successfully deleted"
             })
        }
    )
}