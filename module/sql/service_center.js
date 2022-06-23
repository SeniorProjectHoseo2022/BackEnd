
function create(){
    return "INSERT INTO god_life.service_center (category, title, text, uid) VALUES($0, $1, $2, $3)"
}




module.exports.create = create();
