const express = require('express')
const router = express.Router()
const sql = require('../module/sql/like_log')
const db = require('../module/database/db_control')

router.get('/', function(req, res, next) {
    res.render('like_log', { title: 'Express' });
});



router.post('/press', function (req,res){
    try {
        const bid=req.body.board_bid;
        const uid=req.body.uid;
        const time=req.body.time;
        db.run(sql.press,[bid,uid,time],function (err,data){
            if(err == null) res.json({message:"200"})
            else res.json({message:"500", errno:err.errno})
        });
    }catch (e){
        res.json({message:"500"})
    }
})

router.post('/cancel', function (req,res){
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





module.exports = router;