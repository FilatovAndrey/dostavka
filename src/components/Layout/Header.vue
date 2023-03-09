<script setup>
import { useProductsStore } from "../../stores/product";
const pStore = useProductsStore();
</script>
<template>
  <header  @handOver="hand" class="header">
    <div class="header-top">
      <div class="header-top-logo">
        <router-link to="/">
          <img
            class="header-link"
            src="https://dostavka-dnr.ru/upload/medialibrary/45e/314si92mip2o6qqszzkurgriqidtuqls.jpg"
            alt="logo"
          />
        </router-link>
      </div>

      <div class="header-top-phone">
        <img
          class="header-top-phone__icon"
          src="../../assets/svg/phone.svg"
          alt="phone"
        />
        <div class="header-top-phone__num">+7(949)3284008</div>
      </div>

      <div class="header-top-basket">
        <div class="login">
          <router-link class="login-link" to="">
            <img
              class="login-link__icon"
              src="../../assets/svg/user1.svg"
              alt="user"
            />
            <div class="login-link__text">Войти</div>
          </router-link>
          <router-link  class="login-link__text" to="/">Регистрация</router-link>
        </div>
        <div class="basket">
          <router-link class="login-link" to="/basket">
            <img
              class="login-link__icon"
              src="../../assets/svg/basket.svg"
              alt="basket"
            />
            <div class="login-link__text">Корзина - <span class="basket-pozition">{{ pStore.getBasketLenght }} позиций</span></div>
            
          </router-link>
        </div>
      </div>
    </div>

    <div class="header-bottom">
      <img class="header-bottom__img"
        src="https://dostavka-dnr.ru/upload/medialibrary/45e/314si92mip2o6qqszzkurgriqidtuqls.jpg"
        alt=""
      />
    </div>
  </header>
</template>
<style lang="scss" scoped>
.header {
    &-bottom{
        &__img{
            width: 100%;
        }
    }
  &-top {
    display: flex;
    justify-content: space-between;
    &-phone {
      display: flex;
      align-items: center;
      &__icon {
        align-items: center;
        width: 20px;
      }
    }
    &-basket {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
  }
  &-link {
    width: 200px;
  }
}
.login {
  display: flex;
  &-link {
    margin-right: 30px;
    display: flex;
    align-items: center;
    &__icon {
      margin-right: 5px;
      width: 20px;
    }
    &__text{
        color: var(--blueLight);
        text-decoration: none;
    }
  }
}
.basket {
  &__icon {
    width: 20px;
  }
  &-pozition {
    color: #000;
  }
}
</style>
