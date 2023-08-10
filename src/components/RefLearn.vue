<template>
  <div>
    <h1 ref="childrenDom">use ref</h1>

    <el-button type="primary" size="default" @click="showlog"
      >ref访问Dom</el-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "hello",
    };
  },
  methods: {
    showlog() {
      console.log(this.$refs.childrenDom);
    },
  },
  mounted() {},
};
</script>
