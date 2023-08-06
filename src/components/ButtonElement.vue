<template>
  <div class="button">
    <h1>use el-button</h1>
    <el-row>
      <el-button type="default" size="default">默认按钮</el-button>
      <el-button plain type="info" size="default">朴素按钮</el-button>
      <el-button round type="success" size="default">圆角按钮</el-button>
      <el-button type="primary" size="default" icon="el-icon-edit">图标按钮</el-button>
      <el-button type="warning" size="default" disabled>禁用按钮</el-button>
      <el-button type="text" size="default" >文字按钮</el-button>
      <p>use el-button-group</p>
      <el-button-group>
        <el-button type="primary" size="default" icon="el-icon-upload"></el-button>
        <el-button type="primary" size="default" icon="el-icon-download"></el-button>
      </el-button-group>
      
    </el-row>

  </div>
</template>

<script>
export default {
  name: "ContainerElement",
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

</style>
