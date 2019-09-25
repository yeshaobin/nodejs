const express = require('express');
const template = require('art-template');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const router = require('./router.js');
/* 启用静态资源服务 */
app.use('/www',express.static('public'))
/* 设置模板引擎 */
/* 使express兼容art-template模板引擎 */
app.set('views',path.join(__dirname,'views'));
app.set('view engine','art');/* art是模板的后缀 */
app.engine('art',require('express-art-template'));
/* 处理post请求参数 */
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
/* 配置路由 */
// console.log(router)
app.use(router);
/* 监听端口 */
app.listen(3000,()=>{
	console.log('running....');
})