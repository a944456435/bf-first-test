<template>
  <div class="about">
    <h1>This is an /home/third page</h1>
    <div class="block">
      <span class="demonstration">默认{{value1}}</span>
      <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :unlink-panels="true"
        format="yyyy 年 MM 月 dd 日"
        value-format="timestamp"
      ></el-date-picker>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: ""
    };
  }
};
</script>