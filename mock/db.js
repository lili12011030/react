// 用mockjs模拟生成数据
var Mock = require('mockjs');

let mr = Mock.Random;//提取mock的随机对象

//随机id和图片
let mapData = (n) => {
  var data = [];

  for (var i = 1; i <= n; i++) {

    data.push({
      id: i,
      title: "@ctitle(8,12)",
      des: "@csentence(10, 20)",
      time: "@integer(1553425967486,1553475967486)",
      detail:{
        auth:"@cname()",
        content:"@cparagraph(10,40)",
        auth_icon:mr.image('50x50', mr.color(), mr.cword(1))
      },
      img: mr.image('750x501', mr.color(), mr.cword(4,10)),
    })
  }
  return data
};

//json-server 要对象||函数(返回mock后的数据)
module.exports = {
  ...Mock.mock({
    'home': mapData(15),//解决 auth_icon 不随机
    'follow': mapData(15),
    'column': mapData(11),
    
    'banner|2': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        title: "@ctitle(4,8)",//标题型中文4到8个字
        sub_title: "@ctitle(6,12)",
        banner: mr.image('750x501', mr.color(), mr.cword(4,10)),//banner不变
        time: "@integer(1565533039824,1565833039824)",
        detail:{
          icon:mr.image('20x20', mr.color(), mr.cword(1,2)),//20X20尺寸
          auth:"@cname()",//百家姓
          content:"@cparagraph(10,40)"//正文
        }
      }
    ],
    'bulala|10': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        title: "@ctitle(14,18)",//标题型中文4到8个字
      }
    ],
    'hot|8': [
      {
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1,
        text: "@ctitle(4,5)",//标题型中文4到8个字
        
        sub_title: "@ctitle(6,12)",
        icon: mr.image('750x501', mr.color(), mr.cword(4,10)),//banner不变
        time: "@integer(1565533039824,1565833039824)",
        detail:{
          icon:mr.image('20x20', mr.color(), mr.cword(1,2)),//20X20尺寸
          auth:"@cname()",//百家姓
          content:"@cparagraph(10,40)"//正文
        }
      }
    ],
    "user|1":[
      {
        "id|+1": 1,
        name:"@ctitle(4,5)",
        sub_title:"@ctitle(6,12)",
        icon: mr.image('750x501', mr.color(), mr.cword(4,10)),
        maney:"@integer(200,500)",
        youhui:"@integer(2,5)",
        jifen:"@integer(100,500)"
      }
    ]
  })
};
