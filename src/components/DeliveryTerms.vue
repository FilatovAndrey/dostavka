<script setup>
import Button from './Ui/Button.vue';
</script>
<template>
  <div class="terms">
    <h1 class="terms__title">Бесплатная доставка до квартиры</h1>
    <img class="terms__img" src="https://rostov.reklama-gravity.ru/wp-content/uploads/2019/12/brendirovanie-2-1024x851.jpg"/>
  </div>
  <h3 class="terms__subtitle">Бесплатная доставка до квартиры</h3>
  <div class="terms__subsubtitle" >Условия доставки:</div>
  <ul class="list">
    <li class="list__item">
      Условия доставки по городам: 1) Бесплатная Доставка каждый день, кроме
      Воскресенья и Понедельника, ЕНАКИЕВО- бесплатная доставка от 900р.
    </li>
    <li class="list__item">УГЛЕГОРСК- бесплатная доставка от 2000р.</li>
    <li class="list__item">
      Горловка ЦГР р-н- бесплатная доставка от 1000р. Горловка 5-й квартал-
      бесплатная доставка от 1000р. Горловка Калининский р-н, 88 квартал,
      майский- бесплатная доставка от 1500р. Горловка Никитовский р-н и
      Комсомолец- бесплатная от 1500 р.
    </li>
    <li class="list__item">
      Условия доставки по городам: ДОНЕЦК, МАКЕЕВКА, ХАРЦЫЗСК, ХАНЖЕНКОВО,
      н.КРЫНКА,ЖДАНОВКА. Бесплатная Доставка-минимальный заказ от 1000р.
      ВТОРНИК, СРЕДА ЧЕТВЕРГ СУББОТА,
    </li>
  </ul>
  <router-link to="/"><Button class="btn"><slot>На главную</slot></Button></router-link>
  
</template>
<style lang="scss" scoped>
.btn{
    display: block;
    margin-top: 40px;
}
.terms{
        display: flex;
        flex-direction: column;
        &__title{
            font-size: 40px;
            margin: 30px 0;
        }
        &__img{
            width: 800px;
            max-height: 600px;
        }
        &__subtitle{
            font-size: 30px;
            margin-bottom: 10px;
        }
        &__subsubtitle{
            font-size: 20px;
            margin-bottom: 10px;
        }
    }
</style>
