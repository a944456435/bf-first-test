<template>
  <div id="home">
    <!-- 顶部图标 -->
    <el-row :gutter="20">
      <el-col :span="6">
        <el-row class="grid-content bg-purple-light">
          <el-col :span="10">
            <div class="grid-left-icon">
              <img src="@/assets/1.png" />
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-right">
              <div class="number">229</div>
              <div class="note">新增用户</div>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6">
        <el-row class="grid-content bg-purple-light">
          <el-col :span="10">
            <div class="grid-left-icon">
              <img src="@/assets/2.png" />
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-right">
              <div class="number">331</div>
              <div class="note">访问用户</div>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6">
        <el-row class="grid-content bg-purple-light">
          <el-col :span="10">
            <div class="grid-left-icon">
              <img src="@/assets/3.png" />
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-right">
              <div class="number">103</div>
              <div class="note">分享统计</div>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="6">
        <el-row class="grid-content bg-purple-light">
          <el-col :span="10">
            <div class="grid-left-icon">
              <img src="@/assets/4.png" />
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-right">
              <div class="number">56</div>
              <div class="note">新增问答</div>
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <!-- /顶部图标 -->

    <!-- 第一行图表 -->
    <el-row :gutter="80">
      <!-- 饼图 -->
      <el-col :span="10">
        <div id="pie"></div>
      </el-col>
      <!-- 柱图 -->
      <el-col :span="14">
        <div id="bar"></div>
      </el-col>
    </el-row>
    <!-- /第一行图表 -->

    <!-- 第二行图表 -->
    <el-row>
      <!-- 折线图 -->
      <el-col :span="24">
        <div id="polyline"></div>
      </el-col>
    </el-row>
    <!-- /第二行图表 -->
  </div>
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
  data() {
    return {};
  },
  methods: {},
  mounted() {
    var myPie = echarts.init(document.getElementById("pie"));
    //绘制饼图
    myPie.setOption({
      title: {
        text: "访问人员数据",
        subtext: "虚构数据",
        left: "center"
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          radius: "55%",
          data: [
            { value: 235, name: "视频广告" },
            { value: 274, name: "联盟广告" },
            { value: 310, name: "邮件营销" },
            { value: 335, name: "直接访问" },
            { value: 400, name: "搜索引擎" }
          ]
        }
      ]
    });

    var myBar = echarts.init(document.getElementById("bar"));
    myBar.setOption({
      title: {
        text: "ECharts 入门示例"
      },
      tooltip: {},
      legend: {
        data: ["销量"]
      },
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

    var myLine = echarts.init(document.getElementById("polyline"));
    myLine.setOption({
      title: {
        text: "折线图堆叠"
      },
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: ["邮件营销", "联盟广告", "视频广告", "直接访问", "搜索引擎"]
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "邮件营销",
          type: "line",
          stack: "总量",
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: "联盟广告",
          type: "line",
          stack: "总量",
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: "视频广告",
          type: "line",
          stack: "总量",
          data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
          name: "直接访问",
          type: "line",
          stack: "总量",
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: "搜索引擎",
          type: "line",
          stack: "总量",
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    });
  }
};
</script>
<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 14px;
}
.bg-purple-light {
  /* background: #e5e9f2; */
  background: #fff;
}
.grid-content {
  border-radius: 4px;
  /* min-height: 75px; */
  height: 75px;
  overflow: hidden;
}
.grid-right {
  height: 100%;
  padding-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.number {
  font-size: 28px;
  font-weight: bold;
}
.number,
.note {
  flex: 1;
}
#pie {
  /* width: 600px; */
  height: 300px;
  width: 100%;
  /* height: 100%; */
  background-color: #ffffff;
}
#bar {
  height: 300px;
  width: 100%;
  background-color: #ffffff;
}
#polyline {
  width: 100%;
  height: 500px;
  background-color: #ffffff;
}
/* .row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
} */
</style>