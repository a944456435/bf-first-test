<template>
  <div id="pie"></div>
</template>
<script>
// 引入 ECharts 主模块
var echarts = require("echarts/lib/echarts");
// 引入柱状图和饼图
require("echarts/lib/chart/bar");
require("echarts/lib/chart/pie");
// 引入提示框和标题组件
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");

export default {
  props: {
    pieTitle: {
      type: String,
      default: "数据统计"
    },
    pieData: {
      type: Array,
      required: true
    }
  },
  methods: {},
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("pie"));
    /*绘制柱状图表
    myChart.setOption({
      title: {
        text: "ECharts 入门示例"
      },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [
        {
          name: "销量",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    });
    */

    //绘制饼图
    myChart.setOption({
      title: {
        text: this.$props.pieTitle,
        subtext: "虚构数据",
        left: "center"
      },
      series: [
        {
          name: "",
          type: "pie",
          radius: "55%",
          data: this.$props.pieData
        }
      ]
    });
  }
};
</script>