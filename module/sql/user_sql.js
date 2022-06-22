
function login(){
    return "select * from user where id=$0 and password=$1"
}

module.exports.login = login();
