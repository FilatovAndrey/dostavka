<script setup>
import {useProductsStore} from "../stores/product"
import {computed, ref} from 'vue'
import Counter from "./Ui/Counter.vue"

const props = defineProps({
  id:{
    type: Number,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  price: {
    type: Number,
  },
});
const pStore = useProductsStore()

const count = ref(1)
const countVal = (valCount)=>{
count.value = valCount
}

const findItemForID = (type)=>{
  console.log("count",count.value);
  const obj =  pStore.arrForWaresView.filter((el)=>{
    return el.type === props.type
  })
  const objVsQuantity = {...obj[0], quantity: count.value}
  pStore.setBasketProduct(objVsQuantity)
}
</script>

<template>
  <div class="wares-inner">
    <div class="wares-inner-wrap">
      <div class="wares-inner-wrap-img">
        <img class="wares-inner-wrap-img__img" :src="img" alt="img" />
      </div>

      <div class="wares-inner-wrap__type">{{ type }}</div>
      <div class="wares-inner-wrap__price">Цена {{ price }} - руб</div>
      <Counter
        @handOver="countVal"
        @findItem="findItemForID"
        :background="'var(--blueDark)'"
        ><slot>В корзину</slot></Counter
      >
      <small class="item">{{ count }} шт</small>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wares-inner {
  margin: 40px 10px;
  padding: 10px;
}
.wares-inner-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__type {
    font-size: 30px;
  }

  &:hover {
    .counter {
      display: block;
    }
  }
}
.wares-inner-wrap-img {
  width: 300px;
  height: 230px;
  &__img {
    background-size: cover;
  }
}
</style>
