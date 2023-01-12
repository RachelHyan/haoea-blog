const db = require('../db/index');
const bcrypt = require('bcryptjs');
const uuid = require('node-uuid');
const config = require('../config');
const jwt = require('jsonwebtoken');

const registerUser = (req,res) => {
    const sqlStr = 'select * from users where account=?';
    let { account, password } = req.body;
    password = bcrypt.hashSync(password, 10);
    db.query(sqlStr, account, (err, results) => {
        if (err) return res.cc(err);
        if (results.length > 0) return res.cc('用户名已存在');
        const sqlStr = 'insert into users set ?';
        var id = uuid.v1();
        db.query(sqlStr, { id, account, password }, (err, results) => {
            if (err) return res.cc(err);
            if (results.affectedRows !== 1) return res.cc('注册失败');
            res.cc('注册成功', 0);
        })
    }
    )
}

const loginUser = (req,res) => {
    let { account, password } = req.body;
    const sqlStr = 'select * from users where account=?';
    db.query(sqlStr, account, (err, results) => {
        if (err) return res.cc(err);
        if (results.length !== 1) return res.cc('登录失败');
        const compareResult = bcrypt.compareSync(password, results[0
        ].password);
        if (!compareResult) return res.cc('登录失败');
        // 生成token字符串，剔除密码和头像
        const user = { ...results[0], password: '', user_pic: '' };
        const tokenStr = jwt.sign(user
            , config.jwtSecretKey , { expiresIn: config.expiresIn});
        res.send({
            status: 0,
            message: '登录成功',
            token: 'Bearer ' + tokenStr
        })
    })
}

module.exports = {
    registerUser,
    loginUser
}