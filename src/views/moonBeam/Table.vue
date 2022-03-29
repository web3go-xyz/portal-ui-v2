<template>
  <div class="table-wrap">
    <el-table :data="tableData">
      <el-table-column prop="date" label="Collator"> </el-table-column>
      <el-table-column prop="date" label="APR"> </el-table-column>
      <el-table-column prop="date" label="Min Bond"> </el-table-column>
      <el-table-column prop="date" label="Total Stake"> </el-table-column>
      <el-table-column prop="date" label="Avg Blocks"> </el-table-column>
      <el-table-column prop="name" label="Total Reward"> </el-table-column>
      <el-table-column prop="address" label="Action"> </el-table-column>
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
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
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
</style>