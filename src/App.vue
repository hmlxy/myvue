<template>
  <div id="app" v-cloak>
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

    <div class="hookFuntion">
      <h1>use 生命周期钩子</h1>
      <p>this is count1: {{ count1 }}</p>
      <p>this is count2: {{ count2 }}</p>
      <el-button type="primary" size="default" @click="textArray"
        >change count1=count2</el-button
      >

      <div>
        <p v-if="isshow">thi is old</p>
        <p v-else>this is new</p>
        <el-button type="primary" size="default" @click="isshow = !isshow"
          >隐藏DOM</el-button
        >
      </div>
    </div>

    <div class="router">
      <h1>use vue-router</h1>

      <keep-alive>
        <HelloWorld></HelloWorld>
        <LayoutElement></LayoutElement>
      </keep-alive>

      <router-link to="/HelloWorld">HelloWorld</router-link>
      <router-link to="/LayoutElement">LayoutElement</router-link>

      <router-view></router-view>
    </div>

    <InheritAttr :message="fahter" version="10"></InheritAttr>

    <SlotLearn @click="handleClick">
      <template #header>
        <div>this is father header slot</div>
      </template>

      <template #footer>
        <div>this is father footer slot {{ version }}</div>
      </template>

      <!-- 子组件给父组件传内容 -->
      <template #children="slotProps">
        <div>form children {{ slotProps.content }}</div>
      </template>
    </SlotLearn>

    <EmitLearn @definedEvent="handleDefinedEvent"></EmitLearn>

    <DirectiveUse></DirectiveUse>

    <AttributeSuper></AttributeSuper>

    <RefLearn ref="refChildren"></RefLearn>
    <el-button type="primary" size="default" @click="useRefChildren"
      >ref访问子组件</el-button
    >
    <div class="isComponent">
      <h1>use is</h1>
      <el-button type="primary" size="default" @click="changeCompnent"
        >change component</el-button
      >
      <component :is="currentComponent"></component>
    </div>

    <div class="useTransition">
      <transition name="fade" >
        <div class="tr" :key="message">
          <p>{{ message }}</p>
          <p>{{ message }}</p>
          <p>{{ message }}</p>
        </div>
      </transition>
      <el-button type="primary" size="default" @click="changeMsg"
        >change msg</el-button
      >
    </div>

    <TransitionGroup></TransitionGroup>




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
import InheritAttr from "./components/InheritAttr.vue";
import SlotLearn from "./components/SlotLearn.vue";
import EmitLearn from "./components/EmitLearn.vue";
import DirectiveUse from "./components/DirectiveUse.vue";
import AttributeSuper from "./components/AttributeSuper.vue";
import RefLearn from "./components/RefLearn.vue";
import TransitionGroup from "./components/TransitionGroup.vue";



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
    InheritAttr,
    SlotLearn,
    EmitLearn,
    DirectiveUse,
    AttributeSuper,
    RefLearn,
    TransitionGroup,
  },

  props: {
    msg: {
      type: String,
      default: "hello msg",
    },
  },

  data() {
    return {
      property: "value",
      version: "2.7.1",
      fahter: "this is father prop",
      count1: "1",
      count2: "2",
      isshow: true,
      currentComponent: "HelloWorld",
      message: "hello",
    };
  },

  methods: {
    textArray() {
      this.count1 = this.count2;
      this.count2 = this.count2 * 2;
      return this.count1;
    },
    handleClick() {
      console.log("Button clicked!");
    },
    handleDefinedEvent(data) {
      console.log("父组件data:", data);
    },
    useRefChildren() {
      console.log(this.$refs.refChildren);
    },
    changeCompnent() {
      this.currentComponent =
        this.currentComponent === "HelloWorld" ? "LayoutElement" : "HelloWorld";
    },
    changeMsg() {
      this.message = this.message === "hello" ? "goodbye" : "hello";
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
  },

  mounted() {
    console.log("this is mounted");
    console.log("$data", this.$data);
    console.log("$props", this.$props);
    console.log("$el", this.$el);
    console.log("$parent", this.$parent);
    console.log("$options", this.$options);
    console.log("$root", this.$root);
    console.log("$children", this.$children);
    console.log("$scopedSlots", this.$scopedSlots);
    console.log("$domref", this.$refs.myDomRef);
    if (this.$isServer) {
      console.log("is isServer");
    } else {
      console.log("is not isServer");
    }
  },

  beforeUpdate() {
    console.log("this is beforeUpdate");
  },

  updated() {
    console.log("this is updated");
  },
};
</script>

<style scoped>
[v-cloak] {
  display: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
