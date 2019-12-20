<template>
  <el-table
    ref="multipleTable"
    :data="table.tableData"
    style="width: 100%"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="selection" width="55"></el-table-column>
    <el-table-column
      v-for="(item, index) in table.header"
      :key="index"
      :prop="item.prop"
      :width="item.width"
      :label="item.label"
      :type="item.prop === 'selection' ? 'selection' : undefined"
    >
      <template slot-scope="props">
        <slot v-if="item.prop == 'option'" name="table" v-bind:record="props.row"></slot>
        <span v-else-if="item.prop == 'selection'">
          <el-checkbox-group v-model="checkList">
            <el-checkbox :value="props.row.id" :label="props.row.id"></el-checkbox>
          </el-checkbox-group>
        </span>
        <span v-else>{{ props.row[item.prop] }}</span>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  data() {
    return {
      checkList: [1, 2]
    };
  },
  props: {
    table: { type: Object }
  },
  methods: {
    // handleSelection(table) {
    //   var len = table.tableData.length;
    //   if (this.checkList.length !== len) {
    //     this.checkList = table.tableData.map(item => item.id);
    //   } else {
    //     this.checkList = [];
    //   }
    // }
    handleSelectionChange(val) {
      this.checkList = val.map(item => item.id);
    }
  }
};
</script>
