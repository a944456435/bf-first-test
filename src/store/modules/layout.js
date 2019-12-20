export default {
  namespaced: "true",
  state: {
    //导航菜单
    navigations: [
      {
        index: "/home",
        icon: "el-icon-menu",
        title: "首页大屏"
      },
      {
        index: "/category",
        icon: "el-icon-s-order",
        title: "栏目管理"
      },
      {
        index: "/product",
        icon: "el-icon-s-shop",
        title: "产品管理"
      },
      {
        index: "/customer",
        icon: "el-icon-s-custom",
        title: "顾客管理"
      },
      {
        index: "/review",
        icon: "el-icon-message-solid",
        title: "审核大厅"
      }
    ],
    //tab选项卡信息
    showTabs: [
      {
        title: "首页大屏",
        name: "/home",
        content: "首页大屏"
      }
    ]
  },
  getters: {},
  mutations: {
    //添加选项卡
    refreshAddTab(state, data) {
      state.showTabs.push({
        title: data.title,
        name: data.index,
        content: data.content
      });
    },
    //移除选项卡
    refreshRemoveTab(state, removeTarget) {
      state.showTabs = state.showTabs.filter(tab => tab.name !== removeTarget);
    }
  },
  actions: {}
};
