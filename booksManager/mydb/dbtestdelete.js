const db = require('./db.js');
let sql = 'delete from book where id = ?';
let data = [14];
db.base(sql,data,(results)=>{
	console.log(results);
})