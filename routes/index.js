var express = require('express');
var router = express.Router();
var SelerModel = require('../public/javascripts/db/Selermodel')
var SelerMenu = require('../public/javascripts/db/Selermenu')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/child',function (req, res, next) {
    SelerModel.find({},function (err, data) {
        if (err){
          console.log(err)
        }else if (data){
          res.send(data)
        }
    })
})

router.get('/api/find',function (req, res, next) {
    // console.log(req.query)
   SelerModel.find({'name':RegExp(req.query.key)},function (err, data) {
       if (err){
           console.log(err)
       }else {
           if (data[0] == null){
               res.send(11111111)
           }else {
               res.send(data)
           }
       }

   })
})
router.get('/api/shop',function (req, res, next) {
    SelerMenu.find({},function (err, data) {
        if (err) console.log(err)
        else {
            res.send(data)
            console.log(data)
        }
    })
})
module.exports = router;
