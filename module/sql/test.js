
function test_select(){
    return "select * from user where uid=$0"
}
module.exports.test_select = test_select();
