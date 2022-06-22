function dm(){
    return "select dm($0,$1)"
}

function create_group() {
   return "select create_group($0,$1,$2)"
}



module.exports.dm = dm();
module.exports.create_group=create_group();