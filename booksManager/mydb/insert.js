/* 
	nodejs操作数据库基本步骤
 */
// 加载数据库驱动
var mysql = require('mysql');
//创建数据库链接
var connection = mysql.createConnection({
  host     : 'localhost',//数据库所在的服务器的域名或者ip地址
  user     : 'root',  //登录数据库的账号
  password : 'root', //登录数据库的密码
  database : 'book' //数据库的名称
});
 //执行连接操作
connection.connect();

let sql = 'insert into book set ?'
let data = {
	name:'浪潮之巅',
	author:'吴军',
	category:'计算机',
	description:'IT巨头的兴衰史'
}
 //操作数据库
connection.query(sql,data, function (error, results, fields) {
  if (error) {console.log(error);throw error}
  console.log(results);//查询表中有多少条数据
	if(results.affectedRows==1){
		console.log('数据插入成功')
	}
});
//关闭数据库
connection.end();