<template>
  <v-app>
    <status-comp></status-comp>
    <h1>{{ title }}</h1>
    <p>{{ count }}</p>
    <v-btn color="primary" @click="onClickHandler">1증가</v-btn>
    <home-comp></home-comp>
    <status-comp></status-comp>
  </v-app>
</template>

<script>
import HomeComp from "./HomeComp";
export default {
  components: {
    HomeComp,
  },
  methods: {
    onClickHandler() {
      this.count++;
    },
  },

  data() {
    return {
      title: "안녕하세요",
      count: 1,
    };
  },
};
</script>

<style>
</style>