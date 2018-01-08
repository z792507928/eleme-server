//1.引入
let db = require('./db');

//2.定义数据结构
let SellerSchema = new db.Schema({

});

//3.发布为model

let PersonModel = db.model('SellerChild',SellerSchema,'SellerChild');
//4.暴露
module.exports = PersonModel;