<template>
  <div class="input main-width">
    <h1>use el-input</h1>
    <el-input
      v-model="message"
      placeholder="请输入密码"
      size="normal"
      show-password
      clearable
    ></el-input>
    <el-input
      v-model="input1"
      placeholder="搜索你的世界"
      size="normal"
      prefix-icon="el-icon-search"
      suffix-icon="el-icon-date"
      clearable
    ></el-input>

    <el-input v-model="intpu2" placeholder="请输入什么" size="normal" clearable>
        <template slot="prepend">Http://</template>
        <template slot="append">.com</template>
    </el-input>
    
  </div>
</template>

<script>
export default {
  name: "InputElement",
  data() {
    return {
      message: "",
      input1: "",
      intpu2: '',
    };
  },
};
</script>

<style scoped>
.main-width {
  width: 600px;
  margin: 0 auto;
}
</style>
