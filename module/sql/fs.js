function upload(){
    return "INSERT INTO god_life.photo (dir, rolling) VALUES ($0, $1)"
}

function list(){
    return "select dir from photo where rolling=$0"
}

function create_roll(){
    return "select create_roll() as rid"
}

module.exports.upload = upload();
module.exports.list = list();
module.exports.create_roll = create_roll();