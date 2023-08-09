<template>
  <div>
    <h1>use slot</h1>
    <slot name="header">Default header content</slot>
    <slot name="footer">default footer content</slot>

    <slot :text="version"></slot>

    <el-button type="primary" size="default" @click="$listeners.click">Click me</el-button>
    
  </div>
</template>

<script>
export default {
  name: "SlotLearn",
  data() {
    return {
      version: "this is children 1.2",
    };
  },

  mounted() {
    console.log("slotChildren:", this.$slots); // 输出插槽内容
    console.log('listeners',this.$listeners);
  },

};
</script>
