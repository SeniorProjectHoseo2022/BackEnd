const express = require('express')
const router = express.Router()
const sql = require('../module/sql/comment')
const db = require('../module/database/db_control')

router.get('/', function(req, res, next) {
    res.render('comment', { title: 'Express' });
});



router.post('/create', function (req,res){
    try {
       const board_id=req.body.board_id;
       const text=req.body.text;
       //const writed_time=req.body.writed_time;
        db.run(sql.create,[board_id,text],function (err,data){
            if(err == null) res.json({message:"200"})
            else res.json({message:"500", errno:err.errno})
        });
    }catch (e){
        res.json({message:"500"})
    }
})

router.post('/update', function (req,res){
    try {
         const board_id = req.body.board_id;
         const text = req.body.text;
        db.run(sql.update,[board_id,text],function (err,data){
            if(err == null) res.json({message:"200"})
            else res.json({message:"500", errno:err.errno})
        });
    }catch (e){
        res.json({message:"500"})
    }
})

router.post('/drop', function (req,res){
    try {
        const cid = req.body.cid;
        db.run(sql.drop,[cid],function (err,data){
            if(err == null) res.json({message:"200"})
            else res.json({message:"500", errno:err.errno})
        });
    }catch (e){
        res.json({message:"500"})
    }
})

router.post('/select', function (req,res){
    try {
        const board_id=req.body.board_id;
        db.run(sql.select,[board_id],function (err,data){
            if(data[0]!=undefined)  res.json(data);
            else res.json({message:"200", data:"404"})
        });
    }catch (e){
        res.json({message:"500"})
    }
})





module.exports = router;