<template >
  <div class="pageHander">
    <el-page-header @back="goBack" :content="title"></el-page-header>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    title: { type: String }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>