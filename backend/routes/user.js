var express = require('express');
var router = express.Router();
const user_handler = require('../router_handler/user');

/* 注册 */
router.post('/register', user_handler.registerUser);

/** 登录 */
router.post('/login', user_handler.loginUser);

module.exports = router;
