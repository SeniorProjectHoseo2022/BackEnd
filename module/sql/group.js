function create_group() {
    return "select create_group($0,$1,$2)"
}

function join_group(){
    return "call join_group($0,$1)"
}

function select(){
    return "SELECT * FROM grp WHERE category=$0"
}

module.exports.create_group=create_group();
module.exports.join_group=join_group();
module.exports.select=select();