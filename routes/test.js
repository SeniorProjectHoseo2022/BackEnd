const express = require('express')
const router = express.Router()
const sql = require('../module/sql/test')
const db = require('../module/database/db_control')

router.get('/', function(req,res){
    try {
        db.run(sql.test_select,["1"],function (err,data){
            res.json({message:"200",data:data})
        });
    }catch (e){
        res.json({message:"500"})
    }
})

module.exports = router;
