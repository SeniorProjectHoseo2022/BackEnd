const express = require('express')
const router = express.Router()
const sql = require('../module/sql/board')
const db = require('../module/database/db_control')
const token = require('../module/token/token');
const { verifyToken } = require('../module/token/check');

router.get('/', function(req, res, next) {
    res.render('board', { title: 'Express' });
});



router.post('/show_distance', function (req,res){
    try {
        //const uid1 = req.body.uid1;
       // const uid2 = req.body.uid2;
        db.run(sql.show_distance,[],function (err,data){
            if(data[0]!=undefined)  res.json(data);
            else res.json({message:"200", data:"404"})
        });
    }catch (e){
        res.json({message:"500"})
    }
})

router.post('/show_agedistance', function (req,res){
    try {
       // const uid1 = req.body.uid1;
       // const uid2 = req.body.uid2;
        db.run(sql.show_agedistance,[],function (err,data){
            if(data[0]!=undefined)  res.json(data);
            else res.json({message:"200", data:"404"})
        });
    }catch (e){
        res.json({message:"500"})
    }
})

router.post('/show_hotlist', function (req,res){
    try {
        db.run(sql.show_hotlist,[],function (err,data){
            if(data[0]!=undefined)  res.json(data);
            else res.json({message:"200", data:"404"})
        });
    }catch (e){
        res.json({message:"500"})
    }
})

router.post('/select', function (req,res){
    try {
        db.run(sql.select,[],function (err,data){
            if(data[0]!=undefined)  res.json(data);
            else res.json({message:"200", data:"404"})
        });
    }catch (e){
        res.json({message:"500"})
    }
})

router.post('/create', function (req,res){
    try {
        const category = req.body.category;
        const rolling = req.body.rolling;
        const text = req.body.text;
        const view = req.body.view;
        const group_id = req.body.group_id;
        const writed_time = req.body.writed_time;
        const uid = req.body.uid;
        db.run(sql.create, [category,rolling,text,view,group_id,writed_time,uid], function (err,data){
            if(err == null) res.json({message:"200"})
            else res.json({message:"500", errno:err.errno})
        })
    }catch (e){
        res.json({message:"500"})
    }
})

router.post('/update', function (req,res){
    try {
        const bid = req.body.bid;
        const text = req.body.text;
        db.run(sql.update, [bid,text], function (err,data){
            if(err == null) res.json({message:"200"})
            else res.json({message:"500", errno:err.errno})
        })
    }catch (e){
        res.json({message:"500"})
    }
})

router.post('/drop', function (req,res){
    try {
        const bid = req.body.bid;
        db.run(sql.drop,[bid],function (err,data){
            if(err == null) res.json({message:"200"})
            else res.json({message:"500", errno:err.errno})
        })
    }catch (e){
        res.json({message:"500"})
    }
})




module.exports = router;