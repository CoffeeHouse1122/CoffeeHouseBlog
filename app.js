const express = require("express");
const router = require("./router");
const bodyParser = require("body-parser");


const app = express();

// 开放公共资源
app.use("/public", express.static("./public/"));
app.use("/node_modules",express.static("./node_modules/"));

//配置body-parser 解析表单post请求体
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

//配置模板引擎
app.engine('html', require('express-art-template'))

app.use(router);

app.listen(3000,() => console.log("running..."));