<script setup>
import { RouterView } from "vue-router";
import TopNav from "./components/Navbar/Top-Nav.vue";

</script>

<template>
  <div>
    <div class="main-cont w-100">

      <div class="main w-100 backgroung-white">
        <div class="r-container">
          <TopNav></TopNav>
          <RouterView></RouterView>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.r-container {
  /* background-color: #dedede; */
  width: 100%;
}
</style>
