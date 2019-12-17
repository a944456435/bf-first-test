<template>
  <div class="about page-component__scroll">
    <h1>This is an /home/first page</h1>
    <my-pie :pieData="pieData" :pieTitle="pieTitle" ref="mypie" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      pieTitle: "访问数据统计",
      pieData: [
        { value: 235, name: "视频广告" },
        { value: 274, name: "联盟广告" },
        { value: 310, name: "邮件营销" },
        { value: 335, name: "直接访问" },
        { value: 400, name: "搜索引擎" }
      ]
    };
  },
  mounted() {
    window.console.log(this.$refs.mypie, "--refs-");
  }
};
</script>


