import axios from "axios";

export default {
  namespaced: "true",
  state: {
    table: {
      tableData: [],
      header: [
        {
          prop: "id",
          label: "编号",
          width: "50"
        },
        {
          prop: "name",
          label: "英雄",
          width: "180"
        },
        {
          prop: "price",
          label: "价格",
          width: "180"
        },
        {
          prop: "occupation",
          label: "定位",
          width: "180"
        },
        {
          prop: "state",
          label: "状态",
          width: "180"
        },
        {
          prop: "option",
          label: "操作",
          width: "80"
        }
      ]
    },
    dialogFormVisible: false,
    formLabelWidth: "120px"
  },
  getters: {},
  mutations: {
    openDialog(state) {
      state.dialogFormVisible = true;
    },
    closeDialog(state) {
      state.dialogFormVisible = false;
    },
    refreshTableData(state, data) {
      state.table.tableData = data;
    }
  },
  actions: {
    async getInfo({ commit }) {
      // axios.get("http://localhost:8090/category/find").then(response => {
      //   window.console.log(response);
      //   commit("refreshTableData", response.data.dataSource);
      // });
      const response = await axios.get(
        "http://yapi.imeete.com/mock/740/category/find"
      );

      window.console.log(response);
      commit("refreshTableData", response.data);
    },
    async deletedById({ commit }, id) {
      window.console.log(id);

      const response = await axios.get(
        "http://yapi.imeete.com/mock/740/category/deletedById",
        { id }
      );
      window.console.log(response);

      commit("refreshTableData", response.data.data);
      return response;
    }
  }
};
