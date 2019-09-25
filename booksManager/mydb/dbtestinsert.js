const db = require('./db.js');
let sql = 'insert into book set ?';
let data = {
	name:'笑傲江湖',
	author:'金庸',
	category:'文学',
	description:'武侠小说'
}
db.base(sql,data,(results)=>{
	console.log(results);
})