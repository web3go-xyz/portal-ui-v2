<template>
  <div class="table-wrap">
    <el-table :data="tableData">
      <el-table-column prop="date" label="Collator" fixed width="200">
        <template #default="scope">
          <div class="table-collector">
            <img src="@/assets/images/moonbeam/moonbeam.png" alt="" />
            <div class="right">
              <div class="top">jetblue-125</div>
              <div class="bottom">Safe</div>
            </div>
          </div>
        </template>
      </el-table-column>
      <template v-for="(v, i) in selectColumns" :key="i">
        <el-table-column :prop="v.prop" :label="v.name" :width="v.width" />
      </template>

      <el-table-column prop="Action" label="Action" width="90" fixed="right">
        <template #header>
          <div class="flex-center">
            <span class="text">Action</span>
            <a-popover
              v-model:popup-visible="popoverShow"
              trigger="click"
              position="br"
            >
              <img
                @click="clickPopover"
                class="table-option-icon"
                src="@/assets/images/moonbeam/Frame_67.png"
                alt=""
              />
              <template #content>
                <div class="table-option-content">
                  <div class="title">Select Incidators</div>
                  <div class="sort-list">
                    <a-checkbox-group v-model="checkboxList">
                      <draggable
                        tag="ul"
                        :list="draggableList"
                        class="list-group"
                        handle=".handle"
                        item-key="name"
                      >
                        <template #item="{ element, index }">
                          <li class="list-group-item">
                            <img
                              class="icon handle"
                              src="@/assets/images/moonbeam/Glyph_move.png"
                              alt=""
                            />
                            <a-checkbox :value="element.name">{{
                              element.name
                            }}</a-checkbox>
                          </li>
                        </template>
                      </draggable>
                    </a-checkbox-group>
                  </div>
                  <div class="btn-wrap">
                    <a-button type="outline" @click="comfirmSort"
                      >Confirm</a-button
                    >
                  </div>
                </div>
              </template>
            </a-popover>
          </div>
        </template>
        <template #default="scope">
          <span class="common-table-option" @click="openDrawer(scope.row)"
            >simulate</span
          >
        </template>
      </el-table-column>
    </el-table>
    <a-drawer
      :width="720"
      :closable="false"
      :footer="false"
      :visible="drawerVisible"
      @cancel="drawerVisible = false"
      unmountOnClose
    >
      <div class="drawer-content">
        <div class="drawer-title">
          <span class="title">Simulate</span>
          <img
            class="hover-item"
            @click="drawerVisible = false"
            src="@/assets/images/moonbeam/Vector1.png"
            alt=""
          />
        </div>
        <div class="drawer-main">
          <div class="info-wrap">
            <div class="collector">
              <img src="@/assets/images/moonbeam/moonbeam.png" alt="" />
              <div class="right">
                <div class="title">Collator</div>
                <div class="value">Jetblue-125</div>
              </div>
            </div>
            <div class="rank">
              <div class="title">Collator Rank</div>
              <div class="value">1790</div>
            </div>
            <div class="state">
              <div class="tag">Safe</div>
            </div>
          </div>
          <div class="head">
            <div class="icon"></div>
            <span>Stake</span>
          </div>
          <div class="input-wrap">
            <a-input-number
              hide-button
              class="input"
              v-model="inputValue"
              :min="0"
            />
          </div>
          <div class="slider-wrap">
            <a-slider class="slider" :marks="marks" />
          </div>
          <div class="head">
            <div class="icon"></div>
            <span>Reward next round </span>
          </div>
          <div class="range">
            <div class="left">
              <div class="top">
                <span class="num">0.0222222 </span>
                <span class="unit">GLMR</span>
              </div>
              <div class="bottom">Min Estimate Reward</div>
            </div>
            <div class="split">~</div>
            <div class="right">
              <div class="top">
                <span class="num">0.0222222 </span>
                <span class="unit">GLMR</span>
              </div>
              <div class="bottom">Max Estimate Reward</div>
            </div>
          </div>
          <div class="btn-wrap">
            <a-button class="btn" type="primary">Go to stake</a-button>
          </div>
        </div>
      </div>
    </a-drawer>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: {
    draggable,
  },
  data() {
    const draggableList = [
      { name: "Rank", prop: "state", width: "120" },
      { name: "SelfStake", prop: "state", width: "120" },
      { name: "Nominator Stake  ", prop: "state", width: "140" },
      { name: "Total Stake", prop: "state", width: "120" },
      { name: "MyRank", prop: "state" },
      // { name: "Current Blocks", prop: "state", width: "140" },
      // { name: "Self Stake", prop: "state", width: "120" },
      // { name: "Delegator Stake", prop: "state", width: "140" },
      // { name: "RPM", prop: "state", width: "120" },
      // { name: "Min RPM", prop: "state", width: "120" },
      // { name: "Max RPM", prop: "state", width: "120" },
      // { name: "RPM Volatility Score", prop: "state", width: "160" },
    ];
    return {
      marks: {
        0: "Rank 300",
        33: "Rank 270",
        66: "Rank 150",
        100: "Rank 1",
      },
      inputValue: 0,
      drawerVisible: false,
      popoverShow: false,
      currentRow: {},
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "Los Angeles",
          zip: "CA 90036",
        },
        {
          date: "2016-05-03",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "Los Angeles",
          zip: "CA 90036",
        },
        {
          date: "2016-05-03",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "Los Angeles",
          zip: "CA 90036",
        },
        {
          date: "2016-05-03",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "Los Angeles",
          zip: "CA 90036",
        },
        {
          date: "2016-05-03",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "Los Angeles",
          zip: "CA 90036",
        },
        {
          date: "2016-05-03",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "Los Angeles",
          zip: "CA 90036",
        },
        {
          date: "2016-05-03",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "Los Angeles",
          zip: "CA 90036",
        },
        {
          date: "2016-05-03",
          name: "Tom",
          state: "California",
          city: "Los Angeles",
          address: "Los Angeles",
          zip: "CA 90036",
        },
      ],
      draggableList,
      checkboxList: draggableList.map((v) => v.name),
      columns: JSON.parse(JSON.stringify(draggableList)),
      selectColumns: JSON.parse(JSON.stringify(draggableList)),
    };
  },
  methods: {
    openDrawer(row) {
      this.currentRow = row;
      this.drawerVisible = true;
    },

    getIndex(index) {
      if (index < 10) {
        return "0" + index;
      }
      return index;
    },
    clickPopover() {
      this.draggableList = JSON.parse(JSON.stringify(this.columns));
    },
    comfirmSort() {
      this.popoverShow = false;
      this.columns = JSON.parse(JSON.stringify(this.draggableList));
      this.selectColumns = this.columns.filter((v) => {
        return this.checkboxList.find((sv) => sv == v.name);
      });
    },
  },
};
</script>
<style lang="less" scoped>
.table-wrap {
  margin-top: 40px;
}
.flex-center {
  display: flex;
  align-items: center;
  .text {
    margin-top: 1px;
    margin-right: 4px;
  }
}
.table-collector {
  display: flex;
  align-items: center;
  .text {
    font-weight: 700;
    font-size: 16px;
    color: #b0bbd5;
    &.color1 {
      color: #ffa800;
    }
    &.color2 {
      color: #707eae;
    }
    &.color3 {
      color: #cf8080;
    }
  }
  img {
    margin-right: 8px;
    width: 32px;
    height: 32px;
  }
  .right {
    .top {
      font-weight: 700;
      font-size: 14px;
      color: #2b3674;
    }
    .bottom {
      font-size: 12px;
      color: #05cd99;
    }
  }
}
.table-option-content {
  .title {
    text-align: center;
    font-weight: 700;
    font-size: 16px;
    color: #000000;
  }
  .sort-list {
    margin-top: 15px;
    .list-group {
      .list-group-item {
        padding: 6px 10px;
        display: flex;
        align-items: center;
        &.sortable-chosen:not(.sortable-ghost) {
          background: #e9e3ff;
          border-radius: 10px;
        }
        .icon {
          margin-right: 12px;
          cursor: move;
        }
        /deep/ .arco-checkbox-label {
          font-size: 13px;
          color: #8f9bba;
        }
      }
    }
  }
  .btn-wrap {
    text-align: center;
    margin-top: 18px;
  }
}
.expand-content {
  padding: 12px 31px;
  background: #f4f7fe;
  border-radius: 10px;
  left: 0;
  right: 0;
  position: sticky;
  width: calc(100vw - 395px);
  display: flex;

  .title {
    display: flex;
    align-items: center;
    .icon {
      margin-right: 4px;
      width: 3px;
      height: 10px;
      background: #7551ff;
      border-radius: 2px;
    }
    .text {
      font-size: 14px;
      color: #a3aed0;
    }
  }
  .chart-wrap {
    flex: 4;
    .chart {
      padding-top: 31px;
      height: 110px;
    }
  }
  .rank-wrap {
    flex: 3;
    .rank {
      margin-left: 20px;
      position: relative;
      .account-wrap {
        display: flex;
        width: 271px;
        margin-bottom: -15px;
        margin-top: 35px;
        .account-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          &:nth-child(1) {
            margin-top: -7px;
          }
          &:nth-child(2) {
            margin-top: -20px;
          }
          .img-wrap {
            img {
              width: 24px;
              height: 24px;
            }
          }
          .account {
            font-size: 12px;
            color: #707eae;
          }
          .percent {
            margin-top: 3px;
            width: 53px;
            height: 24px;
            line-height: 24px;
            text-align: center;
            background: #e9e3ff;
            border-radius: 20px;
            color: #9374ff;
            font-size: 14px;
          }
        }
      }
      .rank-bg {
      }
      .absolute1 {
        position: absolute;
        bottom: 7px;
        left: 130px;
        font-size: 34px;
        font-weight: 700;
        color: #ffffff;
      }
      .absolute2 {
        position: absolute;
        bottom: 5px;
        left: 40px;
        font-size: 24px;
        font-weight: 700;
        color: #ffffff;
      }
      .absolute3 {
        position: absolute;
        bottom: 5px;
        left: 10px;
        font-size: 24px;
        font-weight: 700;
        color: #ffffff;
        bottom: 2px;
        left: 221px;
      }
    }
  }
}
.drawer-content {
  padding: 10px 14px;
  .drawer-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .title {
      font-weight: 700;
      font-size: 34px;
      color: #2b3674;
    }
    img {
      width: 15px;
      height: 15px;
    }
  }
  .drawer-main {
    .info-wrap {
      margin-top: 26px;
      display: flex;
      .collector {
        flex: 3;
        border-right: 1px dashed #e0e5f2;
        display: flex;
        align-items: center;
        img {
          margin-right: 11px;
          width: 56px;
          height: 56px;
        }
        .right {
          .title {
            font-size: 14px;
            color: #8f9bba;
          }
          .value {
            font-weight: 700;
            font-size: 24px;
            color: #1b2559;
          }
        }
      }
      .rank {
        flex: 2;
        border-right: 1px dashed #e0e5f2;
        padding-left: 20px;
        .title {
          font-size: 14px;
          color: #8f9bba;
        }
        .value {
          font-weight: 700;
          font-size: 24px;
          color: #1b2559;
        }
      }
      .state {
        flex: 2;
        display: flex;
        align-items: center;
        padding-left: 20px;
        .tag {
          width: 74px;
          height: 48px;
          line-height: 48px;
          text-align: center;
          background: rgba(5, 205, 153, 0.1);
          border-radius: 7px;
          font-weight: 700;
          font-size: 24px;
          color: #05cd99;
        }
      }
    }
    .head {
      margin-top: 60px;
      display: flex;
      align-items: center;
      .icon {
        width: 4px;
        height: 16px;
        background: #7551ff;
        border-radius: 2px;
        margin-right: 4px;
      }
      span {
        font-weight: 700;
        font-size: 24px;
        color: #2b3674;
      }
    }
    .input-wrap {
      margin-top: 16px;
      /deep/ .arco-input {
        color: #1b2559;
        font-weight: 700;
        font-size: 34px;
      }
      .input {
        padding-left: 20px;
        padding-right: 20px;
        width: 100%;
        height: 100px;
        background: #f4f7fe;
        border-radius: 10px;
      }
      /deep/ .arco-input-focus {
        background: white;
      }
    }
    .slider-wrap {
      padding: 0 30px;
      margin-top: 60px;
      /deep/ .arco-slider-with-marks {
        padding: 0;
      }
      .slider {
        width: 100%;
      }
    }
    .range {
      margin-top: 12px;
      display: flex;
      justify-content: space-between;
      font-weight: 700;
      font-size: 42px;
      color: #2200b7;
      .left {
        text-align: left;
        .top {
          display: flex;
          align-items: center;
          .unit {
            margin-left: 7px;
            margin-top: 21px;
            font-size: 14px;
            font-weight: 500;
          }
        }
        .bottom {
          font-weight: 500;
          font-size: 14px;
          color: #8f9bba;
        }
      }
      .split {
      }
      .right {
        text-align: right;
        .top {
          display: flex;
          align-items: center;
          .unit {
            margin-left: 7px;
            margin-top: 21px;
            font-size: 14px;
            font-weight: 500;
          }
        }
        .bottom {
          text-align: left;
          font-weight: 500;
          font-size: 14px;
          color: #8f9bba;
        }
      }
    }
    .btn-wrap {
      margin-top: 80px;
      text-align: center;
      .btn {
        width: 375px;
        height: 46px;
      }
    }
  }
}
</style>