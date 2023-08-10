<template>
  <div>
    <h1>use slot</h1>

    
    <slot name="header">Default header content</slot>
    <slot name="footer">default footer content</slot>

    <!-- 这里的 :content是自定义的属性，用于将数据从子组件传给父组件 -->
    <slot name="children" :content="version"></slot>

    <el-button type="primary" size="default" @click="$listeners.click"
      >接收父组件的事件</el-button
    >
  </div>
</template>

<script>
export default {
  name: "SlotLearn",
  data() {
    return {
      version: "1.2.7",
    };
  },

  mounted() {
    console.log("slotChildren:", this.$slots); // 输出插槽内容
    console.log("listeners", this.$listeners);
  },
};
</script>
