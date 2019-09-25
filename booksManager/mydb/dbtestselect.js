const db = require('./db.js');
let sql = 'select * from book where id = ?';
let data = [8];
db.base(sql,data,(results)=>{
	console.log(results);
})