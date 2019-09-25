const db = require('./db.js');
let sql = 'update book set name=?,author=?,category=?,description=? where id=?';
let data = ['天龙八部','金庸','文学','武侠小说',11];
db.base(sql,data,(results)=>{
	console.log(results);
})