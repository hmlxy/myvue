<template>
  <div class="link">
    <h1>use el-link</h1>
    <el-link class="text-link" type="primary" :underline="false" href="" target="_blank">文字链接</el-link>
    <el-link class="text-link" type="primary" :underline="true" href="" target="_blank">下划线链接</el-link>
    <el-link class="text-link" type="primary" :underline="false" href="" target="_blank" disabled>禁用链接</el-link>
 
  </div>
</template>

<script>
export default {
  name: 'LinkElement',
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>
.text-link {
  font-size: 25px;
  color: green;
}

</style>