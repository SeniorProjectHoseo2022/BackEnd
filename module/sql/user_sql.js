
function login(){
    return "select * from user where id=$0 and password=$1"
}

function sign(){
    return "INSERT INTO god_life.user (id, password, gender, name,position,x,y) VALUES ($0, $1, $2, $3,$4,$5,$6)"
}

function id_check(){
    return "select count(*) from user where id=$0"
}

function change(){
    return "UPDATE god_life.user SET gender=$1 WHERE id=$0"
}

function withdrawal(){
    return "DELETE FROM god_life.user WHERE id=$0"
}




module.exports.login = login();
module.exports.sign = sign();
module.exports.id_check = id_check();
module.exports.change= change();
module.exports.withdrawal= withdrawal();