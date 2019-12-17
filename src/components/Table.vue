<template>
  <div>
    <el-table :data="table.tableData" style="width: 100%">
      <div v-for="item in table.header" :key="item.prop">
        <!-- 勾选栏 -->
        <el-table-column type="selection" :width="item.width" v-if="item.prop == 'selection'"></el-table-column>
        <!-- 普通栏 -->
        <el-table-column :prop="item.prop" :label="item.label" :width="item.width" align="center"></el-table-column>
      </div>
      <!-- 操作栏 -->
      <el-table-column v-if="table.option" label="操作" :width="table.option.width" align="center">
        <slot name="table"></slot>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    // //是否可选
    // selection: { default: "selection" },
    // //是否居中
    // // isCenter: { default: false, type: Boolean },
    // //表单数据
    // tableData: { require: true, type: Array },
    // //表头配置
    // tableCol: { type: Array }
    table: { type: Object }
  },
  methods: {
    handleSelectionChange() {}
  }
};
</script>