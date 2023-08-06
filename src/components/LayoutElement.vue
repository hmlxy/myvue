<template>
  <div class="miangap">
    <h1>use layout</h1>
    <!-- use layout -->
    <el-row :gutter="20">
      <el-col :span="16"><div class="grid-red"></div></el-col>
      <el-col :span="8"><div class="grid-red"></div></el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="8"><div class="grid-red"></div></el-col>
      <el-col :span="4"><div class="grid-red"></div></el-col>
      <el-col :span="12"><div class="grid-red"></div></el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="20"><div class="grid-red"></div></el-col>
      <el-col :span="4"><div class="grid-red"></div></el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: "LayoutElement",
  data() {
    return {
      
    }
  },
};
</script>

<style>
.miangap {
  width: 1200px;
  margin: 20px auto;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.grid-red {
  height: 50px;
  background-color: red;
}
</style>
