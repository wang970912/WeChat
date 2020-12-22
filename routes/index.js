var express = require('express');
var router = express.Router();
var config = require('../config.json'); //引入配置文件
var wechat = require('../wechat/wechat.js')//引入wechat封装文件
var wechatApp = new wechat(config); //实例wechat 模块

//用于处理所有进入 8080 端口 get 的连接请求
router.get('/', function(req, res, next) {
	wechatApp.auth(req,res);
});

//用于处理所有进入 8080 端口 post 的连接请求
router.post('/',function(req,res){
    wechatApp.handleMsg(req,res);
});

var feedback = require('./feedback.js');
router.use('/feedback',feedback);

//获取accessToken
// router.get('/actoken',function(req,res,next){
// 	wechatApp.getAccessToken().then(function(data){
// 	    res.send(data);
// 	});
// });

module.exports = router;
