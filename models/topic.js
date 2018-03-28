//话题相关的数据库操作
const db = require("../controllers/db-helpes");
//获取所有话题
exports.findAll=callback => {
    const sqlStr = "select * from `topics`"
    db.query(sqlStr,(err,results) => {
        if(err){
            return callback(err)
        }
        callback(null,results);
    })
}
//创建新话题
exports.create = (topic,callback) => {
    const sqlStr = "insert into `topics` set ?"
    db.query(sqlStr,topic, (err, results) => {
        if (err) {
            return callback(err)
        }
        callback(null, results);
    })
}
//根据id更新话题
exports.updateById = (topic,callback) => {
    const sqlStr = "update `topics` set `title`=? ,`content`=? where `id`=?";
    topic = [
        topic.title,
        topic.content,
        topic.id
    ]
    db.query(sqlStr, topic, (err, results) => {
        if (err) {
            return callback(err)
        }
        callback(null, results);
    })
}
//根据id删除话题
exports.deleteById = (topic, callback) => {
    const sqlStr = "delete from `topics` where `id`=?";
    db.query(sqlStr, [id], (err, results) => {
        if (err) {
            return callback(err)
        }
        callback(null, results);
    })
}