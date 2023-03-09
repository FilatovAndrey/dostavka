<script setup>
import Product from "./Product.vue";

import { useProductsStore } from "../stores/product";
import { computed } from "vue";
const pStore = useProductsStore();

const comProducts = computed(() => {
  return pStore.getAllProducts;
});
console.log("pStore.getAllProducts",pStore.getAllProducts);
</script>
<template>
  <div class="products">
    <Product
      v-for="prod in comProducts"
      :key="prod.id"
      :id="prod.id"
      :img="prod.img"
      :type="prod.type"
      :inStock="prod.inStock"
      :price="prod.price"
      :path="'/wares'"
    >
    </Product>
  </div>
</template>
<style lang="scss" scoped>
.products{
    display: flex;
    flex-wrap: wrap;
}
</style>
