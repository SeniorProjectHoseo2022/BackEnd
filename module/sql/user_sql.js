
function login(){
    return "select * from user where id=$0 and password=$1"
}

function sign(){
    return "INSERT INTO god_life.user (id, password, gender, name) VALUES ($0, $1, $2, $3)"
}

function id_check(){
    return "select count(*) from user where id=$0"
}

module.exports.login = login();
module.exports.sign = sign();
module.exports.id_check = id_check();
