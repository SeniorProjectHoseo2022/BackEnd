
function press(){
    return "INSERT INTO god_life.like_log (bid, uid, time) VALUES ($0, $1, now())"
}

function select(){
    return "select * from like_log WHERE bid=$0"
}




module.exports.press = press();
module.exports.select = select();


