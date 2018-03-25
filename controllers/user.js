const mysql = require("mysql");
const moment = require("moment");
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1009',
    database: 'coffeehouse'
});

connection.connect();

exports.showSignin = (req,res) => {
    res.render("signin.html")
}


exports.signin = (req,res) => {
    res.send("signin")
}



exports.showSignup = (req,res) => {
    res.render("signup.html")
}



exports.signup = (req,res) => {
    //1.接收获取客户端提交的表单数据
    //2.数据验证
    // 普通数据校验
    // 业务数据校验
    //3.当数据验证通过之后，在数据库写入一条新的用户数据
    //4.发送成功响应数据，告诉客户端注册成功
    const body = req.body;
    console.log(body);
    //校验邮箱是否被占用
    connection.query("select * from `users` where `email`=?",[body.email],(err,results)=> {
        if(err){
            return res.send({
                code:500,
                message:err.message
            })
        }
        if(results[0]){
            return res.send({
                code:1,
                message:"邮箱已被占用"
            })
        }
    })
    //校验昵称是否存在
    connection.query("select * from `users` where `nickname`=?", [body.nickname], (err, results) => {
        if (err) {
            return res.send({
                code: 500,
                message: err.message
            })
        }

        if (results[0]) {
            return res.send({
                code:2,
                message: "昵称已被占用"
            })
        }
        //添加更新时间
        //moment 是一个专门处理时间的javaScript库
        body.createdAt = moment().format('YYYY-MM-DD HH:mm:ss');

        sqlStr = "insert into `users` set ? ";
        connection.query(sqlStr, body, (err, results) => {
            if (err) {
                return res.send({
                    code: 500,
                    message: err.message
                })
            }
            //服务端重定向只对同步请求有效
            res.send({
                code: 200,
                message: "ok"
            })
        })
    })


}



exports.signout = (req,res) => {
    res.send("signout")
}