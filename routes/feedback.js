var express = require('express');
var router = express.Router();
var config = require('../config.json'); //引入配置文件
var wechat = require('../wechat/wechat.js');//引入wechat封装文件
var wechatApp = new wechat(config); //实例wechat 模块

/* GET feedback listing. */
router.get('/', function(req, res, next) {
	wechatApp.getAccessToken().then(function(data){
  	    res.send(data);
  	});
});
// router.get('/', function(req, res, next) {
// 	res.send('respond with a resource');
// });

module.exports = router;