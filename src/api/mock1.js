let arr = [
  { id: 1, name: "李白", state: "拥有" },
  { id: 2, name: "鲁班七号", state: "拥有" },
  { id: 3, name: "娜可露露", state: "拥有" },
  { id: 4, name: "诸葛亮", state: "未拥有" },
  { id: 5, name: "武则天", state: "未拥有" },
  { id: 6, name: "宫本武藏", state: "试玩" }
];

export default {
  deletedById: options => {
    var id = parseInt(options.body.split("=")[1]); //获取删除的id
    var index;
    for (var i in arr) {
      if (arr[i].id === id) {
        //在数组arr里找到这个id
        index = i;
        break;
      }
    }
    arr.splice(index, 1); //把这个id对应的对象从数组里删除
    return arr; //返回这个数组,也就是返回处理后的假数据
  }
};
