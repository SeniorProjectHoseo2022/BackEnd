const express = require('express')
const router = express.Router()
const sql = require('../module/sql/user_sql')
const db = require('../module/database/db_control')
const token = require('../module/token/token');
const { verifyToken } = require('../module/token/check');

router.get('/', function(req, res, next) {
    res.render('user', { title: 'Express' });
});

router.post('/login', function (req,res){
    try {
        const id = req.body.id;
        const password = req.body.password;
        db.run(sql.login,[id, password],function (err,data){
            if(data[0]!=undefined)  res.json(token.lgToken(data[0]["uid"]))
            else res.json({message:"200", data:"404"})
        });
    }catch (e){
        res.json({message:"500"})
    }
})

module.exports = router;