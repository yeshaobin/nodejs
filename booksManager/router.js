/* 路由模块 */
const express = require('express');
const router = express.Router();
const service = require('./service.js');

/* 路由处理 */

/* 渲染主页 */
router.get('/',service.showIndex);

/* 添加图书 (跳转)*/
router.get('/toAddBook',service.toAddBook)

/* 添加图书 提交数据*/
router.post('/addBook',service.addBook)

/* 修改图书 (跳转)*/
router.get('/toEditBook',service.toEditBook)

/* 修改图书 更新数据 */
router.post('/editBook',service.editBook)

/* 删除图书老师还没有讲 */
router.get('/deleteBook',service.deleteBook)

module.exports = router;