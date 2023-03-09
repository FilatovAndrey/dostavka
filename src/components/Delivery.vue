<script setup>
import Button from "./Ui/Button.vue";
</script>
<template>
  <div class="deliv">
    <h1 class="deliv__title">Ближайшая Доставка будет во ВТОРНИК</h1>
    <img
      class="deliv__img"
      src="https://reklama-gravity.ru/wp-content/uploads/2022/03/burger-king-car_banketer.jpg"
      alt=""
    />
    <div class="list">
      <h4 class="list__title">Ближайшая Доставка будет во ВТОРНИК</h4>
      <ul>
        <li>График Доставки по Донецку</li>
        <li>Пролетарский -Вторник, Среда, Четверг, Суббота.</li>
        <li>Буденновский - Вторник, Среда, Четверг, Суббота.</li>
        <li>Киевский -Среда, Суббота.</li>
      </ul>
    </div>
    <router-link class="link" to="/">
      <Button><slot>На главную</slot></Button>
    </router-link>
  </div>
</template>
<style lang="scss" scoped>
.deliv {
  &__title {
    font-size: 40px;
    margin: 20px 0;
  }
  &__img {
    width: 700px;
  }
}
.list {
  &__title {
    font-size: 20px;
    margin: 20px 0;
  }
}
.link {
    display: block;
  margin-top: 20px;
}
</style>
