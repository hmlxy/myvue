<template>
  <div class="checkbox">
    <h1>use el-checkbox</h1>
    <el-checkbox v-model="checked1" label="1" :indeterminate="false"
      >选项{{ checked1 }}</el-checkbox
    >
    <el-checkbox v-model="checked2" label="2" :indeterminate="false"
      >选项{{ checked2 }}</el-checkbox
    >

    <p>use el-checkbox-group</p>
    <p>checkedList:{{ checkedList }}</p>
    <el-checkbox-group v-model="checkedList">
      <el-checkbox
        v-for="item in checkedItems"
        :key="item.key"
        :label="item.label"
      >
        <p>选项{{ item.label }}</p>
      </el-checkbox>
    </el-checkbox-group>

    <p>use indeterminate</p>

    <el-checkbox
      :indeterminate="isIndeterminate"
      v-model="checkAll"
      
      @change="handleCheckAllChange"
      >全选</el-checkbox
    >

    <el-checkbox-group
      v-model="checkedCities"
      @change="handleCheckedCitiesChange"
    >
      <el-checkbox v-for="city in cities" :label="city" :key="city">{{
        city
      }}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  name: "CheckboxElement",
  data() {
    return {
      checked1: true,
      checked2: false,
      checkedList: [],
      checkedItems: [
        { label: "lable1", key: "1" },
        { label: "lable2", key: "2" },
        { label: "label3", key: "3" },
      ],
      checkAll: false,
      isIndeterminate: true,
      checkedCities: ['上海', '北京'],
      cities: ['上海', '北京', '广州', '深圳'],
    };
  },

  methods: {
    handleCheckAllChange(val) {
        // val会获得checkAll的值，也就是true/false
      this.checkedCities = val ? this.cities : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
    //   当全选时自然也就是全选了
      this.checkAll = checkedCount === this.cities.length;
    //   因为当indeterminate为false时，会根据checkall的值判断为全选或全不选
    //   而当既有选择又有没选时，就处于indeterminate状态，也就是true
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
  },











};
</script>

<style scoped></style>
