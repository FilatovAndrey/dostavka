<script setup></script>
<template>
  <div class="why">
    <div class="social">
      <router-link to="/">
        <img class="social__image" src="../assets/svg/vk.svg" alt="" />
      </router-link>
      
      <div class="social__title"><slot></slot></div>
    </div>
    <div class="why-content">
      <div class="why-content__title">ПОЧЕМУ МЫ?</div>
      <ul class="why-content__list">
        <li class="why-content__list-item">Постоянные Скидки</li>
        <li class="why-content__list-item">Всегда свежие продукты</li>
        <li class="why-content__list-item">Доступные цены</li>
        <li class="why-content__list-item">Бесплатная доставка</li>
        <li class="why-content__list-item">Вежливый персонал</li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.why {
    padding-top: 20px;
    padding-bottom: 40px;
    border-bottom: 3px solid #706f6f; 
}
.why-content{
  &__list{
    padding: 5px 0 0 10px
  }
  &__list-item{
    padding-top: 3px;
  }
}
.social {
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  &__image {
    width: 40px;
    padding-right: 5px;
  }
}
</style>
