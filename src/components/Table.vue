<template>
  <el-table
    ref="multipleTable"
    :data="table.tableData"
    style="width: 100%"
    @selection-change="handleSelectionChange"
  >
    <el-table-column
      v-for="(item, index) in table.header"
      :key="index"
      :prop="item.prop"
      :width="item.width?item.width:''"
      :label="item.label"
      :type="item.prop === 'selection' ? 'selection' : undefined"
    >
      <template slot-scope="props">
        <slot v-if="item.prop == 'option'" name="table" v-bind:record="props.row"></slot>
        <span v-else-if="item.prop == 'selection'">
          <el-checkbox-group v-model="checkList">
            <el-checkbox :label="props.row.id"></el-checkbox>
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
      checkList: []
    };
  },
  watch: {
    checkList: function() {
      this.$emit("foo");
    }
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
<style>
.my-checkbox-input {
  width: 14px;
  height: 14px;
  border: 1px solid #dcdfe6;
  background-color: #ffffff;
  z-index: 1;
  display: inline-block;
  visibility: visible;
  border-radius: 2px;
  box-sizing: border-box;
}

input[type="checkbox"] {
  cursor: pointer;
  position: relative;
  width: 14px;
  height: 14px;
  font-size: 14px;
}

input[type="checkbox"]::after {
  position: absolute;
  top: 0;
  border: 1px solid #dcdfe6;
  background-color: white;
  color: #000;
  width: 14px;
  height: 14px;
  display: inline-block;
  visibility: visible;
  padding-left: 0px;
  text-align: center;
  content: " ";
  border-radius: 3px;
}

input[type="checkbox"]:checked::after {
  content: "✓";
  font-size: 12px;
  font-weight: bold;
  background-color: teal;
  color: white;
}
</style>
