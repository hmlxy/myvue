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
