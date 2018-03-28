const Topic =require("../models/topic");
const moment = require("moment");
exports.showCreate = (req,res) => {
    res.render("./topic/create.html");
} 
// 创建新话题
exports.create = (req,res) => {
    const body = req.body;
    body.userId = req.session.user.id;
    body.createDAt = moment().format("YYYY-MM-DD HH:mm:ss");
    Topic.create(body,(err,results)=>{
        if(err){
            return res.send({
                code:500,
                message:err.message
            })
        }
        res.send({
            code:200,
            message:"创建话题成功"
        });
    })
}
exports.show = (req,res) => {
    res.send("show");
}
exports.showEdit = (req,res) => {
    res.render("./topic/edit.html");
}
exports.edit = (req,res) => {
    res.send("edit");
}
exports.delete = (req,res) => {
    res.send("delete");
}