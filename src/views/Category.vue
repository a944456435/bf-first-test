<template>
  <div id="category">
    <my-pageHeader :title="'栏目管理'"></my-pageHeader>
    <el-button type="primary" size="mini" round @click="addHander">添加</el-button>
    <!-- 展示数据表格 -->
    <!-- <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="id" label="编号" width="55" fixed></el-table-column>
      <el-table-column prop="name" label="英雄"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column prop="occupation" label="定位"></el-table-column>
      <el-table-column prop="state" label="状态" show-overflow-tooltip></el-table-column>
      <el-table-column label="操作" :width="120">
        <template #default="scope">
          <a class="el-icon-edit-outline" @click.prevent="editHandler(scope.row)" />
          &emsp;&emsp;&emsp;
          <a
            class="el-icon-delete"
            @click.prevent="deletedHandler(scope.row.id)"
          />
        </template>
      </el-table-column>
    </el-table>-->
    勾选：{{multipleSelection}}
    <my-table :table="table" ref="Category_table" @foo="bar">
      <template v-slot:table="record">
        <a class="el-icon-delete" @click.prevent="editHandler(record)" /> &nbsp;
        <a class="el-icon-edit-outline" @click.prevent="deletedHandler(record.row)" /> &nbsp;
      </template>
    </my-table>

    <!-- 更新数据表格 -->
    <el-dialog title="收货地址" :visible="dialogFormVisible" :modal="false" @close="closeHandler">
      <el-form ref="customerForm" :model="form" :rules="rules">
        <el-form-item label="姓名" :label-width="formLabelWidth" prop="realname">
          <el-input v-model="form.realname" autocomplete="off" />
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth" prop="telephone">
          <el-input v-model="form.telephone" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码" :label-width="formLabelWidth" prop="password" show-password>
          <el-input v-model="form.password" autocomplete="off" show-password />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeHandler">取 消</el-button>
        <el-button type="primary" @click="submitHandler(form)">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 分页 -->
    <div class="category-pagination">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000"
      >></el-pagination>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      form: {},
      multipleSelection: [],
      rules: {
        realname: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 4, message: "长度在 2 到 4 个字符", trigger: "blur" }
        ],
        telephone: [
          { required: true, message: "请输入手机号", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 9, message: "长度在 6 到 9 个字符", trigger: "blur" }
        ]
      },
      currentPage: 5
    };
  },
  computed: {
    ...mapState("category", ["table", "dialogFormVisible", "formLabelWidth"])
  },
  methods: {
    ...mapMutations("category", ["openDialog", "closeDialog"]),
    ...mapActions("category", ["getInfo", "deletedById"]),
    bar() {
      this.multipleSelection = this.$refs.Category_table.checkList;
    },
    handleSizeChange(val) {
      window.console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      window.console.log(`当前页: ${val}`);
    },
    //添加
    addHander() {
      this.openDialog();
    },
    //修改
    editHandler(col) {
      this.openDialog();
      window.console.log(col);
    },
    //通过id删除
    deletedHandler(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // 删除操作
          window.alert(id);
          this.deletedById(id).then(response => {
            this.$message({
              type: "success",
              message: response.data.message
            });
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //关闭模态框
    closeHandler() {
      this.closeDialog();
    },
    //提交
    submitHandler() {}
  },
  created() {
    this.getInfo();
  },
  mounted() {
    this.multipleSelection = this.$refs.Category_table.checkList;
  },
  updated() {}
};
</script>
<style>
.category-pagination {
  margin-top: 50px;
  margin-left: 50px;
}
</style>
