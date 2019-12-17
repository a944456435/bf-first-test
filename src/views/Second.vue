<template>
  <div class="about">
    <h1>This is an /home/second page</h1>
    <my-pie :pieData="pieData" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      pieData: [
        { value: 235, name: "娱乐频道" },
        { value: 274, name: "游戏直播" },
        { value: 310, name: "金融行业" },
        { value: 335, name: "法律事务" }
      ]
    };
  }
};
</script>

