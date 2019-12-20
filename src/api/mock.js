let express = require("express"); //引入express
let Mock = require("mockjs"); //引入mock

let app = express(); //实例化express

app.use("/category/find", function(req, res) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "text/plain;charset=utf-8");
  //   var arr = [
  //     { id: 1, name: "李白", state: "拥有" },
  //     { id: 2, name: "鲁班七号", state: "拥有" },
  //     { id: 3, name: "娜可露露", state: "拥有" },
  //     { id: 4, name: "诸葛亮", state: "未拥有" },
  //     { id: 5, name: "武则天", state: "未拥有" },
  //     { id: 6, name: "宫本武藏", state: "试玩" }
  //   ];
  //   //查找

  //   var data = Mock.mock("get", function() {
  //     var newArr = {
  //       data: arr,
  //       status: 200,
  //       message: "查找成功！"
  //     };
  //     return newArr;
  //   });
  //   res.send(data);

  //   res.send(JSON.stringify(data1), arr);
  //删除
  //   Mock.mock("http://localhost:8091/category/deletedById", "delete", function(
  //     options
  //   ) {
  //     var id = parseInt(options.body.split("=")[1]); //获取删除的id
  //     var index;
  //     for (var i in arr) {
  //       if (arr[i].id === id) {
  //         //在数组arr里找到这个id
  //         index = i;
  //         break;
  //       }
  //     }
  //     arr.splice(index, 1); //把这个id对应的对象从数组里删除
  //     const newArr = {
  //       data: arr,
  //       status: 200,
  //       message: "删除成功！"
  //     };
  //     return newArr; //返回这个数组,也就是返回处理后的假数据
  //     res.send(JSON.stringify(newArr));
  //   });

  var data = Mock.mock({
    status: 200,
    "dataSource|1-15": [
      {
        "id|+1": 1,
        "name|1": [
          "李白",
          "鲁班七号",
          "诸葛亮",
          "娜可露露",
          "宫本武藏",
          "武则天",
          "猪八戒",
          "瑶",
          "耀"
        ],
        "state|1": ["未拥有", "试玩", "拥有"]
      }
    ]
  });

  res.send(JSON.stringify(data));
  res.end();
});

app.listen("8090", () => {
  // window.console.log("监听端口 8080");
});
