<template>
  <div class="container">
    <h1>use container</h1>
    <el-container>
      <el-header height="100px">this is header</el-header>
      
      <el-container>
        <el-aside width="200px">this is aside</el-aside>
        <el-main>this is main</el-main>
        <el-footer>this is footer</el-footer>
      </el-container>
    </el-container>

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
.bg-red {
  background-color: red;
}

</style>
