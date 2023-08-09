<template>
  <div>
    <h1>use InheritAttr</h1>
    <p>attrs:[<span v-for="(value, key) in $attrs" :key="key">{{ key }}: {{ value }}</span>]</p>
  
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    message: {
      type: String,
      
    },
  },

  mounted() {
    
  }
};
</script>
