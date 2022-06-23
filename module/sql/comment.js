
function create(){
    return "INSERT INTO god_life.comment (board_id, text, writed_time) VALUES ($0, $1, $2)"
}

function select(){
    return "SELECT * FROM god_life.comment WHERE board_id=$0"
}

function update(){
    return "UPDATE god_life.comment SET text=$1  WHERE board_id=$0"
}

function drop(){
    return "DELETE FROM god_life.comment WHERE cid=$0"
}

module.exports.create = create();
module.exports.select = select();
module.exports.update = update();
module.exports.drop = drop();