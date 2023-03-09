<script setup>
import { useProductsStore } from "../stores/product";
import { computed } from "vue";

import Inform from "../components/Inform.vue";
import Product from "../components/Product.vue";
import CardProduct from "../components/CardProduct.vue";

const pStore = useProductsStore();

const comgetfilterIdInCatalog = computed(() => {
  return pStore.getarrForWaresView;
});
const comgetgetFilterIdInCatalog= computed(() => {
  return pStore.getFilterIdInCatalog[0].product;
});

console.log("для каталога ", pStore.getFilterIdInCatalog);
console.log("массив конк", pStore.getarrForWaresView);
</script>
<template>
  <div class="wares">
    <Inform></Inform>
    <div class="wares-wrap">
      <div class="product">
        <Product
          v-for="prod in comgetgetFilterIdInCatalog"
          :key="prod.id"
          :id="prod.id"
          :img="prod.img"
          :type="prod.type"
          :inStock="prod.inStock"
          
          :path="'/waresFinihProd'"
          
        ></Product>
      </div>
      <div class="product-all">
        <CardProduct
          v-for="prod in comgetfilterIdInCatalog"
          :key="prod.id"
          :id="prod.id"
          :img="prod.img"
          :type="prod.type"
          :inStock="prod.inStock"
          :price="prod.price"
        >
        </CardProduct>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.product-all {
  display: flex;
  flex-wrap: wrap;
}
.wares {
  display: flex;
}
.product {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}
</style>
