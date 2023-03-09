<script setup>
    const cardInfo = [
    {
    img: "https://dostavka-dnr.ru/upload/iblock/cc6/an5fk57lvk9wrormviyrnmbc6doawj5x.png",
    info: "Ближайшая Доставка будет во ВТОРНИК",
    text: " Донецк, Макеевка, Харцызск, Ждановка,Енакиево,Горловка,Углегорск,Розовка",
    path: "/delivery"  
  },
  {
    img: "https://dostavka-dnr.ru/upload/iblock/211/v3jdopvn74lpo32bfbusn0xmotmbe275.png",
    info: "Постоянные скиди до 6%",
    text: "С нами всегда Выгодно.",
    path: "/sale"
  }, 
  {
    img: "https://dostavka-dnr.ru/upload/iblock/8f9/heg781x9m6kk5of9evwx7b62g01j65n5.png",
    info: "Бесплатная доставка до квартиры",
    text: "",
    path: "/deliveryTerms"
  },
    ]
</script>
<template>
  <div class="news">
    <div class="news-title">Новости</div>
    <div class="news-elements">
      <div class="news-element" v-for=" (el, i) in cardInfo" :key="i">
        <router-link :to="el.path" class="news-element-image"
          ><img
            class="img"
            :src="el.img"
            alt="img"
        /></router-link>

        <div class="news-element-content">
          <router-link :to="el.path" class="news-element-content__info"
            >{{ el.info }}
          </router-link>

          <p class="news-element-content__text">
            {{ el.text }}
          </p>
          <router-link class="news-element__btn" :to="el.path">
            <button>Подробнее</button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
button{
    border: none;
    padding: 5px 10px;
    background: var(--blueLight);
    cursor: pointer;
}
.img {
  width: 100%;
}
.news {
    &-elements{
        display: flex;
    }
  &-title {
    font-size: 40px;
  }
  &-element:last-child {
    margin-right:0;
  }
  &-element {
    margin-right: 15px;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    &-image{
        margin-bottom: 20px;
    }
    &-content {
        padding: 10px;
      &__text {
        padding: 20px 0;
      }
      &__info{
        padding: 20px 0;
      }
    }
  }
}
</style>
