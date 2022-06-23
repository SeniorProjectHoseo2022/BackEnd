const express = require('express')
const router = express.Router()
const sql = require('../module/sql/group.js')
const db = require('../module/database/db_control')



router.get('/', function(req, res, next) {
    res.render('group', { title: 'Express' });
});


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

router.post('/join_group', function (req,res){
    try {
        const group_id=req.body.group_id;
        const uid=req.body.uid;
        db.run(sql.join_group,[group_id,uid],function (err,data){
            if(err==null)  res.json({message:"200"});
            else res.json({message:"200", data:"404"})
        });
    }catch (e){
        res.json({message:"500"})
    }
})


module.exports = router;