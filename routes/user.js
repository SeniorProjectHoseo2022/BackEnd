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

router.post('/sign', function (req,res){
    try {
        const id = req.body.id;
        const password = req.body.password;
        const name = req.body.name;
        const gender = req.body.gender;
        db.run(sql.sign, [id, password, gender, name], function (err,data){
            if(err == null) res.json({message:"200"})
            else res.json({message:"500", errno:err.errno})
        })
    }catch (e){
        res.json({message:"500"})
    }
})

router.post('/id_check', function (req,res){
    try {
        const id = req.body.id;
        db.run(sql.id_check, [id], function (err,data){
            const c = data[0]["count(*)"];
            if(err == null) res.json({message:"200", data:c})
            else res.json({message:"500", errno:err.errno})
        })
    }catch (e){
        res.json({message:"500"})
    }
})

router.post('/change', function (req,res){
    try {
        const id = req.body.id;
        const password = req.body.password;
        const gender=req.body.gender;
        db.run(sql.login,[id, password],function (err,data){
            if(data[0]!=undefined){
                db.run(sql.change, [id,gender], function(err2, data2){
                    if(err2 == null)  res.json({message:"200"})
                    else res.json({message:"500", errno:err2.errno})
                })
            }
            else res.json({message:"500"})
        });
    }catch (e){
        res.json({message:"500"})
    }
})

router.post('/withdrawal', function (req,res){
    try {
        const id = req.body.id;
        const password = req.body.password;
        db.run(sql.login,[id, password],function (err,data){
            if(data[0]!=undefined){
                db.run(sql.withdrawal, [id,password], function(err2, data2){
                    if(err2 == null)  res.json({message:"200"})
                    else res.json({message:"500", errno:err2.errno})
                })
            }
            else res.json({message:"500"})
        });
    }catch (e){
        res.json({message:"500"})
    }
})

router.post('/verify', verifyToken, function (req, res){
    res.json({message:200, decryption:req.decryption})
})

module.exports = router;