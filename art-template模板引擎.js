const express=require('express');
const template = require('art-template');
const app = express();
const path = require('path');
/* 使express兼容art-template模板引擎 */
app.set('views',path.join(__dirname,'views'))
app.set('view engine','art');/* art是模板的后缀 */
app.engine('art',require('express-art-template'))
app.get('/list',(req,res)=>{
	let data = {
		title:"水果",
		list:['orange','apple','banana']
	}
	res.render('list',data)
}).listen(3000,()=>{
	console.log('running...');
})