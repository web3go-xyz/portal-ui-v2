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
            <span class="text">01</span>
            <img src="@/assets/images/moonbeam/moonbeam.png" alt="" />
            <div class="right">
              <div class="top">jetblue-125</div>
              <div class="bottom">Safe</div>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="APR">
        <template #header>
          <div class="flex-center">
            <span class="text">APR</span>
            <a-tooltip content="This is tooltip content">
              <img src="@/assets/images/moonbeam/Group_47.png" alt="" />
            </a-tooltip>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="state" label="Min Bond" />
      <el-table-column prop="city" label="Total Stake" />
      <el-table-column prop="address" label="Avg Blocks" />
      <el-table-column prop="Total" label="Total Reward" />
      <el-table-column prop="Action" label="Action" width="90" fixed="right">
        <template #header>
          <div class="flex-center">
            <span class="text">Action</span>
            <a-popover title="Title" trigger="click">
              <img
                class="table-option-icon"
                src="@/assets/images/moonbeam/Frame_67.png"
                alt=""
              />
              <template #content>
                <p>Here is the text content</p>
                <p>Here is the text content</p>
              </template>
            </a-popover>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
      ],
    };
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
</style>