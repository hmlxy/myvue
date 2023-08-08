<template>
  <div class="axios">
    <h1>use axios</h1>

    <!-- use watch and axios -->
    <p>
      ask a yes/no question
      <input type="text" v-model="question" />
    </p>
    <p>{{ answer }}</p>

    <div class="main">
      <p>这是组件A</p>
      <p>this is result: {{ result }}</p>
    </div>

    <h1>use props</h1>
    <p>this is props: {{ msgProp }}</p>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  name: "AxiosLearn",
  props: {
    msgProp : {
      type: String,
      required: true,
    }
  },

  data() {
    return {
      property: "value",
      question: "",
      answer: "I cannot give you an answer until you ask a question!",
      result: "this",
    };
  },
  mounted() {
    console.log("mounted");
    //通过get请求（URL地址参数拼接）去调后台接口，并打印响应信息
    // this.$axios
    //   .get("https://yesno.wtf/api?page=1&count=2&type=image")
    //   .then((res) => {
    //     //这里使用箭头函数的形式
    //     // console.log(res,"响应信息")
    //     this.result = res.data.image;
    //   });

    // this.$axios
    //   .get("https://yesno.wtf/api", {
    //     params: {
    //       //将URL地址拼接参数的形式换成传入params对象的形式
    //       page: 1,
    //       count: 2,
    //       type: "image",
    //     },
    //   })
    //   .then((res) => {
    //     //console.log(res,"响应信息")
    //     this.result = res.data.image;
    //   }); //为data中的result赋值

    this.$axios({
      method: "get",
      url: "https://yesno.wtf/api",
      params: {
        page: 1,
        count: 2,
        type: "image",
      },
    }).then((res) => {
      this.result = res.data.image;
    }).catch((error) => {
      if (error.response) {
            // 请求已发出，且服务器的响应状态码超出了 2xx 范围
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        } else if (error.request) {
            // 请求已发出，但没有接收到任何响应
            // 在浏览器中，error.request 是 XMLHttpRequest 实例
            // 在 node.js 中，error.request 是 http.ClientRequest 实例
            console.log(error.request);
        } else {
            // 引发请求错误的错误信息
            console.log('Error', error.message);
        }
        console.log(error.config);

    });

    // // 发送 POST 请求
    // this.$axios({
    //   method: "post",
    //   url: "https://yesno.wtf/api",
    //   data: {
    //     //注意这里，get参数使用params，post参数使用data
    //     firstName: "Fred",
    //     lastName: "Flintstone",
    //   },
    // });

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
    getAnswer: function () {
      if (this.question.indexOf("?") === -1) {
        this.answer = "Questions usually contain a question mark. ;-)";
        return;
      }
      this.answer = "Thinking...";
      var vm = this;
      this.$axios
        .get("https://yesno.wtf/api")
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer);
        })
        .catch(function (error) {
          vm.answer = "Error! Could not reach the API. " + error;
        });
    },
  },
};
</script>
.main { width: 500px; height: 250px; margin: auto; background: rgb(18, 199, 42);
}

<style scoped></style>
