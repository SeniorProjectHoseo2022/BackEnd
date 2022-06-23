const db = require("../module/database/db_control");
const sql = require("../module/sql/board");


router.post('/like', function (req,res){
    try {
        const bid = req.body.bid;
        const uid = req.body.uid;
        db.run(sql.like,[bid,uid],function (err,data){
            if(err == null) res.json({message:"200"})
            else res.json({message:"500", errno:err.errno})
        })
    }catch (e){
        res.json({message:"500"})
    }
})