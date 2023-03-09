<script setup>
// import News from '../components/News.vue';
import Inform from "../components/Inform.vue";
import CatalogProducts from "../components/CatalogProducts.vue";
import News from "../components/News.vue";


</script>
<template>
  <News></News>
  
  <div class="wrap">
    <div><CatalogProducts></CatalogProducts></div>
    <div><Inform></Inform></div>
  </div>
</template>
<style scoped>
.wrap {
  display: flex;
  justify-content: space-between;
}
</style>
