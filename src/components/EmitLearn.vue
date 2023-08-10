<template>
  <div>
    <h1>use $emit $on</h1>
   <p>{{ message }}</p>
   <el-button type="primary" size="default" @click="$emit('definedEvent',message)">触发自定义事件</el-button>
   <el-button type="primary" size="default" @click="$emit('thisEvent','$on监听')">触发$on监听事件</el-button>
   <el-button type="primary" size="default" @click="$emit('onceEvent','$once监听')">触发$once监听事件</el-button>
   <el-button type="primary" size="default" @click="removeEvent">移除为definedEvent事件的所有监听器</el-button>
   
   
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'this is chirldren data'
    }
  },

  methods: {
    removeEvent() {
      this.$off('definedEvent')
    }
  },

  mounted() {
    this.$on('thisEvent',(msg) => {
      this.message = msg
    })
    this.$once('onceEvent',(msg) => {
      this.message = msg
    })
  },


};
</script>
