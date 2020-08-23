const Notice = require("../models/notice");

exports.getNoticeById = (req, res, next, id)=>{
    Notice.findById(id).exec((err, notice)=>{
        if(err || !notice){
            return res.status(400).json({
                error: "notice not found"
            });
        }
        req.notice = notice;
        next();
    })
}

exports.getNotice = (req, res)=>{
    return res.json(req.notice)
}

exports.createNotice = (req, res)=>{
    Notice.create(req.body, (err, notice)=>{
        if(err){
            return res.status(400).json({
                error: "Can't create this notice"
            })
        }
        res.json({notice})
    })
}

exports.getAllNotices = (req, res)=>{
    Notice.find().sort({ _id: -1 }).exec((err, notices)=>{
        if(err){
            return res.status(400).json({
                error: "No Notice Found"
            })
        }
        res.json(notices);
    })
}

exports.updateNotice = (req, res)=>{
    const notice = req.notice;
    notice.noticeContent = req.body.noticeContent;
    notice.noticeHeading = req.body.noticeHeading;
    notice.save((err, updatedNotice)=>{
        if(err){
            return res.status(400).json({
                error: "Notice not found"
            })
        }
        res.json(updatedNotice);
    })
}

exports.deleteNotice = (req, res)=>{
    Notice.findByIdAndRemove(
        {_id: req.notice._id},
        {useFindAndModify:true},
        (err)=>{
            if(err){
                return res.json({
                    error: "notice can't be deleted"
                })
            }
             res.json({
                 message: "Notice is successfully deleted!"
             })
        }
    )
}