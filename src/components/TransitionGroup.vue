<template>
  <div>


    <transition-group name="fade">
      <div v-for="item in items" :key="item.id" class="item-gap">
        {{ item.text }}
        <button @click="removeItem(item)">Remove</button>
      </div>
    </transition-group>
    <button @click="addItem()">add</button>

    
  </div>


</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, text: "Item 1" },
        { id: 2, text: "Item 2" },
      ],
      nextItemId: 3,
    };
  },
  methods: {
    addItem() {
      this.items.push({ id: this.nextItemId, text: `Item ${this.nextItemId}` });
      this.nextItemId++;
    
    },
    removeItem(item) {
      const index = this.items.indexOf(item);
      if (index !== -1) {
        this.items.splice(index, 1);
      }
    },
  },
};
</script>

<style scoped>
.item-gap {
  margin: 20px 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
