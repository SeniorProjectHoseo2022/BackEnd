const express = require('express')
const router = express.Router()
const multer = require('multer');
const fs = require('fs')
const db = require('../module/database/db_control');
const upload = multer({ dest: 'files/' });
const sql = require('../module/sql/fs');

function GetFilePath(dir, target) {
    let stream;
    let path = require('path');
    const filePath = path.join(__dirname,'..', dir, target);
    const fileExist = fs.existsSync(filePath)
    if (fileExist){
        stream = fs.createReadStream(filePath);
    }
    return stream;
}

router.post('/download', function(req,res){
    try {
        const dir = req.body.dir
        const stream = GetFilePath('files', dir);
        if (stream){
            res.writeHead(200, {
                'Content-Type': 'application/octet-stream',
                'Content-Disposition': 'attachment; filename=img.jpg'
            });
            stream.pipe(res);
        }
    }catch (e) { res.render('error')}
});

router.get('/', function(req, res, next) {
    res.render('fs', { title: 'Express' });
});

router.post('/upload', upload.single('file'), function (req, res){
    const fn = req.file.filename;
    const rid = req.body.rid;
    db.run(sql.upload, [fn, rid],function (err, data){
        res.render('confirmation', { file:req.file, files:null });
    });
})

router.post('/list', function(req, res, next) {
    const rid = req.body.rid;
    db.run(sql.list,[rid],function (err,data){
        res.json({message:"200",data:data})
    });
});

router.post('/create_roll', function (req, res){
    db.run(sql.create_roll,[],function (err,data){
        res.json({message:"200",data:data})
    });
})
module.exports = router;
