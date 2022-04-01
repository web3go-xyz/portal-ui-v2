<template>
  <div class="table-wrap">
    <el-table :data="tableData">
      <el-table-column type="expand" fixed width="24">
        <template #default="props">
          <p>State: {{ props.row.state }}</p>
          <p>City: {{ props.row.city }}</p>
          <p>Address: {{ props.row.address }}</p>
          <p>Zip: {{ props.row.zip }}</p>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="Collator" fixed width="200">
        <template #default="scope">
          <div class="table-collector">
            <span class="text" :class="'color' + (scope.$index + 1)">{{
              getIndex(scope.$index + 1)
            }}</span>
            <img src="@/assets/images/moonbeam/moonbeam.png" alt="" />
            <div class="right">
              <div class="top">jetblue-125</div>
              <div class="bottom">Safe</div>
            </div>
          </div>
        </template>
      </el-table-column>
      <template v-for="(v, i) in selectColumns" :key="i">
        <el-table-column
          v-if="v.name == 'APR'"
          :prop="v.prop"
          :label="v.name"
          :width="v.width"
        >
          <template #header>
            <div class="flex-center">
              <span class="text">APR</span>
              <a-tooltip content="This is tooltip content">
                <img src="@/assets/images/moonbeam/Group_47.png" alt="" />
              </a-tooltip>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          v-else
          :prop="v.prop"
          :label="v.name"
          :width="v.width"
        />
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
          <span class="common-table-option">simulate</span>
        </template>
      </el-table-column>
    </el-table>
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
      { name: "APR", prop: "state", width: "120" },
      { name: "Min Bond", prop: "state", width: "120" },
      { name: "Total Stake", prop: "state", width: "120" },
      { name: "Avg Blocks", prop: "state", width: "120" },
      { name: "Total Reward", prop: "state", width: "120" },
      { name: "Current Blocks", prop: "state", width: "140" },
      { name: "Self Stake", prop: "state", width: "120" },
      { name: "Delegator Stake", prop: "state", width: "140" },
      { name: "RPM", prop: "state", width: "120" },
      { name: "Min RPM", prop: "state", width: "120" },
      { name: "Max RPM", prop: "state", width: "120" },
      { name: "RPM Volatility Score", prop: "state", width: "160" },
    ];
    return {
      popoverShow: false,
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
  margin-top: 50px;
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
    margin-left: 10px;
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
</style>