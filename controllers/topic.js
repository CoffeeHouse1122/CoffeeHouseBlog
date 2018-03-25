exports.showCreate = (req,res) => {
    res.render("./topic/create.html");
}
exports.create = (req,res) => {
    res.send("create");
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