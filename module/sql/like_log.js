
function press(){
    return "INSERT INTO god_life.comment (bid, uid, time) VALUES ($0, $1, $2)"
}

function cancel(){
    return "SELECT * FROM god_life.comment WHERE board_id=$0"
}



module.exports.press = press();
module.exports.cancel = cancel();
