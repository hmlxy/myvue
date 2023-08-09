<template>
  <div>
   <p>{{ message }}</p>
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
    handleClick() {
      this.$emit("customEvent", this.message);
    },
  },

  mounted() {
    this.$on('eventName',(msg) => {
      this.message = msg
    })
  }
};
</script>
