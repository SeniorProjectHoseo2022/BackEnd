const express = require('express')
const router = express.Router()
const sql = require('../module/sql/test')
const db = require('../module/database/db_control')
const token = require('../module/token/token');
const { verifyToken } = require('../module/token/check');

router.get('/', function(req,res){
    try {
        db.run(sql.test_select,["1"],function (err,data){
            res.json({message:"200",data:data})
        });
    }catch (e){
        res.json({message:"500"})
    }
})

//tokenTest
router.get('/verify', verifyToken, function (req,res){
    res.json({message:200, decryption:req.decryption})
})

router.get('/make', function(req,res){
    const id = req.query.id;
    res.json(token.lgToken(id));
})
router.get('/decrypt',function(req,res){
    const id = req.query.id;
    res.json({message:"200", decryption:token.decryption(id)});
})
//tokenTest

module.exports = router;
