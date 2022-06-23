const express = require('express')
const router = express.Router()
const sql = require('../module/sql/like_log')
const db = require('../module/database/db_control')

router.get('/', function(req, res, next) {
    res.render('like_log', { title: 'Express' });
});



router.post('/press', function (req,res){
    try {
        const bid=req.body.bid;
        const uid=req.body.uid;
        db.run(sql.press,[bid,uid],function (err,data){
            if(err == null) res.json({message:"200"})
            else res.json({message:"500", errno:err.errno})
        });
    }catch (e){
        res.json({message:"500"})
    }
})

router.post('/select', function (req,res){
    try {
        const bid=req.body.bid;
        db.run(sql.select,[bid],function (err,data){
            if(data[0]!=undefined) res.json({data})
            else res.json({message:"500", errno:err.errno})
        });
    }catch (e){
        res.json({message:"500"})
    }
})





module.exports = router;