<template>
  <div class="mytest">
    <!-- use messgae -->
    <p>i made firstVueProject {{ message }}</p>
    <!-- use v-bind -->
    <span :title="message"></span>
    <!-- use v-if -->
    <button @click="seen = !seen">change</button>
    <p v-if="seen">can you see it?</p>
    <!-- use v-for -->
    <p v-for="(item, index) in forarray" :key="index">
      {{ index }} - {{ item.name }}
    </p>
    <!-- use methods -->
    <button @click="reverseMessage">反转消息</button>
    <p>{{ message }}</p>
    <!-- use input -->
    <p>{{ inputMessage }}</p>
    <input type="text" v-model="inputMessage" placeholder="请输入字符改变" />
    <!-- use computed -->
    <p>use computed reverse messgae: {{ computedReverse }}</p>
    <!-- use watch and axios -->
    <p>
      ask a yes/no question
      <input type="text" v-model="question" />
    </p>
    <p>{{ answer }}</p>

    <!-- use v-if -->
    <template v-if="loginType === 'username'">
      <label for="username">username</label>
      <input type="text" placeholder="input username" />
    </template>

    <template v-else>
      <label for="email">email</label>
      <input type="text" placeholder="email" />
    </template>
    <button @click="toggleLoginType">toggle loginType</button>

    <!-- use v-for -->
    <p v-for="(value, name, index) in person" :key="index">
      {{ index }} - {{ name }} : {{ value }}
    </p>

    <!-- use v-on -->
    <button @click="say('hello')">say hello</button>


  </div>
</template>

<script>
import axios from "axios";
import _ from "lodash";

export default {
  name: "MyTest",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      message: "date is :" + new Date().toLocaleString(),
      seen: true,
      forarray: [
        { name: "hml", id: 1 },
        { name: "xy", id: 2 },
        { name: "lj", id: 3 },
      ],
      inputMessage: "",
      question: "",
      answer: "I cannot give you an answer until you ask a question!",
      loginType: "",
      person: {
        name: "hml",
        age: "22",
        gender: "male",
      },
    };
  },

  created() {
    console.log("create");
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
  },

  watch: {
    question: function () {
      this.answer = "Waiting for you to stop typing...";
      this.debouncedGetAnswer();
    },
  },

  methods: {
    reverseMessage() {
      this.message = this.message.split("").reverse().join("");
    },
    getAnswer: function () {
      if (this.question.indexOf("?") === -1) {
        this.answer = "Questions usually contain a question mark. ;-)";
        return;
      }
      this.answer = "Thinking...";
      var vm = this;
      axios
        .get("https://yesno.wtf/api")
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer);
        })
        .catch(function (error) {
          vm.answer = "Error! Could not reach the API. " + error;
        });
    },
    toggleLoginType() {
      this.loginType = this.loginType === "username" ? "eamli" : "username";
    },
    say(message) {
      alert(message);
    },
  },

  computed: {
    computedReverse() {
      return this.message.split("").reverse().join("");
    },
  },

  beforeCreate() {
    console.log("beforeCreate");
  },

  beforeMount() {
    console.log("beforeMount");
  },

  mounted() {
    console.log("mounted");
  },

  beforeUpdate() {
    console.log("beforeUpdate");
  },

  updated() {
    console.log("update");
  },
};
</script>

<style>
.mytest {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

</style>
