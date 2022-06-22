const express = require('express')
const router = express.Router()
const sql = require('../module/sql/user_sql')
const db = require('../module/database/db_control')


router.post('/chat', function (req,res){
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