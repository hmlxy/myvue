<template>
  <div>
    <h1>use attribute</h1>
    <transition name="fade">
      <p :key="msg">{{ msg }}</p>
    </transition>
    
    <el-button type="primary" size="default" @click="changeMsg">change msg</el-button>


    
   
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: true,
    };
  },
  methods: {
    changeMsg() {
      this.msg = this.msg === "hello" ? "goodbye" : "hello";
    },
  },
};
</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
