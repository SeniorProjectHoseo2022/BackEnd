
function login(){
    return "select * from user where id=$0 and password=$1"
}

function sign(){
    return "INSERT INTO god_life.user (id, password, gender, name,position,x,y) VALUES ($0, $1, $2, $3,$4,$5,$6)"
}

function id_check(){
    return "select count(*) from user where id=$0"
}

function info_check(){
    return "select * from user where uid=$0"
}

function change(){
    return "UPDATE god_life.user SET id=$1 , password=$2,  gender=$3, name=$4, position=$5, x=$6, y=$7 WHERE uid=$0"
}

function withdrawal(){
    return "DELETE FROM god_life.user WHERE id=$0"
}




module.exports.login = login();
module.exports.sign = sign();
module.exports.id_check = id_check();
module.exports.info_check = info_check();
module.exports.change= change();
module.exports.withdrawal= withdrawal();