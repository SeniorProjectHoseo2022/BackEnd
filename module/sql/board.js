function show_distance(){
    return "select * from (select * from get_distance having distance <$1) as a where uid1=$0 or uid2=$2"
}
function show_agedistance(){
    return "select * from (select * from age_distance having distance <$1) as a where uid1=$0 or uid2=$2"
}

function show_hotlist(){
    return "select * from get_hot_list"
}

function select(){
    return "select * from god_life.board ORDER BY writed_time DESC"
}

function create(){
    return "INSERT INTO god_life.board (category, rolling, text, view,group_id, writed_time, uid) VALUES ($0, $1, $2, $3, $4, now(), $5)"
}

function update(){
    return "UPDATE god_life.board SET text=$1  WHERE bid=$0"
}

function drop(){
    return "DELETE FROM god_life.board WHERE bid=$0"
}






module.exports.show_distance = show_distance();
module.exports.show_agedistance = show_agedistance();
module.exports.show_hotlist = show_hotlist();
module.exports.select = select();
module.exports.create = create();
module.exports.update = update();
module.exports.drop = drop();

