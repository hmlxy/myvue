<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <LayoutElement></LayoutElement>
    <ContainerElement></ContainerElement>
    <ButtonElement></ButtonElement>
    <LinkElement></LinkElement>
    <RadioElement></RadioElement>
    <CheckboxElement></CheckboxElement>
    <InputElement></InputElement>
    <AxiosLearn :msg-prop="fahter"></AxiosLearn>

    <h1>use 生命周期钩子</h1>
    <p>this is count1: {{ count1 }}</p>
    <p>this is count2: {{ count2 }}</p>
    <el-button type="primary" size="default" @click="textArray"
      >change count1=count2</el-button
    >

    <div>
      <p v-if="isshow">thi is old</p>
      <p v-else>this is new</p>
      <el-button type="primary" size="default" @click="changeDOM"
        >隐藏DOM</el-button
      >
    </div>

    <div>
      <h1>use vue-router</h1>

      <keep-alive>
        <HelloWorld></HelloWorld>
      </keep-alive>

      <router-link to="/LayoutElement">LayoutElement</router-link>
      <router-link to="/HelloWorld">HelloWorld</router-link>
      

      <router-view></router-view>
    </div>

   
  </div>

</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import LayoutElement from "./components/LayoutElement.vue";
import ContainerElement from "./components/ContainerElement.vue";
import ButtonElement from "./components/ButtonElement.vue";
import LinkElement from "./components/LinkElement.vue";
import RadioElement from "./components/RadioElement.vue";
import CheckboxElement from "./components/CheckboxElement.vue";
import InputElement from "./components/InputElement.vue";
import AxiosLearn from "./components/AxiosLearn.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    LayoutElement,
    ContainerElement,
    ButtonElement,
    LinkElement,
    RadioElement,
    CheckboxElement,
    InputElement,
    AxiosLearn,
  },

  data() {
    return {
      property: "value",
      version: "",
      fahter: "this is father prop",
      count1: "1",
      count2: "2",
      isshow: true,
    };
  },

  methods: {
    textArray() {
      this.count1 = this.count2;
      this.count2 = this.count2 * 2;
      return this.count1;
    },
    textMethods() {
      console.log("use methods");
    },
    changeDOM() {
      console.log("changed dom");
      this.isshow = !this.isshow;
    },
  },

  watch: {
    count1(newValue, oldValue) {
      console.log("count1 变化了:", oldValue, "to", newValue);
    },

    count2(newValue, oldValue) {
      console.log("count2 变化了:", oldValue, "to", newValue);
    },
  },

  beforeCreate() {
    console.log("this is beforeCreate");
  },

  created() {
    console.log("this created");
    this.textMethods();
    this.changeDOM();
  },

  mounted() {
    console.log("this is mounted");
  },

  beforeUpdate() {
    console.log("this is beforeUpdate");
  },

  updated() {
    console.log("this is updated");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
