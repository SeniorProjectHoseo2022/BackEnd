const express = require('express')
const router = express.Router()
const sql = require('../module/sql/chat.js')
const db = require('../module/database/db_control')


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



module.exports = router;