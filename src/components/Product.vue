<script setup>
import Button from "./Ui/Button.vue";
import {useProductsStore} from '../stores/product'
import {useRouter} from 'vue-router'
import {useRoute} from 'vue-router'
const router = useRouter()
const route = useRoute()
console.log("router",route.path);


const pStore = useProductsStore()
const props = defineProps({
  id:{
    type: Number,
    required:false
  },
  img:{
    type: String,
    required:false
  },
  type:{
    type: String,
    required:false
  },
  inStock:{
    type: Number,
    required:false
  },
  path:{
    type: String,
    required:false,
    default:'/waresFinihProd'
  }
})


</script>
<template>
  <div class="product">
    <router-link :to="path" class="product-image ">
      <img class="product-image__img"
        :src=img
        alt="img"
    /></router-link>

    <router-link v-if="route.path !=='/wares'"  @click="pStore.filterWare(id)" class="product__link" :to="path">
      <Button><slot>{{ type }} </slot></Button>
    </router-link>

    <router-link v-else @click="pStore.click(id)"  class="product__link" :to="path">
      <Button>{{type}}</Button>
    </router-link>

    <p>На складе - {{ inStock }} кг</p>
  </div>
</template>
<style lang="scss" scoped>
p{
  margin-top: 5px;
}
.product {
  max-width: 250px;
  min-width: 250px;
  display: flex;
  flex-direction: column;
  padding: 20px;
}
.product-image{
display: block;
margin-bottom: 10px;
        &__img{
          max-height: 150px;
          min-height: 150px;
        }
}
</style>
