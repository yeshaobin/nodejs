/* 后台接口开发 */
const express = require('express');
const db =require('./db.js');
const app=express();
/* 指定api路径  allbooks json接口*/
/* app.get('/allBooks',(req,res)=>{
	let sql = 'select * from book';
	db.base(sql,null,(result)=>{
		// res.send('');
		res.json(result);
	})
}); */
/* 指定api路径  allbooks jsonp接口*/
app.set('jsonp callback name','cb')
app.get('/allBooks',(req,res)=>{
	let sql = 'select * from book';
	db.base(sql,null,(result)=>{
		// res.send('');
		res.jsonp(result);
	})
});
app.listen(3000,()=>{
	console.log('running....')
})
