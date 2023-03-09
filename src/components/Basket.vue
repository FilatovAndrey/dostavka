<script setup>
import Button from "./Ui/Button.vue";
import { computed, onMounted, ref, watch } from "vue";
import { useProductsStore } from "../stores/product";
const pStore = useProductsStore();

onMounted(() => {
  pStore.addTotalPrice();
});
const comShowBasket = computed(() => {
  return pStore.getBasketLenght;
});
const comGetBasket = computed(() => {
  console.log("----------------",pStore.getBasket);
  return pStore.getBasket;
});
const comSum = computed(() => {
  return pStore.getTotalSumProduct;
});

const count = ref(1);


</script>
<template>
  <main>
    <div class="basket">
      <div class="basket-title">Корзина</div>
      <div v-if="comShowBasket === 0" class="basket-empty">
        <div class="basket-empty-img">
          <img
            class="basket-empty-img__image"
            src="../assets/img/basket.png"
            alt=""
          />
        </div>
        <div class="basket-empty__text">Ваша корзина пуста</div>
      </div>

      <div v-else class="product">
        <div class="product-bot" v-for="prod in comGetBasket" :key="prod.id">
          <div class="product-bot-left">
            <div class="product-bot-left__img">
              <img :src="prod.img" alt="" />
            </div>
            <div class="product-bot-left__title">{{ prod.type }}</div>
          </div>
          <div class="product-bot-right">
            <div class="product-bot-right__price-one">
              цена за шт - {{ prod.price }}
            </div>

            <div class="product-bot-right-count">
              <div class="counter">
                <button 
                  :disabled="prod.quantity === 1"
                  @click="pStore.countMinus(prod.type) "
                  class="counter__click"
                >
                  -
                </button>
                <span class="counter__btn">{{ prod.quantity }} </span>
                <button
                  @click="pStore.countPlus(prod.type)"
                  class="counter__click"
                >
                  +
                </button>
              </div>
            </div>

            <div class="product-bot-right__price-sum">
              {{ prod.totalPrice }} руб - сумма товара
            </div>
          </div>
        </div>
        <div class="product-top">
          <div class="product-top__count">Итого:{{ comSum }} рублей</div>

          <div class="product-top-link">
              <button @click="pStore.openModal">Оформить заказ</button>
          </div>
        </div>
      </div>

      <div class="basket-link">
        <router-link to="/">
          <Button><slot>Нажмите</slot></Button>
        </router-link>
        чтобы продолжить покупки
      </div>
    </div>

  </main>
</template>
<style lang="scss" scoped>


.basket {
  height: 100%;
  width: 100%;
  &-link {
    font-size: 20px;
    margin-bottom: 40px;
  }
  &-empty {
    display: flex;
    font-size: 20px;
    flex-direction: column;
    align-items: center;
    &-img {
      width: 200px;
    }
  }
  &-title {
    font-size: 40px;
  }
}
.product {
  margin-top: 10px;
  &-top {
    margin-bottom: 30px;
    font-size: 20px;
    display: flex;
    &-link {
      margin-left: 30px;
      font-size: 40px;
    }
    &__count {
      font-size: 40px;
    }
  }
  &-bot {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-left {
      display: flex;
      align-items: center;
      &__img {
        margin-right: 15px;
        width: 100px;
      }
      &__title {
        font-size: 20px;
      }
    }
    &-right {
      display: flex;
      align-items: center;
      align-content: center;
      margin-right: 40px;
      font-size: 20px;
      min-width: 500px;

      &-count{
      }
    }
  }
}
.counter {
  &__btn {
    border: none;
    border-radius: 3px;
    padding: 5px 10px;
    &:hover {
    }
  }
  &__click {
    margin: 20px 20px 10px 20px;
    border: none;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
