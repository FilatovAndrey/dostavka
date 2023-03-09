<script setup>
import Why from "./Why.vue";
import InfoSearch from "./InfoSearch.vue";
import InfoBlock from "./InfoBlock.vue";
import {useRoute} from "vue-router"
const route = useRoute()

</script>
<template>
  <div class="wrap">
    <InfoSearch v-if="route.path === '/'"></InfoSearch>
    <Why><slot> МЫ В СОЦСЕТЯХ </slot></Why>
    <InfoBlock></InfoBlock>
  </div>
</template>
<style scoped>
.wrap {
    padding: 0 5px;
    width: 250px;
  display: flex;
  flex-direction: column;
}
</style>
