/**
 * Created by Administrator on 2016/12/23.
 */

function* gen(x){
    let y = yield x + 2;
    return  new Error('errrrrrr');
}
let a =gen(1);
console.log(a.next());
console.log(a.next());
function co(gen) {
    if(!gen.next().done){
        console
    }
}


var  params ={ appid: [ 'wx0bbda85889a4a06f' ],
   bank_type: [ 'CFT' ],
   cash_fee: [ '1' ],
   fee_type: [ 'CNY' ],
   is_subscribe: [ 'Y' ],
   mch_id: [ '1400842302' ],
   nonce_str: [ '5b0sKyPUPRlbIDqErCMZnujkIhrG5aiv' ],
   openid: [ 'oeCfZvhamvU--zsMCWU9FGnxqy48' ],
   out_trade_no: [ '1482482711192b5edc19538997130906' ],
   result_code: [ 'SUCCESS' ],
   return_code: [ 'SUCCESS' ],
   sign: [ 'D7A1C75F95A7029528AE7886B29C87C9' ],
   time_end: [ '20161223164515' ],
   total_fee: [ '1' ],
   trade_type: [ 'JSAPI' ],
    transaction_id: [ '4009872001201612233718690240' ] };
const body = {};
const arr = ['openId','cash_fee', 'fee_type', 'total_fee', 'trade_type', 'transaction_id', 'result_code', 'return_code'];
for (const index in params) {
    // if (params.hasOwnProperty(index)) {
    console.log('index',index);
    if (arr.includes(index)) {
        body[index] = params[index][0];
    }
    // }
}
console.log(body)