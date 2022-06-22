const express = require('express')
const router = express.Router()
const sql = require('../module/sql/chat.js')
const db = require('../module/database/db_control')
const token = require("../module/token/token");


router.get('/', function(req, res, next) {
    res.render('chat', { title: 'Express' });
});

router.post('/dm', function (req,res){
    try {
        const id1 = req.body.id1;
        const id2=req.body.id2;
        db.run(sql.dm,[id1,id2],function (err,data){
            if(data[0]!=undefined)  res.json(data);
            else res.json({message:"200", data:"404"})
        });
    }catch (e){
        res.json({message:"500"})
    }
})

router.post('/create_group', function (req,res){
    try {
        const titles = req.body.titles;
        const master=req.body.master;
        const category = req.body.category;
        db.run(sql.create_group,[titles,master,category],function (err,data){
            if(data[0]!=undefined)  res.json(data);
            else res.json({message:"200", data:"404"})
        });
    }catch (e){
        res.json({message:"500"})
    }
})

module.exports = router;