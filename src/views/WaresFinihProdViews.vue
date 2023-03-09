<script setup>
import Inform from "../components/Inform.vue";
import { computed } from "vue";
import { useProductsStore } from "../stores/product";
import CardProduct from "../components/CardProduct.vue";

const pStore = useProductsStore()
const comgetgetFilterIdInCatalog= computed(() => {
   return [pStore.getFinihFilter]
});
const comFinihCard= computed(() => {
   return [pStore.getFinihFilter][0].which
});

</script>
  <template>
    <div class="wares">
      <Inform></Inform>
      <div class="wares-wrap">
        <div class="product">
          <h1 v-for="p in comgetgetFilterIdInCatalog" :key="p.type">
        {{ p.type }}</h1>
        </div>
        <div class="product-all">
          <CardProduct v-for=" (pr, i) in comFinihCard" :key="i"
          :id="pr.id"
          :type="pr.type"
          :img="pr.img"
          :price="pr.price"
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
    h1{
        font-size: 40px;
    }
  </style>


