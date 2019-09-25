/* 
		实现图书管理系统后台接口
*/
const express = require('express');
const router = require('./router.js');
const bodyParser = require('body-parser');
const app= express();
app.use('/www',express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
// app.use(bodyParser.json());
app.use(router);
app.listen(3000,()=>{
	console.log('running......');
})