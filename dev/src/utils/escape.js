const pool = require('./maria.connection')
const escapeParams = (params) =>{
    let escaped = [];
    for(let param of params){
        let temp = pool.escape(param);
        escaped.push(temp);
    }
    return escaped.join(',');
}
module.exports = escapeParams;