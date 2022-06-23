function show_distance(){
    return "select * from get_distance having distance"
}
function show_agedistance(){
    return "select * from age_distance having distance"
}

function show_hotlist(){
    return "select * from get_hot_list"
}

function select(){
    return "select * from god_life.board"
}

function create(){
    return "INSERT INTO god_life.board (category, rolling, text, view,group_id, writed_time, uid) VALUES ($0, $1, $2, $3, $4, $5, $6)"
}

function update(){
    return "UPDATE god_life.board SET text=$1  WHERE bid=$0"
}

function drop(){
    return "DELETE FROM god_life.board WHERE bid=$0"
}

function like(){
    return "INSERT INTO god_life.like_log (bid,uid) VALUES($0,$1)"
}




module.exports.show_distance = show_distance();
module.exports.show_agedistance = show_agedistance();
module.exports.show_hotlist = show_hotlist();
module.exports.select = select();
module.exports.create = create();
module.exports.update = update();
module.exports.drop = drop();
module.exports.like=like();
