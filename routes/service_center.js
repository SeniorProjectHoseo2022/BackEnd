const express = require('express')
const router = express.Router()
const sql = require('../module/sql/service_center')
const db = require('../module/database/db_control')

router.get('/', function(req, res, next) {
    res.render('service_center', { title: 'Express' });
});



router.post('/create', function (req,res){
    try {
        const category=req.body.category;
        const title=req.body.title;
        const text=req.body.text;
        const uid=req.body.uid;


        db.run(sql.create,[category,title,text,uid],function (err,data){
            if(err == null) res.json({message:"200"})
            else res.json({message:"500", errno:err.errno})
        });
    }catch (e){
        res.json({message:"500"})
    }
})





module.exports = router;