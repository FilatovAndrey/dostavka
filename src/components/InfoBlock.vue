<script setup>
import Button from "../components/Ui/Button.vue"

const info = [
    {
        image:"../assets/svg/check.svg",
        title:"О МАГАЗИНЕ",
        desc:"Узнайте больше о нашем магазине: кто мы, наши клиенты и почему они выбрали именно нас. Наши контакты и реквизиты.",
        path:"/",
    },
    {
        image:"../assets/svg/check.svg",
        title:"ДОСТАВКА",
        desc:"Доставим ваш заказ в Донецк, Макеевку, Горловку, Енакиево, Ждановку, Углегорск, Розовку, Кировское.",
        path:"/",
    },
    {
        image:"../assets/svg/check.svg",
        title:"МЫ ГАРАНТИРУЕМ",
        desc:"Мы гордимся репутацией нашего магазина. Если товар не соответствует качеству, вы за него не платите.",
        path:"/",
    },
    {
        image:"../assets/svg/check.svg",
        title:"КАК КУПИТЬ",
        desc:"Ваш первый заказ в интернет-магазине? Мы с радостью подскажем как сделать покупки в интернете простыми и удобными.",
        path:"/",
    },
]
</script>
<template>
  <div class="info">
    <div class="info__title">ПОЛЕЗНАЯ ИНФОРМАЦИЯ</div>

    <div class="info-content" v-for="(block, i) in info" :key="i">
      <div class="info-content-title">
        <img
          class="info-content-title__icon"
          src="../assets/svg/check.svg"
          alt="icon"
        />

        <div class="info-content-title__text">{{block.title}}</div>
      </div>
      <div class="info-content__desc">{{block.desc}}
      </div>
      <router-link to="/" class="info-content__link">
        <Button><slot>Подробнее</slot></Button>
      </router-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.info {
  &__title {
    padding-top: 30px;
  }
}
.info-content-title {
  padding: 15px 0 5px 10px;
  display: flex;
  align-items: center;
  &__icon {
    padding-right: 5px;
    width: 20px;
  }
}
.info-content {
  &__desc {
  }
  &__link {
    display: flex;
    margin-top: 10px;
  }
}
</style>
