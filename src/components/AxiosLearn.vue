<template>
  <div class="axios">
    <h1>use axios</h1>

    <!-- use watch and axios -->
    <p>
      ask a yes/no question
      <input type="text" v-model="question" />
    </p>
    <p>{{ answer }}</p>







    
  </div>
</template>





<script>

import _ from 'lodash';
export default {
  name: "AxiosLearn",
  data() {
    return {
      property: "value",
      question: "",
      answer: "I cannot give you an answer until you ask a question!",
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

<style scoped></style>
