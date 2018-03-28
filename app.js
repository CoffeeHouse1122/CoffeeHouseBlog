const express = require("express");
const router = require("./router");
const bodyParser = require("body-parser");
const session = require("express-session");
const MySQLStore = require('express-mysql-session')(session);
const app = express();

// 开放公共资源
app.use("/public", express.static("./public/"));
app.use("/node_modules",express.static("./node_modules/"));

//session持久化存储
const options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '1009',
    database: 'coffeehouse'
};

const sessionStore = new MySQLStore(options);

//配置session插件
app.use(session({
    key:"session_cookie_name",
    secret: 'keyboard cat',
    resave: false,
    store: sessionStore, //将数据session默认存储到数据库中（默认内存存储）
    saveUninitialized: true
}))

//配置body-parser 解析表单post请求体
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//配置模板引擎
app.engine('html', require('express-art-template'))

app.use(router);

app.listen(3000,() => console.log("running..."));