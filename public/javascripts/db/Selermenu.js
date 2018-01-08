//1.引入

let db = require('./db');
// 2. 定义数据结构
let SellerSchema = new db.Schema({
});
//3.发布为model

let SellerMenuModel = db.model('SellerMenu',SellerSchema,'SellerMenu');
//4.暴露
module.exports = SellerMenuModel;