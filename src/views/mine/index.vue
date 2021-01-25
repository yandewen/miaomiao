<template>
  <div id="main">
    <Header title="我的喵喵" />
    <div id="content">
      <login />
    </div>

    <tabBar />
  </div>
</template>

<script>
import Header from "@/components/Header";
import tabBar from "@/components/tabBar";
import login from "@/components/login";

export default {
  name: "mine",
  components: {
    Header,
    tabBar,
    login,
  },
};
</script>

<style scoped>
</style>