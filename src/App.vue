<script setup>
import Header from "./components/Layout/Header.vue";
import { useProductsStore } from "./stores/product";
const pStore = useProductsStore();
</script>

<template>
  <div class="wrap">
    <div class="container">
      <Header></Header>
      <router-view></router-view>
    </div>
    <div v-if="pStore.showModal" class="modal-wrap"></div>
    <div v-if="pStore.showModal" class="modal-window">
      <div class="modal-window__title">Ваш заказ</div>
      <div
        class="modal-window-content"
        v-for="prod in pStore.basketProduct"
        :key="prod.type"
      >
        <div class="modal-window-content__type">{{ prod.type }}</div>
        <div class="modal-window-content__price">
          {{ prod.totalPrice }} рублей
        </div>
      </div>

      <div class="modal-window__total">
        К оплате {{ pStore.getTotalSumProduct }} рублей
      </div>
      <button class="modal-window__btn" @click="pStore.closeModal()">
        Подтвердить заказ
      </button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  position: relative;
}
.modal-wrap {
  width: 100%;
  min-height: 100%;
  background: rgb(129, 125, 125);
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-window {
  padding: 30px;
  width: 600px;
  height: fit-content;
  background: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  &__title {
    text-align: center;
    font-size: 30px;
  }
  &-content {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    font-size: 25px;
  }
  &__total {
    margin: 100px 0 20px 0;
  }
}
</style>
