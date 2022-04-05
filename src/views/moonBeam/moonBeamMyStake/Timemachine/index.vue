<template>
  <div class="tab-content">
    <div class="charts">
      <div class="line-chart">
        <div class="title">
          <span class="text"> My RoR Trend </span>
          <a-tooltip content="This is tooltip content">
            <img
              class="icon"
              src="@/assets/images/moonbeam/whiteInfo.png"
              alt=""
            />
          </a-tooltip>
        </div>
        <v-chart class="chart" :option="lineChartOption" />
      </div>
      <div class="bar-chart">
        <div class="title">
          <span class="text"> My Mostly-staking collators </span>
          <a-tooltip content="This is tooltip content">
            <img
              class="icon"
              src="@/assets/images/moonbeam/Group_47.png"
              alt=""
            />
          </a-tooltip>
        </div>
        <v-chart class="chart" :option="barChartOption" />
      </div>
    </div>
    <div class="table-title">
      <span class="title">My Stakting history</span>
      <div class="select-wrap">
        <a-select placeholder="Please select">
          <a-option>Beijing</a-option>
          <a-option>Shanghai</a-option>
          <a-option>Guangzhou</a-option>
        </a-select>
      </div>
    </div>
    <Table />
  </div>
</template>

<script>
import Table from "./Table";
export default {
  components: {
    Table,
  },
  data() {
    return {
      lineChartOption: {
        color: ["white"],
        textStyle: {
          fontFamily: "DM Sans",
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisLine: {
            lineStyle: {
              color: "white",
            },
          },
          axisTick: {
            lineStyle: {
              color: "rgba(255, 255, 255, 0.4)",
            },
          },
        },
        yAxis: {
          type: "value",
          axisLabel: {
            color: "white",
          },
          splitLine: {
            lineStyle: {
              type: "dotted",
            },
          },
        },
        grid: {
          left: 5,
          top: 30,
          right: 20,
          bottom: 10,
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "white",
            },
          },
        },
        series: [
          {
            type: "line",
            lineStyle: {
              color: "white",
              width: 3,
            },
            data: [120, 200, 150, 80, 70, 110, 130],
            smooth: true,
          },
        ],
      },
      barChartOption: {
        textStyle: {
          fontFamily: "DM Sans",
        },
        xAxis: {
          type: "value",
          axisLabel: {
            color: "#A3AED0",
          },
          splitLine: {
            lineStyle: {
              type: "dotted",
            },
          },
        },
        yAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: "#E0E5F2",
            },
          },
          axisLabel: {
            color: "#A3AED0",
          },
        },
        grid: {
          left: 5,
          top: 30,
          right: 20,
          bottom: 10,
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
        },
        series: [
          {
            itemStyle: {
              color: "#9374FF",
              borderRadius: 2,
            },
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
          },
          {
            itemStyle: {
              color: "#FF844B",
              borderRadius: 2,
            },
            data: [33, 66, 33, 88, 99, 44, 11],
            type: "bar",
          },
        ],
      },
    };
  },
};
</script>

<style lang="less" scoped>
.charts {
  display: flex;
  .line-chart {
    flex: 1;
    background: #b9a2ff;
    border-radius: 20px;
    margin-right: 10px;
    padding: 20px;
    .title {
      font-weight: 700;
      font-size: 18px;
      color: #ffffff;
      display: flex;
      align-items: center;
      .text {
        margin-right: 6px;
      }
    }
    .chart {
      height: 310px;
    }
  }
  .bar-chart {
    margin-left: 10px;
    flex: 1;
    background: #f4f7fe;
    border-radius: 20px;
    padding: 20px;
    .title {
      font-weight: 700;
      font-size: 18px;
      color: #2b3674;
      display: flex;
      align-items: center;
      .text {
        margin-right: 3px;
      }
    }
    .chart {
      height: 310px;
    }
  }
}
.table-title {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  .title {
    font-size: 24px;
    color: #000000;
  }
  .select-wrap {
    /deep/ .arco-select {
      width: 194px;
    }
  }
}
</style>