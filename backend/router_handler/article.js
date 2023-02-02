const db = require('../db/index');
const uuid = require('node-uuid');

// 获取文章列表
const getArticleList = (req, res) => {
    const sqlStr = 'select * from articles where is_delete = 0';
    db.query(sqlStr, (err, results) => {
        if (err) return res.cc(err);
        res.send({
            status: 0,
            message: '获取文章列表成功',
            data: results
        })
    })
}

// 新增文章
const addArticle = (req, res) => {
    const sqlStr = 'insert into articles set ?';
    var data = {
        id: uuid.v4(),
        create_time: new Date(),
        is_delete: 0
    }
    db.query(sqlStr, {...req.body,...data}, (err, results) => {
        if (err) return res.cc(err);
        if (results.affectedRows !== 1) return res.cc('新增文章失败');
        res.cc('新增文章成功', 0);
    })
}

// 删除文章
const deleteArticle = (req, res) => {
    const sqlStr = 'update articles set is_delete = 1 where id = ?';
    db.query(sqlStr, req.params.id, (err, results) => {
        if (err) return res.cc(err);
        if (results.affectedRows !== 1) return res.cc('删除文章失败');
        res.cc('删除文章成功', 0);
    })
}

module.exports = {
    getArticleList,
    addArticle,
    deleteArticle
}