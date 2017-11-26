let Mock = require('mockjs');
let { Random } = Mock;

module.exports = function() {
  var data = { 
      list: []
  };
  
  var images = [1,2,3].map(x=>Random.image('200x100', Random.color(), Random.word(2,6)));
  Random.extend({product:function(date){
    return this.pick(['活期T+1','活期T+0'])
  }})
  Random.extend({productType:function(date){
    return this.pick(['活期','定期'])
  }})
  Random.extend({orderType:function(date){
    return this.pick(['申购','赎回','活转定','续存'])
  }})
  for (var i = 1; i < 55; i++) {
      
    var content = Random.cparagraph(0,10);

    data.list.push({
         id: i, 
         company: Random.cword(8,20),
         closer:Random.cname(2,3),
         orderId:Random.integer(12),
         product:Random.product(),
         productType: Random.productType(2,4),
         orderType:Random.orderType(),
         profit:Random.integer(0,1000),
         amount: Random.integer(10000,5000000),
         time: Random.date()
    })
  }
  var db = {
    company:{
      message:"success",
      code:0,
      data:data
    },
    order:{
      message:"success",
      code:0,
      data:data
    }
  }
  return db;
}