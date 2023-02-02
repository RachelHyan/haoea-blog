var express = require('express');
var router = express.Router();
const article_handler = require('../router_handler/article');

// 获取文章列表
router.get('/getArticleList', article_handler.getArticleList);

// 新增文章
router.post('/addArticle', article_handler.addArticle);

// 删除文章
router.delete('/deleteArticle/:id', article_handler.deleteArticle);

module.exports = router;