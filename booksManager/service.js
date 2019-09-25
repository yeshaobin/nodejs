/* 业务模块 */
const data = require('./data.json');
const path = require('path');
const fs = require('fs');
const db =require('./db.js');
let maxBookCode = ()=>{
	let arr=[];
	data.forEach((item,index)=>{
		arr.push(item.id);
	})
	return Math.max.apply(null,arr);
}
let writeDataToFile =(res)=>{
	fs.writeFile(path.join(__dirname,'data.json'),JSON.stringify(data,null,4),(err)=>{
		
		if(err){
			console.log(err);
			res.send('server error');
		}
		/* 文件写入成功后重新跳转到主页面 */
		res.redirect('/');
	})
}

/* 渲染主页面 */

exports.showIndex = (req,res)=>{
	let sql = "select * from book";
	db.base(sql,null,(result)=>{
		res.render('index',{list:result})
	})
	// res.render('index',{list:data})
}
/* 跳转到添加图书的页面 */
exports.toAddBook = (req,res)=>{
	res.render('addBook',{})
}
exports.addBook = (req,res)=>{
	/* 获取表单数据 */
	let info = req.body;
	let book = {};
	for(let key in info){
		book[key]=info[key]
	}
	let sql = 'insert into book set ?';
	db.base(sql,book,(result)=>{
		if(result.affectedRows==1){
			res.redirect('/');
		}
	})
	// book.id=maxBookCode()+1;
	// data.push(book);
	// fs.writeFile(path.join(__dirname,'data.json'),JSON.stringify(data,null,4),(err)=>{
	// 	
	// 	if(err){
	// 		console.log(err);
	// 		res.send('server error');
	// 	}
	// 	/* 文件写入成功后重新跳转到主页面 */
	// 	res.redirect('/');
	// })
	// writeDataToFile(res);
}
exports.toEditBook=(req,res)=>{
	let id = req.query.id;
	let sql = 'select * from book where id=?';
	let data=[id];
	db.base(sql,data,(result)=>{
		console.log(result[0])
		res.render('editBook',result[0])
	})
}
exports.editBook=(req,res)=>{
	let info = req.body;
	// console.log(info)
	// data.forEach((item,index)=>{
	// 	if(info.id==item.id){
	// 		for(let key in info){
	// 			item[key]=info[key]
	// 		}
	// 		return;
	// 	}
	// })
	// writeDataToFile(res);
	let sql = 'update book set name=?,author=?,category=?,description=? where id = ?';
	let data=[info.name,info.author,info.category,info.description,info.id];
	console.log(data)
	db.base(sql,data,(result)=>{
		console.log(result)
		if(result.affectedRows==1){
			res.redirect('/');
		}
	})
}
exports.deleteBook=(req,res)=>{
	
	let id = req.query.id;
	let sql = 'delete from book where id = ?';
	let data=[id];
	db.base(sql,data,(result)=>{
		if(result.affectedRows==1){
			res.redirect('/');
		}
	})
	// data.forEach((item,index)=>{
	// 	if(id == item.id){
	// 		data.splice(index,1);
	// 	}
	// 	return;
	// })
	// writeDataToFile(res);
}