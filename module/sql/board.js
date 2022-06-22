
function select(){
    return "select * from user where id=$0 and password=$1"
}

function create(){
    return "INSERT INTO god_life.user (id, password, gender, name) VALUES ($0, $1, $2, $3)"
}

function update(){
    return "select count(*) from user where id=$0"
}

function drop(){
    return "UPDATE god_life.user SET gender=$1 WHERE id=$0"
}

function withdrawal(){
    return "DELETE FROM god_life.user WHERE id=$0"
}




module.exports.select = select();
module.exports.create = create();
module.exports.update = update();
module.exports.drop = drop();
module.exports.withdrawal= withdrawal();