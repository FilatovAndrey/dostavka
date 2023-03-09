<script setup>
import Button from './Ui/Button.vue';

</script>
<template>
  <div class="sale">
    <h1 class="sale__title">Постоянные скиди до 6%</h1>
    <img class="sale__img"
      src="https://dostavka-dnr.ru/upload/iblock/e74/184qg1zj78orh8y5b38d6kze3m9d86dp.jpg"
      alt=""
    />
    <div class="list">
      <h4 class="list__title">Постоянные скиди до 6%</h4>
      <ul>
        <li>при заказе от 2 500 р.- скидка 2%</li>
        <li>при заказе от 3 500 р.- скидка 3%</li>
        <li>при заказе от 5 000 р.- скидка 4%</li>
        <li>при заказе от 7 000 р. -скидка 5%</li>
      </ul>
    </div>
    <router-link class="link" to="/">
        <Button><slot>На главную</slot></Button>
    </router-link>
  </div>
</template>
 <style lang="scss" scoped>
 .sale{
    display: flex;
    flex-direction: column;
    &__title{
        font-size: 40px;
        margin: 30px 0;
    }
 }
 .list{
    &__title{
        font-size: 30px;
        margin: 10px 0;
    }
 }
 .link{
    margin-top: 20px;
 }
</style>
