<template>
  <div id="category">
    栏目管理
    <!-- 展示数据表格 -->
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="日期" width="120" fixed>
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
      <el-table-column label="操作" :width="120">
        <template #default="scope">
          <a class="el-icon-edit-outline" @click.prevent="editHandler(scope.row)" /> &emsp;&emsp;&emsp;
          <a
            class="el-icon-delete"
            @click.prevent="deletedHandler(scope.row.id)"
          />
        </template>
      </el-table-column>
    </el-table>
    <!-- 更新数据表格 -->
    <el-dialog title="收货地址" :visible="dialogFormVisible" style="z-index:999">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" @click="closeHandler"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeHandler">取 消</el-button>
        <el-button type="primary" @click="submitHandler">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      form: {},
      multipleSelection: []
    };
  },
  computed: {
    ...mapState("category", [
      "tableData",
      "dialogFormVisible",
      "formLabelWidth"
    ])
  },
  methods: {
    ...mapMutations("category", ["openOrCloseDialog"]),

    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    //修改
    editHandler() {
      this.openOrCloseDialog();
    },
    //通过id删除
    deletedHandler() {},
    //关闭模态框
    closeHandler() {
      this.openOrCloseDialog();
    },
    //提交
    submitHandler() {}
  }
};
</script>
